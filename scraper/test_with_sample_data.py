#!/usr/bin/env python3
"""
Test script to add sample leads and demonstrate the full functionality
of the Utah Water Gardens Lead Generation System
"""

import sqlite3
from datetime import datetime, timedelta
import random

def add_sample_leads():
    """Add sample leads to the database for testing"""
    
    # Sample lead data
    sample_leads = [
        {
            'source_url': 'https://www.zillow.com/utah/',
            'company_name': 'John Smith Residence',
            'contact_name': 'John Smith',
            'phone': '801-555-0123',
            'email': 'john.smith@email.com',
            'website': None,
            'address': '1234 Pond Lane',
            'city': 'Salt Lake City',
            'state': 'UT',
            'zip_code': '84102',
            'services': 'Real Estate - Property with Koi Pond',
            'lead_score': 85,
            'lead_source': 'real_estate',
            'notes': 'High-value property with existing koi pond that needs maintenance'
        },
        {
            'source_url': 'https://www.facebook.com/search/places/?q=pond%20utah',
            'company_name': 'Sarah Johnson',
            'contact_name': 'Sarah Johnson',
            'phone': '801-555-0456',
            'email': 'sarah.j@email.com',
            'website': None,
            'address': '5678 Water Garden Dr',
            'city': 'West Jordan',
            'state': 'UT',
            'zip_code': '84088',
            'services': 'Social Media - Interested in Water Feature Installation',
            'lead_score': 72,
            'lead_source': 'social_media',
            'notes': 'Posted about wanting to install a water feature in backyard'
        },
        {
            'source_url': 'https://www.yellowpages.com/utah/',
            'company_name': 'Mountain View Landscaping',
            'contact_name': 'Mike Davis',
            'phone': '801-555-0789',
            'email': 'mike@mountainviewlandscaping.com',
            'website': 'www.mountainviewlandscaping.com',
            'address': '9012 Business Blvd',
            'city': 'Sandy',
            'state': 'UT',
            'zip_code': '84070',
            'services': 'Local Directory - Landscaping Company',
            'lead_score': 45,
            'lead_source': 'local_directory',
            'notes': 'Landscaping company that might need pond maintenance services'
        },
        {
            'source_url': 'https://www.realtor.com/realestateandhomes-search/Utah',
            'company_name': 'Lisa Chen Property',
            'contact_name': 'Lisa Chen',
            'phone': '801-555-0321',
            'email': 'lisa.chen@email.com',
            'website': None,
            'address': '3456 Fountain Way',
            'city': 'Provo',
            'state': 'UT',
            'zip_code': '84601',
            'services': 'Real Estate - Home with Water Feature',
            'lead_score': 78,
            'lead_source': 'real_estate',
            'notes': 'Property listing mentions beautiful water feature that needs repair'
        },
        {
            'source_url': 'https://www.instagram.com/explore/tags/utahpond/',
            'company_name': 'David Wilson',
            'contact_name': 'David Wilson',
            'phone': '801-555-0654',
            'email': 'david.wilson@email.com',
            'website': None,
            'address': '7890 Garden Path',
            'city': 'Ogden',
            'state': 'UT',
            'zip_code': '84401',
            'services': 'Social Media - Pond Enthusiast',
            'lead_score': 65,
            'lead_source': 'social_media',
            'notes': 'Instagram user posting about pond maintenance and fish care'
        }
    ]
    
    # Connect to database
    conn = sqlite3.connect('leads.db')
    cursor = conn.cursor()
    
    # Add sample leads
    for lead in sample_leads:
        cursor.execute('''
            INSERT INTO leads (
                source_url, company_name, contact_name, phone, email, website,
                address, city, state, zip_code, services, lead_score,
                lead_source, notes, created_date
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            lead['source_url'], lead['company_name'], lead['contact_name'],
            lead['phone'], lead['email'], lead['website'], lead['address'],
            lead['city'], lead['state'], lead['zip_code'], lead['services'],
            lead['lead_score'], lead['lead_source'], lead['notes'], datetime.now()
        ))
    
    # Add some interaction history
    interaction_types = ['email_sent', 'phone_call', 'qualification', 'follow_up']
    outcomes = ['positive', 'neutral', 'needs_follow_up', 'qualified']
    
    for lead_id in range(1, len(sample_leads) + 1):
        # Add 1-3 interactions per lead
        num_interactions = random.randint(1, 3)
        for i in range(num_interactions):
            interaction_date = datetime.now() - timedelta(days=random.randint(1, 30))
            interaction_type = random.choice(interaction_types)
            outcome = random.choice(outcomes)
            
            cursor.execute('''
                INSERT INTO lead_interactions (
                    lead_id, interaction_type, interaction_date, notes, outcome
                ) VALUES (?, ?, ?, ?, ?)
            ''', (
                lead_id, interaction_type, interaction_date,
                f"Sample interaction {i+1}", outcome
            ))
    
    # Add some email tracking data
    for lead_id in range(1, len(sample_leads) + 1):
        # Add 1-2 email records per lead
        num_emails = random.randint(1, 2)
        for i in range(num_emails):
            sent_date = datetime.now() - timedelta(days=random.randint(1, 14))
            opened = random.choice([True, False])
            clicked = random.choice([True, False]) if opened else False
            
            cursor.execute('''
                INSERT INTO email_tracking (
                    lead_id, email_type, sent_date, opened, clicked
                ) VALUES (?, ?, ?, ?, ?)
            ''', (
                lead_id, f"Sample Email {i+1}", sent_date, opened, clicked
            ))
    
    # Update some lead statuses
    statuses = ['new', 'contacted', 'warm', 'hot', 'qualified']
    for lead_id in range(1, len(sample_leads) + 1):
        status = random.choice(statuses)
        cursor.execute('''
            UPDATE leads SET lead_status = ? WHERE id = ?
        ''', (status, lead_id))
    
    conn.commit()
    conn.close()
    
    print(f"✅ Added {len(sample_leads)} sample leads to the database")
    print("Sample leads include:")
    for lead in sample_leads:
        print(f"  - {lead['company_name']} ({lead['city']}) - Score: {lead['lead_score']}")

if __name__ == "__main__":
    add_sample_leads() 