#!/usr/bin/env python3
"""
Utah Water Gardens - Advanced Lead Generation System
Main Orchestrator

This system provides a comprehensive lead generation solution that:
1. Scrapes multiple sources for potential leads
2. Scores and qualifies leads automatically
3. Manages follow-up sequences and nurturing campaigns
4. Provides detailed analytics and ROI tracking
5. Generates actionable reports and visualizations

Usage:
    python main_lead_generator.py --mode [generate|nurture|analyze|full]
"""

import argparse
import logging
import sys
import os
from datetime import datetime
import json
from typing import Dict, List

# Import our custom modules
from lead_generation_system import LeadGenerationSystem
from lead_nurturing_system import LeadNurturingSystem
from lead_analytics_system import LeadAnalyticsSystem

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('utah_water_gardens_leads.log'),
        logging.StreamHandler(sys.stdout)
    ]
)

logger = logging.getLogger(__name__)

class UtahWaterGardensLeadGenerator:
    def __init__(self, config_file: str = 'config.json'):
        self.config_file = config_file
        self.config = self.load_config()
        
        # Initialize all systems
        self.lead_generator = LeadGenerationSystem(self.config.get('database_path', 'leads.db'))
        self.nurturing_system = LeadNurturingSystem(
            self.config.get('database_path', 'leads.db'),
            self.config.get('email_config')
        )
        self.analytics_system = LeadAnalyticsSystem(self.config.get('database_path', 'leads.db'))
        
        logger.info("Utah Water Gardens Lead Generation System initialized")
    
    def load_config(self) -> Dict:
        """Load configuration from JSON file"""
        default_config = {
            'database_path': 'leads.db',
            'email_config': {
                'smtp_server': 'smtp.gmail.com',
                'smtp_port': 587,
                'username': 'your-email@gmail.com',
                'password': 'your-app-password',
                'from_name': 'Utah Water Gardens'
            },
            'scraping_settings': {
                'max_leads_per_source': 50,
                'delay_between_requests': 2,
                'timeout': 10
            },
            'lead_scoring': {
                'high_value_keywords': ['koi pond', 'water feature', 'pond maintenance', 'pond installation', 'waterfall'],
                'medium_value_keywords': ['pond', 'water garden', 'fountain', 'aquascape'],
                'location_bonus': ['Salt Lake City', 'West Jordan', 'Sandy', 'Ogden', 'Provo', 'Utah']
            }
        }
        
        try:
            if os.path.exists(self.config_file):
                with open(self.config_file, 'r') as f:
                    config = json.load(f)
                    # Merge with defaults
                    for key, value in default_config.items():
                        if key not in config:
                            config[key] = value
                    return config
            else:
                # Create default config file
                with open(self.config_file, 'w') as f:
                    json.dump(default_config, f, indent=2)
                logger.info(f"Created default config file: {self.config_file}")
                return default_config
        except Exception as e:
            logger.error(f"Error loading config: {e}")
            return default_config
    
    def generate_leads(self) -> Dict:
        """Run the complete lead generation process"""
        logger.info("Starting lead generation process...")
        
        try:
            # Run lead generation
            report = self.lead_generator.run_lead_generation()
            
            # Schedule follow-up sequences for new leads
            new_leads = self.lead_generator.get_high_priority_leads()
            for lead in new_leads:
                self.nurturing_system.schedule_follow_up_sequence(lead['id'])
            
            logger.info(f"Lead generation completed. Generated {report['total_leads']} total leads.")
            return report
            
        except Exception as e:
            logger.error(f"Error in lead generation: {e}")
            return {'error': str(e)}
    
    def nurture_leads(self) -> Dict:
        """Run lead nurturing and follow-up processes"""
        logger.info("Starting lead nurturing process...")
        
        try:
            # Process due follow-ups
            self.nurturing_system.process_follow_ups()
            
            # Generate nurturing report
            report = self.nurturing_system.generate_nurturing_report()
            
            logger.info("Lead nurturing completed successfully.")
            return report
            
        except Exception as e:
            logger.error(f"Error in lead nurturing: {e}")
            return {'error': str(e)}
    
    def analyze_performance(self) -> Dict:
        """Run comprehensive analytics and reporting"""
        logger.info("Starting analytics and reporting...")
        
        try:
            # Generate comprehensive analytics report
            report = self.analytics_system.generate_comprehensive_report()
            
            # Create visualizations
            self.analytics_system.create_visualizations()
            
            # Export detailed report
            self.analytics_system.export_analytics_report()
            
            logger.info("Analytics and reporting completed successfully.")
            return report
            
        except Exception as e:
            logger.error(f"Error in analytics: {e}")
            return {'error': str(e)}
    
    def run_full_pipeline(self) -> Dict:
        """Run the complete lead generation pipeline"""
        logger.info("Running complete lead generation pipeline...")
        
        results = {}
        
        # Step 1: Generate leads
        logger.info("Step 1: Generating leads...")
        results['lead_generation'] = self.generate_leads()
        
        # Step 2: Nurture leads
        logger.info("Step 2: Nurturing leads...")
        results['lead_nurturing'] = self.nurture_leads()
        
        # Step 3: Analyze performance
        logger.info("Step 3: Analyzing performance...")
        results['analytics'] = self.analyze_performance()
        
        # Generate summary
        results['summary'] = self.generate_pipeline_summary(results)
        
        logger.info("Complete pipeline finished successfully.")
        return results
    
    def generate_pipeline_summary(self, results: Dict) -> Dict:
        """Generate a summary of the pipeline results"""
        summary = {
            'timestamp': datetime.now().isoformat(),
            'status': 'completed',
            'total_leads': 0,
            'new_leads': 0,
            'high_priority_leads': 0,
            'potential_revenue': 0,
            'errors': []
        }
        
        # Extract data from results
        if 'lead_generation' in results and 'total_leads' in results['lead_generation']:
            summary['total_leads'] = results['lead_generation']['total_leads']
            summary['new_leads'] = results['lead_generation'].get('new_leads', 0)
            summary['high_priority_leads'] = results['lead_generation'].get('high_priority_leads', 0)
        
        if 'analytics' in results and 'roi_metrics' in results['analytics']:
            summary['potential_revenue'] = results['analytics']['roi_metrics'].get('total_potential_revenue', 0)
        
        # Check for errors
        for step, result in results.items():
            if isinstance(result, dict) and 'error' in result:
                summary['errors'].append(f"{step}: {result['error']}")
        
        if summary['errors']:
            summary['status'] = 'completed_with_errors'
        
        return summary
    
    def create_targeted_campaign(self, campaign_name: str, target_criteria: Dict) -> int:
        """Create and send a targeted email campaign"""
        logger.info(f"Creating targeted campaign: {campaign_name}")
        
        try:
            campaign_id = self.nurturing_system.create_targeted_campaign(campaign_name, target_criteria)
            self.nurturing_system.send_campaign(campaign_id)
            
            logger.info(f"Campaign {campaign_name} sent successfully")
            return campaign_id
            
        except Exception as e:
            logger.error(f"Error creating campaign: {e}")
            return None
    
    def get_quick_stats(self) -> Dict:
        """Get quick statistics about the lead database"""
        try:
            import sqlite3
            conn = sqlite3.connect(self.config.get('database_path', 'leads.db'))
            cursor = conn.cursor()
            
            # Get basic stats
            cursor.execute('SELECT COUNT(*) FROM leads')
            total_leads = cursor.fetchone()[0]
            
            cursor.execute('SELECT COUNT(*) FROM leads WHERE lead_score >= 30')
            high_priority = cursor.fetchone()[0]
            
            cursor.execute('SELECT COUNT(*) FROM leads WHERE lead_status = "new"')
            new_leads = cursor.fetchone()[0]
            
            cursor.execute('SELECT AVG(lead_score) FROM leads')
            avg_score = cursor.fetchone()[0] or 0
            
            conn.close()
            
            return {
                'total_leads': total_leads,
                'high_priority_leads': high_priority,
                'new_leads': new_leads,
                'average_lead_score': round(avg_score, 1),
                'last_updated': datetime.now().isoformat()
            }
            
        except Exception as e:
            logger.error(f"Error getting quick stats: {e}")
            return {'error': str(e)}
    
    def export_leads(self, filename: str = None) -> str:
        """Export leads to CSV file"""
        if not filename:
            filename = f"utah_water_gardens_leads_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
        
        try:
            self.lead_generator.export_leads_to_csv(filename)
            logger.info(f"Leads exported to {filename}")
            return filename
        except Exception as e:
            logger.error(f"Error exporting leads: {e}")
            return None

def main():
    parser = argparse.ArgumentParser(description='Utah Water Gardens Lead Generation System')
    parser.add_argument('--mode', choices=['generate', 'nurture', 'analyze', 'full', 'stats', 'export'], 
                       default='full', help='Operation mode')
    parser.add_argument('--config', default='config.json', help='Configuration file path')
    parser.add_argument('--output', help='Output file for export mode')
    
    args = parser.parse_args()
    
    # Initialize the system
    generator = UtahWaterGardensLeadGenerator(args.config)
    
    try:
        if args.mode == 'generate':
            result = generator.generate_leads()
            print(f"Lead generation completed: {result.get('total_leads', 0)} total leads")
            
        elif args.mode == 'nurture':
            result = generator.nurture_leads()
            print("Lead nurturing completed")
            
        elif args.mode == 'analyze':
            result = generator.analyze_performance()
            print("Analytics completed")
            
        elif args.mode == 'full':
            result = generator.run_full_pipeline()
            summary = result['summary']
            print(f"\nPipeline Summary:")
            print(f"Status: {summary['status']}")
            print(f"Total Leads: {summary['total_leads']}")
            print(f"New Leads: {summary['new_leads']}")
            print(f"High Priority: {summary['high_priority_leads']}")
            print(f"Potential Revenue: ${summary['potential_revenue']:,.2f}")
            
        elif args.mode == 'stats':
            stats = generator.get_quick_stats()
            print(f"\nQuick Stats:")
            print(f"Total Leads: {stats['total_leads']}")
            print(f"High Priority: {stats['high_priority_leads']}")
            print(f"New Leads: {stats['new_leads']}")
            print(f"Average Score: {stats['average_lead_score']}")
            
        elif args.mode == 'export':
            filename = generator.export_leads(args.output)
            if filename:
                print(f"Leads exported to: {filename}")
            else:
                print("Export failed")
        
        if args.mode != 'stats' and args.mode != 'export':
            print(f"\nDetailed results saved to log file: utah_water_gardens_leads.log")
            
    except KeyboardInterrupt:
        print("\nOperation cancelled by user")
    except Exception as e:
        print(f"Error: {e}")
        logger.error(f"Main execution error: {e}")

if __name__ == "__main__":
    main() 