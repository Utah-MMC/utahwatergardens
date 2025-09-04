#!/usr/bin/env python3
"""
SmartFunnel - Complete Lead Generation and Automation System
============================================================

This script orchestrates the entire lead generation and automation process:
1. Web scraping from multiple sources
2. CRM automation with Google Sheets
3. AI-powered email campaigns
4. Performance tracking and reporting
"""

import os
import sys
import logging
import schedule
import time
from datetime import datetime
import pandas as pd
from web_scraper import LeadScraper
from crm_automation import CRMAutomation
from ai_email_campaign import AIEmailCampaign
from config import *

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('smartfunnel.log'),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

class SmartFunnel:
    def __init__(self):
        self.scraper = None
        self.crm = None
        self.email_campaign = None
        self.setup_components()
        
    def setup_components(self):
        """Initialize all system components"""
        try:
            logger.info("Initializing SmartFunnel components...")
            
            # Initialize web scraper
            self.scraper = LeadScraper()
            logger.info("✓ Web scraper initialized")
            
            # Initialize CRM automation
            self.crm = CRMAutomation()
            logger.info("✓ CRM automation initialized")
            
            # Initialize AI email campaign
            self.email_campaign = AIEmailCampaign()
            logger.info("✓ AI email campaign initialized")
            
            logger.info("All components initialized successfully!")
            
        except Exception as e:
            logger.error(f"Error initializing components: {e}")
            raise
    
    def run_full_pipeline(self, target_industries=None, target_locations=None):
        """Run the complete lead generation and automation pipeline"""
        try:
            logger.info("🚀 Starting SmartFunnel pipeline...")
            
            # Use default targets if none provided
            if not target_industries:
                target_industries = TARGET_INDUSTRIES[:3]  # Start with first 3 industries
            if not target_locations:
                target_locations = TARGET_LOCATIONS[:3]   # Start with first 3 locations
            
            # Step 1: Web Scraping
            logger.info("📊 Step 1: Web Scraping")
            all_leads = []
            
            for industry in target_industries:
                for location in target_locations:
                    logger.info(f"Scraping {industry} in {location}")
                    leads = self.scraper.scrape_all_sources(industry, location)
                    all_leads.extend(leads)
                    
                    # Add delay between requests
                    time.sleep(SCRAPING_DELAY)
            
            logger.info(f"Scraped {len(all_leads)} total leads")
            
            # Step 2: Save to CSV
            logger.info("💾 Step 2: Saving to CSV")
            self.scraper.save_to_csv(all_leads, 'fresh_leads.csv')
            
            # Step 3: Import to CRM
            logger.info("📈 Step 3: Importing to CRM")
            imported_count = self.crm.append_leads(all_leads)
            logger.info(f"Imported {imported_count} leads to CRM")
            
            # Step 4: Generate email templates
            logger.info("✉️ Step 4: Generating email templates")
            for industry in set([lead['Industry'] for lead in all_leads]):
                self.email_campaign.create_email_templates(industry)
            
            # Step 5: Run email campaign (only for leads with emails)
            logger.info("📧 Step 5: Running email campaign")
            leads_with_emails = [lead for lead in all_leads if lead.get('Email') and lead['Email'] != 'N/A']
            
            if leads_with_emails:
                campaign_results = self.email_campaign.create_drip_campaign(leads_with_emails, "initial")
                analysis = self.email_campaign.analyze_campaign_performance(campaign_results)
                logger.info(f"Email campaign completed: {analysis}")
            else:
                logger.warning("No leads with email addresses found")
            
            # Step 6: Generate report
            logger.info("📋 Step 6: Generating report")
            self.generate_pipeline_report(all_leads, imported_count)
            
            logger.info("✅ SmartFunnel pipeline completed successfully!")
            return all_leads
            
        except Exception as e:
            logger.error(f"Error in pipeline: {e}")
            return []
    
    def generate_pipeline_report(self, leads, imported_count):
        """Generate a comprehensive pipeline report"""
        try:
            report = {
                'timestamp': datetime.now().isoformat(),
                'total_leads_scraped': len(leads),
                'leads_imported_to_crm': imported_count,
                'leads_with_emails': len([l for l in leads if l.get('Email') and l['Email'] != 'N/A']),
                'leads_with_phones': len([l for l in leads if l.get('Phone') and l['Phone'] != 'N/A']),
                'leads_with_websites': len([l for l in leads if l.get('Website') and l['Website'] != 'N/A']),
                'sources': {},
                'industries': {},
                'locations': {}
            }
            
            # Count by source
            for lead in leads:
                source = lead.get('Source', 'Unknown')
                report['sources'][source] = report['sources'].get(source, 0) + 1
            
            # Count by industry
            for lead in leads:
                industry = lead.get('Industry', 'Unknown')
                report['industries'][industry] = report['industries'].get(industry, 0) + 1
            
            # Count by location (extract from notes)
            for lead in leads:
                notes = lead.get('Notes', '')
                if ' - ' in notes:
                    location = notes.split(' - ')[-1]
                    report['locations'][location] = report['locations'].get(location, 0) + 1
            
            # Save report
            report_filename = f"pipeline_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
            import json
            with open(report_filename, 'w') as f:
                json.dump(report, f, indent=2)
            
            logger.info(f"Pipeline report saved to {report_filename}")
            
            # Print summary
            print("\n" + "="*50)
            print("SMARTFUNNEL PIPELINE REPORT")
            print("="*50)
            print(f"Total leads scraped: {report['total_leads_scraped']}")
            print(f"Leads imported to CRM: {report['leads_imported_to_crm']}")
            print(f"Leads with emails: {report['leads_with_emails']}")
            print(f"Leads with phones: {report['leads_with_phones']}")
            print(f"Leads with websites: {report['leads_with_websites']}")
            print("\nTop Sources:")
            for source, count in sorted(report['sources'].items(), key=lambda x: x[1], reverse=True)[:3]:
                print(f"  {source}: {count}")
            print("\nTop Industries:")
            for industry, count in sorted(report['industries'].items(), key=lambda x: x[1], reverse=True)[:3]:
                print(f"  {industry}: {count}")
            print("="*50)
            
        except Exception as e:
            logger.error(f"Error generating report: {e}")
    
    def run_scheduled_scraping(self):
        """Run scraping on a schedule"""
        logger.info("Running scheduled scraping...")
        self.run_full_pipeline()
    
    def run_follow_up_campaign(self):
        """Run follow-up email campaign for existing leads"""
        try:
            logger.info("Running follow-up email campaign...")
            
            # Get leads that haven't been contacted recently
            new_leads = self.crm.get_leads_by_status('New')
            
            if new_leads:
                campaign_results = self.email_campaign.create_drip_campaign(new_leads, "follow_up")
                analysis = self.email_campaign.analyze_campaign_performance(campaign_results)
                logger.info(f"Follow-up campaign completed: {analysis}")
            else:
                logger.info("No new leads for follow-up campaign")
                
        except Exception as e:
            logger.error(f"Error in follow-up campaign: {e}")
    
    def setup_scheduling(self):
        """Setup automated scheduling"""
        # Run scraping every day at 9 AM
        schedule.every().day.at("09:00").do(self.run_scheduled_scraping)
        
        # Run follow-up campaign every 3 days at 2 PM
        schedule.every(3).days.at("14:00").do(self.run_follow_up_campaign)
        
        logger.info("Scheduled tasks:")
        logger.info("  - Daily scraping at 9:00 AM")
        logger.info("  - Follow-up campaigns every 3 days at 2:00 PM")
    
    def run_scheduler(self):
        """Run the scheduler loop"""
        logger.info("Starting scheduler...")
        self.setup_scheduling()
        
        while True:
            schedule.run_pending()
            time.sleep(60)  # Check every minute
    
    def cleanup(self):
        """Clean up resources"""
        try:
            if self.scraper:
                self.scraper.cleanup()
            logger.info("Cleanup completed")
        except Exception as e:
            logger.error(f"Error during cleanup: {e}")

def main():
    """Main function"""
    print("🚀 SmartFunnel - Lead Generation & Automation System")
    print("=" * 60)
    
    # Check if running in interactive mode
    if len(sys.argv) > 1:
        command = sys.argv[1].lower()
        
        smartfunnel = SmartFunnel()
        
        try:
            if command == "scrape":
                # Run just scraping
                logger.info("Running scraping only...")
                leads = smartfunnel.scraper.run_full_scrape()
                print(f"Scraped {len(leads)} leads!")
                
            elif command == "pipeline":
                # Run full pipeline
                smartfunnel.run_full_pipeline()
                
            elif command == "crm":
                # CRM operations
                if len(sys.argv) > 2:
                    subcommand = sys.argv[2].lower()
                    if subcommand == "stats":
                        stats = smartfunnel.crm.get_sheet_stats()
                        print("CRM Statistics:")
                        print(f"Total leads: {stats['total_leads']}")
                        print(f"Status counts: {stats['status_counts']}")
                    elif subcommand == "export":
                        count = smartfunnel.crm.export_to_csv()
                        print(f"Exported {count} leads to CSV")
                else:
                    print("CRM commands: stats, export")
                    
            elif command == "email":
                # Email campaign operations
                if len(sys.argv) > 2:
                    subcommand = sys.argv[2].lower()
                    if subcommand == "templates":
                        industry = sys.argv[3] if len(sys.argv) > 3 else "pest control"
                        templates = smartfunnel.email_campaign.create_email_templates(industry)
                        print(f"Created templates for {industry}")
                    elif subcommand == "test":
                        email = smartfunnel.email_campaign.generate_personalized_email("Test Company", "pest control")
                        print("Generated test email:")
                        print(email)
                else:
                    print("Email commands: templates [industry], test")
                    
            elif command == "schedule":
                # Run scheduler
                smartfunnel.run_scheduler()
                
            else:
                print("Available commands:")
                print("  scrape    - Run web scraping only")
                print("  pipeline  - Run full pipeline")
                print("  crm       - CRM operations (stats, export)")
                print("  email     - Email operations (templates, test)")
                print("  schedule  - Run automated scheduler")
                
        finally:
            smartfunnel.cleanup()
            
    else:
        # Interactive mode
        print("Starting SmartFunnel in interactive mode...")
        smartfunnel = SmartFunnel()
        
        try:
            while True:
                print("\nOptions:")
                print("1. Run full pipeline")
                print("2. Run scraping only")
                print("3. View CRM stats")
                print("4. Generate email templates")
                print("5. Run follow-up campaign")
                print("6. Exit")
                
                choice = input("\nEnter your choice (1-6): ").strip()
                
                if choice == "1":
                    smartfunnel.run_full_pipeline()
                elif choice == "2":
                    leads = smartfunnel.scraper.run_full_scrape()
                    print(f"Scraped {len(leads)} leads!")
                elif choice == "3":
                    stats = smartfunnel.crm.get_sheet_stats()
                    print(f"Total leads: {stats['total_leads']}")
                    print(f"Status counts: {stats['status_counts']}")
                elif choice == "4":
                    industry = input("Enter industry: ").strip()
                    templates = smartfunnel.email_campaign.create_email_templates(industry)
                    print(f"Created templates for {industry}")
                elif choice == "5":
                    smartfunnel.run_follow_up_campaign()
                elif choice == "6":
                    break
                else:
                    print("Invalid choice. Please try again.")
                    
        finally:
            smartfunnel.cleanup()

if __name__ == "__main__":
    main() 