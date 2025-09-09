#!/usr/bin/env python3
"""
Utah Water Gardens Lead Generation System - Demo Script
This script demonstrates all the features of the lead generation system
"""

import os
import sys
from datetime import datetime

def print_header(title):
    """Print a formatted header"""
    print("\n" + "="*60)
    print(f"🎯 {title}")
    print("="*60)

def print_section(title):
    """Print a formatted section header"""
    print(f"\n📋 {title}")
    print("-" * 40)

def main():
    """Main demonstration function"""
    print_header("UTAH WATER GARDENS LEAD GENERATION SYSTEM DEMO")
    
    print("🚀 Welcome to the Utah Water Gardens Lead Generation System!")
    print("This system transforms your web scraper into a powerful lead generation machine.")
    
    # Import the main system
    try:
        from main_lead_generator import UtahWaterGardensLeadGenerator
        print_section("System Initialization")
        print("✅ System imported successfully")
        
        # Initialize the system
        generator = UtahWaterGardensLeadGenerator()
        print("✅ Lead generation system initialized")
        
        # Get current stats
        print_section("Current Database Status")
        stats = generator.get_quick_stats()
        if 'error' not in stats:
            print(f"📊 Total Leads: {stats['total_leads']}")
            print(f"🎯 High Priority Leads: {stats['high_priority_leads']}")
            print(f"🆕 New Leads: {stats['new_leads']}")
            print(f"📈 Average Lead Score: {stats['average_lead_score']}")
        else:
            print(f"❌ Error getting stats: {stats['error']}")
        
        # Demonstrate lead generation
        print_section("Lead Generation Capabilities")
        print("🔍 Multi-Source Lead Discovery:")
        print("   • Real Estate Listings (Zillow, Realtor.com, Redfin)")
        print("   • Social Media Platforms (Facebook, Instagram, Pinterest)")
        print("   • Local Business Directories (Yellow Pages, Yelp, Google Maps)")
        print("   • Competitor Analysis and Tracking")
        
        print("\n🎯 Intelligent Lead Scoring:")
        print("   • Keyword-based scoring (koi pond, water feature, maintenance)")
        print("   • Location bonuses for Utah areas")
        print("   • Service indicators (installation, repair, design)")
        print("   • Urgency detection for immediate needs")
        
        # Demonstrate nurturing capabilities
        print_section("Lead Nurturing Features")
        print("📧 Automated Follow-up Sequences:")
        print("   • Email campaigns with personalized templates")
        print("   • Phone call reminders and scheduling")
        print("   • Engagement tracking and analytics")
        print("   • Lead qualification automation")
        
        # Demonstrate analytics
        print_section("Analytics & Reporting")
        print("📊 Comprehensive Analytics:")
        print("   • ROI tracking and revenue projections")
        print("   • Source performance analysis")
        print("   • Predictive analytics with machine learning")
        print("   • Visual charts and reports")
        
        # Show file structure
        print_section("Generated Files")
        files_to_check = [
            ('leads.db', 'SQLite Database'),
            ('leads_export.csv', 'Lead Export'),
            ('lead_analytics_report.json', 'Analytics Report'),
            ('lead_analytics/', 'Visual Charts Directory'),
            ('config.json', 'Configuration File')
        ]
        
        for filename, description in files_to_check:
            if os.path.exists(filename):
                if os.path.isdir(filename):
                    file_count = len(os.listdir(filename))
                    print(f"✅ {description}: {filename} ({file_count} files)")
                else:
                    size = os.path.getsize(filename)
                    print(f"✅ {description}: {filename} ({size} bytes)")
            else:
                print(f"❌ {description}: {filename} (not found)")
        
        # Demonstrate usage examples
        print_section("Usage Examples")
        print("🔄 Run the complete pipeline:")
        print("   python main_lead_generator.py --mode full")
        
        print("\n🔍 Generate leads only:")
        print("   python main_lead_generator.py --mode generate")
        
        print("\n📧 Nurture existing leads:")
        print("   python main_lead_generator.py --mode nurture")
        
        print("\n📊 Generate analytics and reports:")
        print("   python main_lead_generator.py --mode analyze")
        
        print("\n📈 Get quick statistics:")
        print("   python main_lead_generator.py --mode stats")
        
        print("\n📤 Export leads to CSV:")
        print("   python main_lead_generator.py --mode export --output my_leads.csv")
        
        # Show sample data if available
        if stats.get('total_leads', 0) > 0:
            print_section("Sample Lead Data")
            print("📋 Current leads in database:")
            
            # Import and show sample leads
            import sqlite3
            conn = sqlite3.connect('leads.db')
            cursor = conn.cursor()
            
            cursor.execute('''
                SELECT company_name, city, lead_score, lead_status, lead_source
                FROM leads ORDER BY lead_score DESC LIMIT 3
            ''')
            
            leads = cursor.fetchall()
            for i, (name, city, score, status, source) in enumerate(leads, 1):
                print(f"   {i}. {name} ({city}) - Score: {score}, Status: {status}, Source: {source}")
            
            conn.close()
        
        # Final summary
        print_section("System Summary")
        print("🎯 Your Utah Water Gardens Lead Generation System is fully operational!")
        print("\n✨ Key Benefits:")
        print("   • Automated lead discovery from multiple sources")
        print("   • Intelligent lead scoring and qualification")
        print("   • Automated follow-up and nurturing sequences")
        print("   • Comprehensive analytics and ROI tracking")
        print("   • Easy export and CRM integration")
        
        print("\n🚀 Next Steps:")
        print("   1. Configure your email settings in config.json")
        print("   2. Run the system regularly to generate leads")
        print("   3. Monitor analytics to optimize performance")
        print("   4. Export leads to your CRM system")
        
        print_header("DEMO COMPLETED SUCCESSFULLY")
        print("🎉 Your lead generation system is ready to transform your business!")
        
    except ImportError as e:
        print(f"❌ Error importing system: {e}")
        print("Please ensure all dependencies are installed: pip install -r requirements.txt")
    except Exception as e:
        print(f"❌ Error during demo: {e}")

if __name__ == "__main__":
    main() 