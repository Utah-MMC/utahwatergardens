#!/usr/bin/env python3
"""
SmartFunnel Demo - Showcase the system capabilities
===================================================

This demo script shows how SmartFunnel works without requiring
full API setup. It demonstrates:
1. Web scraping functionality
2. AI email generation
3. Data processing
4. Reporting capabilities
"""

import sys
import logging
from datetime import datetime
import pandas as pd
from web_scraper import LeadScraper
from ai_email_campaign import AIEmailCampaign

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def demo_scraping():
    """Demo web scraping functionality"""
    print("\n" + "="*50)
    print("DEMO: Web Scraping")
    print("="*50)
    
    scraper = LeadScraper()
    
    # Demo scraping for a few industries and locations
    demo_industries = ['pest control', 'landscaping']
    demo_locations = ['Salt Lake City UT', 'Murray UT']
    
    all_leads = []
    
    for industry in demo_industries:
        for location in demo_locations:
            print(f"\nScraping {industry} in {location}...")
            leads = scraper.scrape_all_sources(industry, location)
            all_leads.extend(leads)
            print(f"Found {len(leads)} leads")
    
    # Save demo results
    if all_leads:
        scraper.save_to_csv(all_leads, 'demo_leads.csv')
        print(f"\n✅ Saved {len(all_leads)} demo leads to 'demo_leads.csv'")
        
        # Show sample data
        print("\nSample leads:")
        for i, lead in enumerate(all_leads[:3]):
            print(f"{i+1}. {lead['Company Name']} - {lead['Phone']} - {lead['Industry']}")
    else:
        print("⚠️ No leads found in demo scraping")
    
    scraper.cleanup()
    return all_leads

def demo_ai_email_generation():
    """Demo AI email generation"""
    print("\n" + "="*50)
    print("DEMO: AI Email Generation")
    print("="*50)
    
    try:
        campaign = AIEmailCampaign()
        
        # Demo companies
        demo_companies = [
            ("ABC Pest Control", "pest control"),
            ("Green Thumb Landscaping", "landscaping"),
            ("Quick Fix Plumbing", "plumbing")
        ]
        
        for company_name, industry in demo_companies:
            print(f"\nGenerating email for {company_name} ({industry})...")
            
            email_content = campaign.generate_personalized_email(company_name, industry)
            
            if email_content:
                print("Generated Email:")
                print("-" * 40)
                print(email_content)
                print("-" * 40)
            else:
                print("⚠️ Could not generate email (OpenAI API not configured)")
                break
        
        # Create email templates
        print(f"\nCreating email templates for 'pest control'...")
        templates = campaign.create_email_templates("pest control")
        
        if templates:
            print("✅ Email templates created successfully")
            print("Template files saved to:")
            for template_type in templates.keys():
                print(f"  - email_templates_pest_control.txt")
        else:
            print("⚠️ Could not create templates (OpenAI API not configured)")
            
    except Exception as e:
        print(f"⚠️ AI email generation demo failed: {e}")
        print("This requires OpenAI API key configuration")

def demo_data_processing():
    """Demo data processing and analysis"""
    print("\n" + "="*50)
    print("DEMO: Data Processing & Analysis")
    print("="*50)
    
    try:
        # Load demo data if available
        df = pd.read_csv('demo_leads.csv')
        
        print(f"📊 Data Analysis:")
        print(f"Total leads: {len(df)}")
        print(f"Industries: {df['Industry'].nunique()}")
        print(f"Sources: {df['Source'].nunique()}")
        
        print(f"\n📈 Industry Breakdown:")
        industry_counts = df['Industry'].value_counts()
        for industry, count in industry_counts.items():
            print(f"  {industry}: {count}")
        
        print(f"\n📊 Source Breakdown:")
        source_counts = df['Source'].value_counts()
        for source, count in source_counts.items():
            print(f"  {source}: {count}")
        
        # Data quality analysis
        print(f"\n🔍 Data Quality:")
        print(f"Leads with phone numbers: {len(df[df['Phone'] != 'N/A'])}")
        print(f"Leads with websites: {len(df[df['Website'] != 'N/A'])}")
        print(f"Leads with addresses: {len(df[df['Address'] != 'N/A'])}")
        
        # Save analysis report
        report = {
            'timestamp': datetime.now().isoformat(),
            'total_leads': len(df),
            'industries': industry_counts.to_dict(),
            'sources': source_counts.to_dict(),
            'data_quality': {
                'with_phones': len(df[df['Phone'] != 'N/A']),
                'with_websites': len(df[df['Website'] != 'N/A']),
                'with_addresses': len(df[df['Address'] != 'N/A'])
            }
        }
        
        import json
        with open('demo_analysis_report.json', 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"\n✅ Analysis report saved to 'demo_analysis_report.json'")
        
    except FileNotFoundError:
        print("⚠️ No demo data found. Run scraping demo first.")
    except Exception as e:
        print(f"⚠️ Data processing demo failed: {e}")

def demo_pipeline_simulation():
    """Simulate the full pipeline workflow"""
    print("\n" + "="*50)
    print("DEMO: Pipeline Simulation")
    print("="*50)
    
    print("🚀 Simulating SmartFunnel Pipeline...")
    
    # Step 1: Scraping
    print("\n📊 Step 1: Web Scraping")
    leads = demo_scraping()
    
    if not leads:
        print("⚠️ No leads to process. Skipping remaining steps.")
        return
    
    # Step 2: Data Processing
    print("\n💾 Step 2: Data Processing")
    demo_data_processing()
    
    # Step 3: Email Generation
    print("\n✉️ Step 3: Email Generation")
    demo_ai_email_generation()
    
    # Step 4: Pipeline Report
    print("\n📋 Step 4: Pipeline Report")
    print("="*50)
    print("SMARTFUNNEL DEMO PIPELINE COMPLETED")
    print("="*50)
    print(f"✅ Total leads processed: {len(leads)}")
    print(f"✅ Data saved to: demo_leads.csv")
    print(f"✅ Analysis saved to: demo_analysis_report.json")
    print(f"✅ Email templates created")
    print("\n🎯 Next Steps:")
    print("1. Configure API keys in .env file")
    print("2. Set up Google Sheets credentials")
    print("3. Run full pipeline with: python main.py pipeline")
    print("="*50)

def main():
    """Main demo function"""
    print("🚀 SmartFunnel Demo - Lead Generation & Automation System")
    print("=" * 60)
    
    if len(sys.argv) > 1:
        command = sys.argv[1].lower()
        
        if command == "scrape":
            demo_scraping()
        elif command == "email":
            demo_ai_email_generation()
        elif command == "data":
            demo_data_processing()
        elif command == "pipeline":
            demo_pipeline_simulation()
        else:
            print("Available demo commands:")
            print("  scrape    - Demo web scraping")
            print("  email     - Demo AI email generation")
            print("  data      - Demo data processing")
            print("  pipeline  - Demo full pipeline")
    else:
        # Interactive demo
        print("Starting SmartFunnel Demo in interactive mode...")
        
        while True:
            print("\nDemo Options:")
            print("1. Web Scraping Demo")
            print("2. AI Email Generation Demo")
            print("3. Data Processing Demo")
            print("4. Full Pipeline Demo")
            print("5. Exit")
            
            choice = input("\nEnter your choice (1-5): ").strip()
            
            if choice == "1":
                demo_scraping()
            elif choice == "2":
                demo_ai_email_generation()
            elif choice == "3":
                demo_data_processing()
            elif choice == "4":
                demo_pipeline_simulation()
            elif choice == "5":
                print("Thanks for trying SmartFunnel Demo!")
                break
            else:
                print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main() 