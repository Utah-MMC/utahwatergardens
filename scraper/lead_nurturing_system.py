import sqlite3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timedelta
import json
import logging
from typing import List, Dict, Optional
import pandas as pd
import time
import random

class LeadNurturingSystem:
    def __init__(self, database_path='leads.db', email_config=None):
        self.database_path = database_path
        self.email_config = email_config or {
            'smtp_server': 'smtp.gmail.com',
            'smtp_port': 587,
            'username': 'your-email@gmail.com',
            'password': 'your-app-password',
            'from_name': 'Utah Water Gardens'
        }
        
        # Email templates for different lead types
        self.email_templates = {
            'initial_contact': {
                'subject': 'Transform Your Outdoor Space with Custom Water Features',
                'body': '''
Dear {contact_name},

I hope this message finds you well! I noticed your interest in water features and pond services in the Utah area.

At Utah Water Gardens, we specialize in creating stunning custom ponds, waterfalls, and water features that transform ordinary outdoor spaces into extraordinary retreats. Whether you're looking for:

• Custom Koi Ponds
• Pondless Waterfalls
• Water Feature Maintenance
• Pond Repair & Restoration
• Complete Water Garden Design

We'd love to discuss how we can bring your vision to life. Would you be interested in a free consultation to explore your options?

Best regards,
{from_name}
Utah Water Gardens
801-590-8516
lafaverspam@gmail.com
                '''
            },
            'follow_up_1': {
                'subject': 'Your Water Feature Consultation - Next Steps',
                'body': '''
Hi {contact_name},

I wanted to follow up on our recent conversation about your water feature project. 

Did you have a chance to review our portfolio of completed projects? We've created some amazing water features throughout Utah that might inspire your own project.

If you're ready to move forward, I'd be happy to schedule a site visit to discuss your specific needs and provide a detailed proposal.

Looking forward to hearing from you!

Best regards,
{from_name}
Utah Water Gardens
lafaverspam@gmail.com
                '''
            },
            'maintenance_reminder': {
                'subject': 'Keep Your Water Feature Beautiful - Maintenance Reminder',
                'body': '''
Dear {contact_name},

As we approach the changing seasons, your water feature may need some attention to keep it looking its best.

Our maintenance services include:
• Filter cleaning and replacement
• Water quality testing
• Plant care and trimming
• Equipment inspection
• Seasonal preparation

Would you like us to schedule a maintenance visit?

Best regards,
{from_name}
Utah Water Gardens
lafaverspam@gmail.com
                '''
            },
            'seasonal_promotion': {
                'subject': 'Spring Water Feature Special - Limited Time Offer',
                'body': '''
Dear {contact_name},

Spring is the perfect time to enhance your outdoor space with a beautiful water feature!

For a limited time, we're offering:
• 15% off new pond installations
• Free consultation and design
• Extended warranty on all spring projects

This offer expires on {expiry_date}. Don't miss out on creating your perfect outdoor oasis!

Best regards,
{from_name}
Utah Water Gardens
lafaverspam@gmail.com
                '''
            }
        }
        
        # Follow-up sequence timing
        self.follow_up_sequence = [
            {'day': 1, 'type': 'email', 'template': 'initial_contact'},
            {'day': 3, 'type': 'phone', 'template': None},
            {'day': 7, 'type': 'email', 'template': 'follow_up_1'},
            {'day': 14, 'type': 'phone', 'template': None},
            {'day': 30, 'type': 'email', 'template': 'seasonal_promotion'}
        ]
        
        self.init_nurturing_database()
    
    def init_nurturing_database(self):
        """Initialize database tables for lead nurturing"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Create nurturing campaigns table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS nurturing_campaigns (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                campaign_name TEXT,
                campaign_type TEXT,
                target_audience TEXT,
                email_template TEXT,
                created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status TEXT DEFAULT 'active'
            )
        ''')
        
        # Create email tracking table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS email_tracking (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                lead_id INTEGER,
                campaign_id INTEGER,
                email_type TEXT,
                sent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                opened BOOLEAN DEFAULT FALSE,
                clicked BOOLEAN DEFAULT FALSE,
                bounced BOOLEAN DEFAULT FALSE,
                FOREIGN KEY (lead_id) REFERENCES leads (id),
                FOREIGN KEY (campaign_id) REFERENCES nurturing_campaigns (id)
            )
        ''')
        
        # Create follow-up schedule table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS follow_up_schedule (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                lead_id INTEGER,
                sequence_step INTEGER,
                scheduled_date TIMESTAMP,
                completed_date TIMESTAMP,
                interaction_type TEXT,
                notes TEXT,
                status TEXT DEFAULT 'scheduled',
                FOREIGN KEY (lead_id) REFERENCES leads (id)
            )
        ''')
        
        conn.commit()
        conn.close()
    
    def schedule_follow_up_sequence(self, lead_id: int):
        """Schedule a complete follow-up sequence for a new lead"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Get lead creation date
        cursor.execute('SELECT created_date FROM leads WHERE id = ?', (lead_id,))
        result = cursor.fetchone()
        
        if result:
            created_date = datetime.fromisoformat(result[0])
            
            for i, step in enumerate(self.follow_up_sequence):
                scheduled_date = created_date + timedelta(days=step['day'])
                
                cursor.execute('''
                    INSERT INTO follow_up_schedule (
                        lead_id, sequence_step, scheduled_date, interaction_type
                    ) VALUES (?, ?, ?, ?)
                ''', (lead_id, i, scheduled_date, step['type']))
        
        conn.commit()
        conn.close()
        logging.info(f"Scheduled follow-up sequence for lead {lead_id}")
    
    def get_due_follow_ups(self) -> List[Dict]:
        """Get all follow-ups that are due today"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        today = datetime.now().date()
        
        cursor.execute('''
            SELECT 
                fs.id, fs.lead_id, fs.sequence_step, fs.interaction_type,
                l.company_name, l.contact_name, l.phone, l.email,
                l.lead_score, l.lead_source
            FROM follow_up_schedule fs
            JOIN leads l ON fs.lead_id = l.id
            WHERE DATE(fs.scheduled_date) = ? AND fs.status = 'scheduled'
            ORDER BY l.lead_score DESC, fs.scheduled_date ASC
        ''', (today,))
        
        columns = [description[0] for description in cursor.description]
        follow_ups = [dict(zip(columns, row)) for row in cursor.fetchall()]
        
        conn.close()
        return follow_ups
    
    def send_email(self, to_email: str, subject: str, body: str, lead_id: int = None) -> bool:
        """Send an email to a lead"""
        try:
            # Check if we're in test mode
            if self.email_config.get('test_mode', False):
                logging.info(f"TEST MODE: Would send email to {to_email}")
                logging.info(f"Subject: {subject}")
                logging.info(f"Body preview: {body[:100]}...")
                
                # Still log the email send for testing
                if lead_id:
                    self.log_email_send(lead_id, subject, body)
                
                return True
            
            msg = MIMEMultipart()
            msg['From'] = f"{self.email_config['from_name']} <{self.email_config['username']}>"
            msg['To'] = to_email
            msg['Subject'] = subject
            
            msg.attach(MIMEText(body, 'plain'))
            
            server = smtplib.SMTP(self.email_config['smtp_server'], self.email_config['smtp_port'])
            server.starttls()
            server.login(self.email_config['username'], self.email_config['password'])
            
            text = msg.as_string()
            server.sendmail(self.email_config['username'], to_email, text)
            server.quit()
            
            # Log email send
            if lead_id:
                self.log_email_send(lead_id, subject, body)
            
            logging.info(f"Email sent successfully to {to_email}")
            return True
            
        except Exception as e:
            logging.error(f"Failed to send email to {to_email}: {str(e)}")
            return False
    
    def log_email_send(self, lead_id: int, subject: str, body: str):
        """Log email send in database"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO email_tracking (lead_id, email_type, sent_date)
            VALUES (?, ?, CURRENT_TIMESTAMP)
        ''', (lead_id, subject))
        
        conn.commit()
        conn.close()
    
    def process_follow_ups(self):
        """Process all due follow-ups"""
        due_follow_ups = self.get_due_follow_ups()
        
        for follow_up in due_follow_ups:
            try:
                if follow_up['interaction_type'] == 'email' and follow_up['email']:
                    # Send email
                    template_key = self.follow_up_sequence[follow_up['sequence_step']]['template']
                    if template_key and template_key in self.email_templates:
                        template = self.email_templates[template_key]
                        
                        # Personalize email
                        subject = template['subject']
                        body = template['body'].format(
                            contact_name=follow_up['contact_name'] or 'there',
                            from_name=self.email_config['from_name'],
                            expiry_date=(datetime.now() + timedelta(days=14)).strftime('%B %d, %Y')
                        )
                        
                        success = self.send_email(
                            follow_up['email'], 
                            subject, 
                            body, 
                            follow_up['lead_id']
                        )
                        
                        if success:
                            self.mark_follow_up_completed(follow_up['id'], 'email_sent')
                
                elif follow_up['interaction_type'] == 'phone':
                    # Log phone call reminder
                    self.mark_follow_up_completed(follow_up['id'], 'phone_reminder')
                    logging.info(f"Phone call reminder for lead {follow_up['lead_id']}: {follow_up['phone']}")
                
                time.sleep(random.uniform(1, 3))  # Rate limiting
                
            except Exception as e:
                logging.error(f"Error processing follow-up {follow_up['id']}: {str(e)}")
                continue
    
    def mark_follow_up_completed(self, follow_up_id: int, status: str, notes: str = None):
        """Mark a follow-up as completed"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            UPDATE follow_up_schedule 
            SET status = ?, completed_date = CURRENT_TIMESTAMP, notes = ?
            WHERE id = ?
        ''', (status, notes, follow_up_id))
        
        conn.commit()
        conn.close()
    
    def create_targeted_campaign(self, campaign_name: str, target_criteria: Dict) -> int:
        """Create a targeted email campaign"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Build query based on target criteria
        query = "SELECT id FROM leads WHERE 1=1"
        params = []
        
        if 'min_score' in target_criteria:
            query += " AND lead_score >= ?"
            params.append(target_criteria['min_score'])
        
        if 'lead_source' in target_criteria:
            query += " AND lead_source = ?"
            params.append(target_criteria['lead_source'])
        
        if 'status' in target_criteria:
            query += " AND lead_status = ?"
            params.append(target_criteria['status'])
        
        if 'city' in target_criteria:
            query += " AND city LIKE ?"
            params.append(f"%{target_criteria['city']}%")
        
        cursor.execute(query, params)
        target_leads = [row[0] for row in cursor.fetchall()]
        
        # Create campaign record
        cursor.execute('''
            INSERT INTO nurturing_campaigns (
                campaign_name, campaign_type, target_audience, email_template
            ) VALUES (?, ?, ?, ?)
        ''', (
            campaign_name,
            'targeted',
            json.dumps(target_criteria),
            target_criteria.get('template', 'seasonal_promotion')
        ))
        
        campaign_id = cursor.lastrowid
        conn.commit()
        conn.close()
        
        logging.info(f"Created campaign '{campaign_name}' targeting {len(target_leads)} leads")
        return campaign_id
    
    def send_campaign(self, campaign_id: int, template_key: str = None):
        """Send a campaign to all targeted leads"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Get campaign details
        cursor.execute('SELECT * FROM nurturing_campaigns WHERE id = ?', (campaign_id,))
        campaign = cursor.fetchone()
        
        if not campaign:
            conn.close()
            return
        
        # Get target criteria
        target_criteria = json.loads(campaign[3])
        
        # Build query to get target leads
        query = "SELECT id, company_name, contact_name, email FROM leads WHERE 1=1"
        params = []
        
        if 'min_score' in target_criteria:
            query += " AND lead_score >= ?"
            params.append(target_criteria['min_score'])
        
        if 'lead_source' in target_criteria:
            query += " AND lead_source = ?"
            params.append(target_criteria['lead_source'])
        
        if 'status' in target_criteria:
            query += " AND lead_status = ?"
            params.append(target_criteria['status'])
        
        cursor.execute(query, params)
        target_leads = cursor.fetchall()
        
        # Send emails
        template_key = template_key or campaign[4]
        if template_key in self.email_templates:
            template = self.email_templates[template_key]
            
            sent_count = 0
            for lead in target_leads:
                if lead[3]:  # email exists
                    subject = template['subject']
                    body = template['body'].format(
                        contact_name=lead[2] or 'there',
                        from_name=self.email_config['from_name'],
                        expiry_date=(datetime.now() + timedelta(days=14)).strftime('%B %d, %Y')
                    )
                    
                    success = self.send_email(lead[3], subject, body, lead[0])
                    if success:
                        sent_count += 1
                    
                    time.sleep(random.uniform(1, 2))  # Rate limiting
            
            logging.info(f"Campaign {campaign_id} sent to {sent_count} leads")
        
        conn.close()
    
    def get_lead_engagement_metrics(self, lead_id: int) -> Dict:
        """Get engagement metrics for a specific lead"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Get email tracking data
        cursor.execute('''
            SELECT COUNT(*) as total_emails,
                   SUM(CASE WHEN opened = 1 THEN 1 ELSE 0 END) as opened_emails,
                   SUM(CASE WHEN clicked = 1 THEN 1 ELSE 0 END) as clicked_emails
            FROM email_tracking WHERE lead_id = ?
        ''', (lead_id,))
        
        email_metrics = cursor.fetchone()
        
        # Get interaction history
        cursor.execute('''
            SELECT interaction_type, interaction_date, notes
            FROM lead_interactions 
            WHERE lead_id = ? 
            ORDER BY interaction_date DESC
        ''', (lead_id,))
        
        interactions = cursor.fetchall()
        
        conn.close()
        
        return {
            'total_emails': email_metrics[0],
            'opened_emails': email_metrics[1],
            'clicked_emails': email_metrics[2],
            'open_rate': (email_metrics[1] / email_metrics[0] * 100) if email_metrics[0] > 0 else 0,
            'click_rate': (email_metrics[2] / email_metrics[0] * 100) if email_metrics[0] > 0 else 0,
            'interactions': interactions
        }
    
    def qualify_lead(self, lead_id: int, qualification_score: int, notes: str = None):
        """Qualify a lead based on engagement and interactions"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Get lead engagement metrics
        metrics = self.get_lead_engagement_metrics(lead_id)
        
        # Determine qualification status
        if qualification_score >= 80:
            status = 'hot'
        elif qualification_score >= 60:
            status = 'warm'
        elif qualification_score >= 40:
            status = 'lukewarm'
        else:
            status = 'cold'
        
        # Update lead status
        cursor.execute('''
            UPDATE leads 
            SET lead_status = ?, notes = ?
            WHERE id = ?
        ''', (status, notes, lead_id))
        
        # Add qualification interaction
        cursor.execute('''
            INSERT INTO lead_interactions (lead_id, interaction_type, notes, outcome)
            VALUES (?, ?, ?, ?)
        ''', (lead_id, 'qualification', notes, f"Score: {qualification_score}, Status: {status}"))
        
        conn.commit()
        conn.close()
        
        logging.info(f"Lead {lead_id} qualified as {status} (Score: {qualification_score})")
    
    def generate_nurturing_report(self) -> Dict:
        """Generate comprehensive nurturing report"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Get campaign statistics
        cursor.execute('''
            SELECT campaign_name, COUNT(*) as lead_count, status
            FROM nurturing_campaigns 
            GROUP BY campaign_name, status
        ''')
        campaign_stats = cursor.fetchall()
        
        # Get email performance
        cursor.execute('''
            SELECT 
                COUNT(*) as total_sent,
                SUM(CASE WHEN opened = 1 THEN 1 ELSE 0 END) as total_opened,
                SUM(CASE WHEN clicked = 1 THEN 1 ELSE 0 END) as total_clicked
            FROM email_tracking
        ''')
        email_performance = cursor.fetchone()
        
        # Get follow-up completion rates
        cursor.execute('''
            SELECT 
                COUNT(*) as total_scheduled,
                SUM(CASE WHEN status != 'scheduled' THEN 1 ELSE 0 END) as completed
            FROM follow_up_schedule
        ''')
        follow_up_stats = cursor.fetchone()
        
        # Get lead status distribution
        cursor.execute('''
            SELECT lead_status, COUNT(*) as count
            FROM leads 
            GROUP BY lead_status
        ''')
        lead_status_dist = cursor.fetchall()
        
        conn.close()
        
        return {
            'campaigns': campaign_stats,
            'email_performance': {
                'total_sent': email_performance[0],
                'total_opened': email_performance[1],
                'total_clicked': email_performance[2],
                'open_rate': (email_performance[1] / email_performance[0] * 100) if email_performance[0] > 0 else 0,
                'click_rate': (email_performance[2] / email_performance[0] * 100) if email_performance[0] > 0 else 0
            },
            'follow_up_stats': {
                'total_scheduled': follow_up_stats[0],
                'completed': follow_up_stats[1],
                'completion_rate': (follow_up_stats[1] / follow_up_stats[0] * 100) if follow_up_stats[0] > 0 else 0
            },
            'lead_status_distribution': lead_status_dist,
            'generated_date': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }

if __name__ == "__main__":
    # Initialize nurturing system
    nurturing_system = LeadNurturingSystem()
    
    # Process daily follow-ups
    print("Processing daily follow-ups...")
    nurturing_system.process_follow_ups()
    
    # Generate report
    report = nurturing_system.generate_nurturing_report()
    
    print("\n" + "="*50)
    print("LEAD NURTURING REPORT")
    print("="*50)
    print(f"Email Performance:")
    print(f"  Total Sent: {report['email_performance']['total_sent']}")
    print(f"  Open Rate: {report['email_performance']['open_rate']:.1f}%")
    print(f"  Click Rate: {report['email_performance']['click_rate']:.1f}%")
    print(f"\nFollow-up Stats:")
    print(f"  Completion Rate: {report['follow_up_stats']['completion_rate']:.1f}%")
    print(f"\nLead Status Distribution:")
    for status, count in report['lead_status_distribution']:
        print(f"  {status}: {count}")
    print("="*50) 