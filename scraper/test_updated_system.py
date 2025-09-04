#!/usr/bin/env python3
"""
Test script to demonstrate the updated Utah Water Gardens Lead Generation System
with new real estate sources and improved URL capture
"""

from lead_generation_system import LeadGenerationSystem
import json

def test_updated_system():
    """Test the updated lead generation system"""
    print("🎯 UTAH WATER GARDENS LEAD GENERATION SYSTEM - UPDATED")
    print("=" * 60)
    
    # Initialize the system
    system = LeadGenerationSystem()
    
    print("\n📋 Updated Real Estate Sources:")
    for source_name, config in system.real_estate_sources.items():
        print(f"  ✅ {source_name.upper()}: {config['base_url']}")
        print(f"     Search patterns: {', '.join(config['search_patterns'])}")
        print(f"     Locations: {', '.join(config['location_filters'])}")
        print()
    
    print("\n📱 Social Media Sources:")
    print("  ✅ Facebook Groups:")
    for group in system.social_media_sources['facebook_groups']:
        print(f"     - {group}")
    
    print("  ✅ Facebook Searches:")
    for search in system.social_media_sources['facebook_searches']:
        print(f"     - {search}")
    
    print("  ✅ Instagram Hashtags:")
    for hashtag in system.social_media_sources['instagram_hashtags']:
        print(f"     - {hashtag}")
    
    print("\n🔍 Custom Search Keywords:")
    for i, keyword in enumerate(system.search_keywords, 1):
        print(f"  {i:2d}. {keyword}")
    
    print("\n📊 Lead Scoring Criteria:")
    print(f"  🎯 High Value Keywords: {', '.join(system.lead_scoring['high_value_keywords'])}")
    print(f"  📈 Medium Value Keywords: {', '.join(system.lead_scoring['medium_value_keywords'])}")
    print(f"  📍 Location Bonus: {', '.join(system.lead_scoring['location_bonus'])}")
    print(f"  🔧 Service Indicators: {', '.join(system.lead_scoring['service_indicators'])}")
    print(f"  ⚡ Urgency Indicators: {', '.join(system.lead_scoring['urgency_indicators'])}")
    
    print("\n✨ New Features:")
    print("  ✅ Added Trulia.com, TheClose.com, Airbnb.com, VRBO.com")
    print("  ✅ Captures actual listing URLs for real estate")
    print("  ✅ Captures actual post URLs for social media")
    print("  ✅ Enhanced lead scoring with multiple keyword bonuses")
    print("  ✅ Organized CSV export with priority levels")
    print("  ✅ Summary reports with source performance")
    
    print("\n🚀 Ready to generate leads!")
    print("Run: python lead_generation_system.py")
    print("Or: python main_lead_generator.py --mode generate")

if __name__ == "__main__":
    test_updated_system() 