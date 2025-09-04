import openai
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import pandas as pd
import time
import logging
from datetime import datetime, timedelta
from config import *
import random

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class AIEmailCampaign:
    def __init__(self):
        self.openai_client = None
        self.setup_openai()
        
    def setup_openai(self):
        """Setup OpenAI API client"""
        try:
            if not OPENAI_API_KEY:
                raise ValueError("OpenAI API key not found in environment variables")
            
            openai.api_key = OPENAI_API_KEY
            self.openai_client = openai
            logger.info("OpenAI client initialized successfully")
            
        except Exception as e:
            logger.error(f"Error setting up OpenAI: {e}")
            raise
    
    def generate_personalized_email(self, company_name, industry, service_type="SEO"):
        """Generate personalized email content using OpenAI"""
        try:
            prompt = f"""
            Write a professional, personalized cold email for {company_name}, a {industry} business.
            
            Requirements:
            - Keep it under 150 words
            - Be specific to their industry
            - Include a clear value proposition
            - End with a call-to-action
            - Professional but friendly tone
            - Focus on {service_type} services
            
            Format:
            Subject: [Compelling subject line]
            
            [Email body]
            
            Best regards,
            [Your name]
            """
            
            response = self.openai_client.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a professional sales copywriter specializing in B2B outreach."},
                    {"role": "user", "content": prompt}
                ],
                max_tokens=300,
                temperature=0.7
            )
            
            email_content = response.choices[0].message["content"].strip()
            logger.info(f"Generated email for {company_name}")
            return email_content
            
        except Exception as e:
            logger.error(f"Error generating email for {company_name}: {e}")
            return None
    
    def generate_follow_up_email(self, company_name, days_since_first_contact):
        """Generate follow-up email content"""
        try:
            prompt = f"""
            Write a follow-up email for {company_name} after {days_since_first_contact} days.
            
            Requirements:
            - Keep it under 100 words
            - Be polite and not pushy
            - Offer additional value
            - Include a gentle reminder
            - Professional tone
            
            Format:
            Subject: [Follow-up subject line]
            
            [Email body]
            
            Best regards,
            [Your name]
            """
            
            response = self.openai_client.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a professional sales copywriter specializing in follow-up emails."},
                    {"role": "user", "content": prompt}
                ],
                max_tokens=200,
                temperature=0.6
            )
            
            email_content = response.choices[0].message["content"].strip()
            logger.info(f"Generated follow-up email for {company_name}")
            return email_content
            
        except Exception as e:
            logger.error(f"Error generating follow-up email for {company_name}: {e}")
            return None
    
    def send_email(self, to_email, subject, body, from_name="Your Name"):
        """Send email using SMTP"""
        try:
            if not EMAIL_USER or not EMAIL_PASSWORD:
                logger.error("Email credentials not configured")
                return False
            
            # Create message
            msg = MIMEMultipart()
            msg['From'] = f"{from_name} <{EMAIL_USER}>"
            msg['To'] = to_email
            msg['Subject'] = subject
            
            # Add body
            msg.attach(MIMEText(body, 'plain'))
            
            # Send email
            server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
            server.starttls()
            server.login(EMAIL_USER, EMAIL_PASSWORD)
            
            text = msg.as_string()
            server.sendmail(EMAIL_USER, to_email, text)
            server.quit()
            
            logger.info(f"Email sent successfully to {to_email}")
            return True
            
        except Exception as e:
            logger.error(f"Error sending email to {to_email}: {e}")
            return False
    
    def create_drip_campaign(self, leads_data, campaign_type="initial"):
        """Create and execute a drip email campaign"""
        try:
            if not leads_data:
                logger.warning("No leads data provided for drip campaign")
                return []
            
            results = []
            
            for lead in leads_data:
                try:
                    company_name = lead.get('Company Name', 'Unknown')
                    industry = lead.get('Industry', 'business')
                    email = lead.get('Email', '')
                    
                    if email == 'N/A' or not email:
                        logger.warning(f"No email for {company_name}, skipping")
                        continue
                    
                    # Generate email content
                    if campaign_type == "initial":
                        email_content = self.generate_personalized_email(company_name, industry)
                    elif campaign_type == "follow_up":
                        email_content = self.generate_follow_up_email(company_name, 7)
                    else:
                        email_content = self.generate_personalized_email(company_name, industry)
                    
                    if not email_content:
                        logger.warning(f"Could not generate email for {company_name}")
                        continue
                    
                    # Extract subject and body
                    lines = email_content.split('\n')
                    subject = ""
                    body = ""
                    
                    for line in lines:
                        if line.startswith('Subject:'):
                            subject = line.replace('Subject:', '').strip()
                        elif line.startswith('Best regards,'):
                            body += line + '\n'
                        elif subject and not line.startswith('Subject:'):
                            body += line + '\n'
                    
                    if not subject:
                        subject = f"Quick question about {company_name}'s online presence"
                    
                    # Send email
                    success = self.send_email(email, subject, body.strip())
                    
                    results.append({
                        'company_name': company_name,
                        'email': email,
                        'subject': subject,
                        'sent': success,
                        'timestamp': datetime.now().isoformat(),
                        'campaign_type': campaign_type
                    })
                    
                    # Add delay between emails to avoid spam filters
                    time.sleep(random.uniform(30, 60))
                    
                except Exception as e:
                    logger.error(f"Error processing lead {company_name}: {e}")
                    results.append({
                        'company_name': company_name,
                        'email': email,
                        'subject': 'Error',
                        'sent': False,
                        'timestamp': datetime.now().isoformat(),
                        'campaign_type': campaign_type,
                        'error': str(e)
                    })
            
            # Save campaign results
            self.save_campaign_results(results, campaign_type)
            
            logger.info(f"Drip campaign completed: {len([r for r in results if r['sent']])} emails sent")
            return results
            
        except Exception as e:
            logger.error(f"Error in drip campaign: {e}")
            return []
    
    def save_campaign_results(self, results, campaign_type):
        """Save campaign results to CSV"""
        try:
            filename = f"campaign_results_{campaign_type}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
            df = pd.DataFrame(results)
            df.to_csv(filename, index=False)
            logger.info(f"Campaign results saved to {filename}")
            
        except Exception as e:
            logger.error(f"Error saving campaign results: {e}")
    
    def analyze_campaign_performance(self, results):
        """Analyze email campaign performance"""
        try:
            if not results:
                return {}
            
            df = pd.DataFrame(results)
            
            analysis = {
                'total_emails': len(df),
                'emails_sent': len(df[df['sent'] == True]),
                'success_rate': len(df[df['sent'] == True]) / len(df) * 100,
                'campaign_type': df['campaign_type'].iloc[0] if len(df) > 0 else 'unknown',
                'date_range': {
                    'start': df['timestamp'].min(),
                    'end': df['timestamp'].max()
                }
            }
            
            logger.info(f"Campaign Analysis: {analysis}")
            return analysis
            
        except Exception as e:
            logger.error(f"Error analyzing campaign performance: {e}")
            return {}
    
    def create_email_templates(self, industry):
        """Create email templates for specific industries"""
        try:
            templates = {}
            
            # Initial outreach template
            initial_prompt = f"""
            Create a professional email template for {industry} businesses.
            
            Requirements:
            - Industry-specific value proposition
            - Clear call-to-action
            - Professional tone
            - Under 150 words
            
            Format:
            Subject: [Template subject]
            
            [Template body]
            """
            
            response = self.openai_client.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a professional email template writer."},
                    {"role": "user", "content": initial_prompt}
                ],
                max_tokens=300,
                temperature=0.5
            )
            
            templates['initial'] = response.choices[0].message["content"].strip()
            
            # Follow-up template
            follow_up_prompt = f"""
            Create a follow-up email template for {industry} businesses.
            
            Requirements:
            - Gentle reminder
            - Additional value proposition
            - Professional tone
            - Under 100 words
            """
            
            response = self.openai_client.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a professional email template writer."},
                    {"role": "user", "content": follow_up_prompt}
                ],
                max_tokens=200,
                temperature=0.5
            )
            
            templates['follow_up'] = response.choices[0].message["content"].strip()
            
            # Save templates
            self.save_email_templates(industry, templates)
            
            logger.info(f"Created email templates for {industry}")
            return templates
            
        except Exception as e:
            logger.error(f"Error creating email templates for {industry}: {e}")
            return {}
    
    def save_email_templates(self, industry, templates):
        """Save email templates to file"""
        try:
            filename = f"email_templates_{industry.replace(' ', '_')}.txt"
            
            with open(filename, 'w') as f:
                f.write(f"Email Templates for {industry}\n")
                f.write("=" * 50 + "\n\n")
                
                for template_type, content in templates.items():
                    f.write(f"{template_type.upper()} TEMPLATE:\n")
                    f.write("-" * 30 + "\n")
                    f.write(content)
                    f.write("\n\n")
            
            logger.info(f"Email templates saved to {filename}")
            
        except Exception as e:
            logger.error(f"Error saving email templates: {e}")

if __name__ == "__main__":
    # Test the AI email campaign
    campaign = AIEmailCampaign()
    
    # Test email generation
    test_email = campaign.generate_personalized_email("ABC Pest Control", "pest control")
    print("Generated Email:")
    print(test_email)
    
    # Create email templates for pest control
    templates = campaign.create_email_templates("pest control")
    print("\nEmail Templates:")
    for template_type, content in templates.items():
        print(f"\n{template_type.upper()}:")
        print(content) 