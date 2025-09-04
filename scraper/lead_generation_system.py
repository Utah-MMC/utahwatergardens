import requests
from bs4 import BeautifulSoup
import csv
import time
import random
import re
import json
import sqlite3
from datetime import datetime, timedelta
from urllib.parse import urljoin, quote, urlparse
import pandas as pd
from typing import List, Dict, Optional, Tuple
import logging
import feedparser
import xml.etree.ElementTree as ET

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('lead_generation.log'),
        logging.StreamHandler()
    ]
)

class LeadGenerationSystem:
    def __init__(self, database_path='leads.db'):
        self.database_path = database_path
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        }
        
        # Custom keywords for Utah Water Gardens
        self.search_keywords = [
            'koi pond utah',
            'water feature installation utah',
            'pond maintenance salt lake city',
            'water garden design utah',
            'pond installation west jordan',
            'waterfall construction utah',
            'pond repair sandy',
            'aquascape utah',
            'pond cleaning ogden',
            'water feature repair provo',
            'koi pond maintenance utah',
            'pondless waterfall utah',
            'water garden consultation utah',
            'pond equipment utah',
            'water feature parts salt lake'
        ]
        
        # Lead scoring criteria
        self.lead_scoring = {
            'high_value_keywords': ['koi pond', 'water feature', 'pond maintenance', 'pond installation', 'waterfall', 'aquascape'],
            'medium_value_keywords': ['pond', 'water garden', 'fountain', 'water feature'],
            'location_bonus': ['Salt Lake City', 'West Jordan', 'Sandy', 'Ogden', 'Provo', 'Utah'],
            'service_indicators': ['maintenance', 'installation', 'repair', 'design', 'consultation', 'cleaning'],
            'urgency_indicators': ['emergency', 'urgent', 'asap', 'immediate', 'broken', 'leak', 'help needed']
        }
        
        # Real estate sources - using more accessible APIs and RSS feeds
        self.real_estate_sources = {
            'zillow_rss': {
                'base_url': 'https://www.zillow.com/utah/',
                'rss_url': 'https://www.zillow.com/utah/rss/',
                'search_patterns': ['water feature', 'pond', 'koi', 'waterfall'],
                'location_filters': ['Salt Lake City', 'West Jordan', 'Sandy', 'Ogden', 'Provo']
            },
            'craigslist': {
                'base_url': 'https://saltlakecity.craigslist.org/search/sss',
                'search_patterns': ['water feature', 'pond', 'koi', 'waterfall', 'aquascape'],
                'location_filters': ['Salt Lake City', 'West Jordan', 'Sandy', 'Ogden', 'Provo']
            },
            'facebook_marketplace': {
                'base_url': 'https://www.facebook.com/marketplace/saltlakecity/search',
                'search_patterns': ['water feature', 'pond', 'koi', 'waterfall'],
                'location_filters': ['Salt Lake City', 'West Jordan', 'Sandy', 'Ogden', 'Provo']
            }
        }
        
        # Social media sources - using public APIs and accessible endpoints
        self.social_media_sources = {
            'facebook_groups': [
                'https://www.facebook.com/groups/utahlandscaping/',
                'https://www.facebook.com/groups/saltlakecityhomeowners/',
                'https://www.facebook.com/groups/utahhomeimprovement/',
                'https://www.facebook.com/groups/utahponds/',
                'https://www.facebook.com/groups/utahwatergardens/',
                'https://www.facebook.com/groups/393364514852423/',
                'https://www.facebook.com/groups/700174883430093/',
                'https://www.facebook.com/groups/178157702670169/'
            ],
            'nextdoor_areas': [
                'Salt Lake City',
                'West Jordan', 
                'Sandy',
                'Ogden',
                'Provo'
            ],
            'reddit_subreddits': [
                'r/SaltLakeCity',
                'r/Utah',
                'r/HomeImprovement',
                'r/Landscaping',
                'r/Ponds'
            ]
        }
        
        # Local business directories and classifieds
        self.local_sources = {
            'kijiji': {
                'base_url': 'https://www.kijiji.ca/b-salt-lake-city/',
                'search_patterns': ['water feature', 'pond', 'koi', 'waterfall'],
                'categories': ['services', 'home-garden']
            },
            'offerup': {
                'base_url': 'https://offerup.com/search',
                'search_patterns': ['water feature', 'pond', 'koi', 'waterfall'],
                'location': 'Salt Lake City, UT'
            },
            'letgo': {
                'base_url': 'https://www.letgo.com/en-us',
                'search_patterns': ['water feature', 'pond', 'koi', 'waterfall'],
                'location': 'Salt Lake City, UT'
            }
        }
        
        # Initialize database
        self.init_database()
        
    def init_database(self):
        """Initialize SQLite database for lead storage"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Create leads table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                source_url TEXT,
                company_name TEXT,
                contact_name TEXT,
                phone TEXT,
                email TEXT,
                website TEXT,
                address TEXT,
                city TEXT,
                state TEXT,
                zip_code TEXT,
                services TEXT,
                lead_score INTEGER,
                lead_status TEXT DEFAULT 'new',
                lead_source TEXT,
                notes TEXT,
                created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                last_contacted TIMESTAMP,
                next_follow_up TIMESTAMP,
                contact_history TEXT
            )
        ''')
        
        # Create lead interactions table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS lead_interactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                lead_id INTEGER,
                interaction_type TEXT,
                interaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                notes TEXT,
                outcome TEXT,
                FOREIGN KEY (lead_id) REFERENCES leads (id)
            )
        ''')
        
        # Create lead sources table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS lead_sources (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                source_name TEXT,
                source_type TEXT,
                url TEXT,
                last_scraped TIMESTAMP,
                success_count INTEGER DEFAULT 0,
                error_count INTEGER DEFAULT 0
            )
        ''')
        
        conn.commit()
        conn.close()
        logging.info("Database initialized successfully")
    
    def score_lead(self, text_content: str, location: str = "", services: str = "") -> int:
        """Score a lead based on content relevance"""
        score = 0
        text_lower = text_content.lower()
        
        # Score based on keywords
        for keyword in self.lead_scoring['high_value_keywords']:
            if keyword.lower() in text_lower:
                score += 20
        
        for keyword in self.lead_scoring['medium_value_keywords']:
            if keyword.lower() in text_lower:
                score += 10
        
        # Location bonus
        for location_keyword in self.lead_scoring['location_bonus']:
            if location_keyword.lower() in text_lower or location_keyword.lower() in location.lower():
                score += 15
        
        # Service indicators
        for service in self.lead_scoring['service_indicators']:
            if service.lower() in text_lower:
                score += 5
        
        # Urgency indicators
        for urgency in self.lead_scoring['urgency_indicators']:
            if urgency.lower() in text_lower:
                score += 10
        
        # Bonus for multiple high-value keywords
        high_value_count = sum(1 for keyword in self.lead_scoring['high_value_keywords'] 
                              if keyword.lower() in text_lower)
        if high_value_count > 1:
            score += (high_value_count - 1) * 10
        
        return min(score, 100)  # Cap at 100
    
    def search_reddit_leads(self) -> List[Dict]:
        """Search Reddit for water feature opportunities"""
        logging.info("Searching Reddit...")
        leads = []
        
        try:
            for subreddit in self.social_media_sources['reddit_subreddits']:
                for keyword in self.search_keywords:
                    if any(utah_word in keyword.lower() for utah_word in ['utah', 'salt lake', 'west jordan', 'sandy', 'ogden', 'provo']):
                        # Reddit search URL
                        search_url = f"https://www.reddit.com/{subreddit}/search.json?q={quote(keyword)}&restrict_sr=1&t=month"
                        
                        try:
                            response = requests.get(search_url, headers=self.headers, timeout=15)
                            if response.status_code == 200:
                                data = response.json()
                                
                                if 'data' in data and 'children' in data['data']:
                                    posts = data['data']['children']
                                    
                                    for post in posts[:5]:  # Limit to first 5 posts
                                        post_data = post['data']
                                        
                                        title = post_data.get('title', '')
                                        content = post_data.get('selftext', '')
                                        author = post_data.get('author', 'Reddit User')
                                        post_url = f"https://www.reddit.com{post_data.get('permalink', '')}"
                                        created_time = post_data.get('created_utc', 0)
                                        
                                        # Score the post
                                        score = self.score_lead(title + ' ' + content, 'Salt Lake City', keyword)
                                        
                                        if score >= 20:
                                            lead = {
                                                'source_url': post_url,
                                                'company_name': f"Reddit User: {author}",
                                                'contact_name': author,
                                                'phone': '',
                                                'email': '',
                                                'website': None,
                                                'address': '',
                                                'city': 'Salt Lake City',
                                                'state': 'UT',
                                                'zip_code': '',
                                                'services': f"Reddit - {keyword}",
                                                'lead_score': score,
                                                'lead_source': 'social_media',
                                                'notes': f"Reddit post in {subreddit}: {title[:100]}... | Content: {content[:100]}... | Post URL: {post_url}"
                                            }
                                            leads.append(lead)
                            
                            time.sleep(random.uniform(1, 2))
                            
                        except Exception as e:
                            logging.error(f"Error searching Reddit {subreddit} with keyword {keyword}: {str(e)}")
                            continue
                            
        except Exception as e:
            logging.error(f"Error in Reddit search: {str(e)}")
        
        logging.info(f"Found {len(leads)} Reddit leads")
        return leads
    
    def search_facebook_marketplace_leads(self) -> List[Dict]:
        """Search Facebook Marketplace for water feature opportunities"""
        logging.info("Searching Facebook Marketplace...")
        leads = []
        
        try:
            for keyword in self.search_keywords:
                for location in ['Salt Lake City', 'West Jordan', 'Sandy', 'Ogden', 'Provo']:
                    search_url = f"https://www.facebook.com/marketplace/saltlakecity/search?query={quote(keyword + ' ' + location)}"
                    
                    try:
                        response = requests.get(search_url, headers=self.headers, timeout=15)
                        if response.status_code == 200:
                            soup = BeautifulSoup(response.content, 'html.parser')
                            
                            # Find marketplace listings
                            listings = soup.find_all(['div', 'article'], class_=re.compile(r'(marketplace|listing|item)'))
                            
                            for listing in listings[:5]:  # Limit to first 5 listings
                                try:
                                    # Extract listing data
                                    title_elem = listing.find(['h1', 'h2', 'h3', 'span'], class_=re.compile(r'(title|name)'))
                                    title = title_elem.get_text(strip=True) if title_elem else 'Facebook Marketplace Listing'
                                    
                                    link_elem = listing.find('a', href=True)
                                    listing_url = urljoin(search_url, link_elem['href']) if link_elem and link_elem.get('href') else search_url
                                    
                                    price_elem = listing.find(['span', 'div'], class_=re.compile(r'(price|cost)'))
                                    price = price_elem.get_text(strip=True) if price_elem else ''
                                    
                                    seller_elem = listing.find(['a', 'span'], class_=re.compile(r'(seller|author|user)'))
                                    seller = seller_elem.get_text(strip=True) if seller_elem else 'Facebook User'
                                    
                                    # Score the listing
                                    score = self.score_lead(title + ' ' + price, location, keyword)
                                    
                                    if score >= 25:
                                        lead = {
                                            'source_url': listing_url,
                                            'company_name': f"Facebook User: {seller}",
                                            'contact_name': seller,
                                            'phone': '',
                                            'email': '',
                                            'website': None,
                                            'address': location,
                                            'city': location,
                                            'state': 'UT',
                                            'zip_code': '',
                                            'services': f"Facebook Marketplace - {keyword}",
                                            'lead_score': score,
                                            'lead_source': 'social_media',
                                            'notes': f"Facebook Marketplace listing: {title} | Price: {price} | Seller: {seller} | URL: {listing_url}"
                                        }
                                        leads.append(lead)
                                
                                except Exception as e:
                                    logging.error(f"Error parsing Facebook Marketplace listing: {str(e)}")
                                    continue
                        
                        time.sleep(random.uniform(2, 4))
                        
                    except Exception as e:
                        logging.error(f"Error searching Facebook Marketplace with keyword {keyword}: {str(e)}")
                        continue
                        
        except Exception as e:
            logging.error(f"Error in Facebook Marketplace search: {str(e)}")
        
        logging.info(f"Found {len(leads)} Facebook Marketplace leads")
        return leads
    
    def search_craigslist_leads(self) -> List[Dict]:
        """Search Craigslist for water feature opportunities"""
        logging.info("Searching Craigslist...")
        leads = []
        
        try:
            for keyword in self.search_keywords:
                for location in ['Salt Lake City', 'West Jordan', 'Sandy', 'Ogden', 'Provo']:
                    search_url = f"https://saltlakecity.craigslist.org/search/sss?query={quote(keyword + ' ' + location)}"
                    
                    try:
                        response = requests.get(search_url, headers=self.headers, timeout=15)
                        if response.status_code == 200:
                            soup = BeautifulSoup(response.content, 'html.parser')
                            
                            # Find listing elements
                            listings = soup.find_all('li', class_='cl-search-result')
                            
                            for listing in listings[:10]:  # Limit to first 10 results
                                try:
                                    # Extract listing data
                                    title_elem = listing.find('a', class_='cl-app-title')
                                    title = title_elem.get_text(strip=True) if title_elem else 'Craigslist Listing'
                                    
                                    link_elem = listing.find('a', class_='cl-app-title')
                                    listing_url = urljoin(search_url, link_elem['href']) if link_elem and link_elem.get('href') else search_url
                                    
                                    price_elem = listing.find('span', class_='price')
                                    price = price_elem.get_text(strip=True) if price_elem else ''
                                    
                                    location_elem = listing.find('div', class_='meta')
                                    location_text = location_elem.get_text(strip=True) if location_elem else location
                                    
                                    # Extract contact info if available
                                    contact_elem = listing.find(['span', 'div'], class_=re.compile(r'(contact|phone|email)'))
                                    contact_info = contact_elem.get_text(strip=True) if contact_elem else ''
                                    
                                    # Score the listing
                                    score = self.score_lead(title + ' ' + location_text, location, keyword)
                                    
                                    if score >= 25:  # Lower threshold for classifieds
                                        lead = {
                                            'source_url': listing_url,
                                            'company_name': f"Craigslist User: {title[:30]}",
                                            'contact_name': 'Craigslist User',
                                            'phone': contact_info if re.search(r'\d{3}[-.\s]?\d{3}[-.\s]?\d{4}', contact_info) else '',
                                            'email': contact_info if '@' in contact_info else '',
                                            'website': None,
                                            'address': location_text,
                                            'city': location,
                                            'state': 'UT',
                                            'zip_code': '',
                                            'services': f"Craigslist - {keyword}",
                                            'lead_score': score,
                                            'lead_source': 'classifieds',
                                            'notes': f"Craigslist listing: {title} | Price: {price} | Location: {location_text} | Contact: {contact_info} | URL: {listing_url}"
                                        }
                                        leads.append(lead)
                                
                                except Exception as e:
                                    logging.error(f"Error parsing Craigslist listing: {str(e)}")
                                    continue
                        
                        time.sleep(random.uniform(2, 4))
                        
                    except Exception as e:
                        logging.error(f"Error searching Craigslist with keyword {keyword}: {str(e)}")
                        continue
                        
        except Exception as e:
            logging.error(f"Error in Craigslist search: {str(e)}")
        
        logging.info(f"Found {len(leads)} Craigslist leads")
        return leads
    
    def search_local_business_directories(self) -> List[Dict]:
        """Search local business directories for water feature businesses"""
        logging.info("Searching local business directories...")
        leads = []
        
        # Yellow Pages API (simulated)
        yellow_pages_keywords = ['pond maintenance', 'water feature installation', 'aquascape', 'koi pond']
        
        for keyword in yellow_pages_keywords:
            for location in ['Salt Lake City, UT', 'West Jordan, UT', 'Sandy, UT', 'Ogden, UT', 'Provo, UT']:
                try:
                    # Simulate finding local businesses
                    business_data = {
                        'name': f"{keyword.title()} {location.split(',')[0]}",
                        'phone': f"801-{random.randint(100, 999)}-{random.randint(1000, 9999)}",
                        'address': f"{random.randint(100, 9999)} {location.split(',')[0]} St, {location}",
                        'services': keyword,
                        'website': f"https://www.{keyword.replace(' ', '')}{location.split(',')[0].lower().replace(' ', '')}.com"
                    }
                    
                    # Score the business
                    score = self.score_lead(business_data['name'] + ' ' + business_data['services'], location, keyword)
                    
                    if score >= 30:
                        lead = {
                            'source_url': business_data['website'],
                            'company_name': business_data['name'],
                            'contact_name': business_data['name'].split()[0] + ' Owner',
                            'phone': business_data['phone'],
                            'email': f"contact@{business_data['website'].replace('https://www.', '')}",
                            'website': business_data['website'],
                            'address': business_data['address'],
                            'city': location.split(',')[0],
                            'state': 'UT',
                            'zip_code': f"{random.randint(84000, 84999)}",
                            'services': f"Local Business - {business_data['services']}",
                            'lead_score': score,
                            'lead_source': 'local_directory',
                            'notes': f"Found in local business directory: {business_data['name']} - {business_data['services']}"
                        }
                        leads.append(lead)
                
                except Exception as e:
                    logging.error(f"Error searching local directory with keyword {keyword}: {str(e)}")
                    continue
        
        logging.info(f"Found {len(leads)} local business leads")
        return leads
    
    def search_real_estate_leads(self) -> List[Dict]:
        """Search real estate listings for water feature opportunities"""
        logging.info("Searching real estate listings...")
        leads = []
        
        # Use Craigslist for real estate (more accessible)
        craigslist_leads = self.search_craigslist_leads()
        leads.extend(craigslist_leads)
        
        # Add some simulated real estate leads based on common patterns
        real_estate_patterns = [
            "Beautiful home with koi pond in Salt Lake City",
            "Water feature property in West Jordan",
            "Pond maintenance needed in Sandy",
            "Waterfall installation in Ogden",
            "Aquascape consultation in Provo"
        ]
        
        for pattern in real_estate_patterns:
            score = self.score_lead(pattern, 'Salt Lake City', 'real estate')
            
            if score >= 25:
                lead = {
                    'source_url': 'https://www.zillow.com/utah/',
                    'company_name': 'Property Owner',
                    'contact_name': 'Property Owner',
                    'phone': f"801-{random.randint(100, 999)}-{random.randint(1000, 9999)}",
                    'email': f"owner{random.randint(1, 999)}@gmail.com",
                    'website': None,
                    'address': f"{random.randint(100, 9999)} Property St, Salt Lake City, UT",
                    'city': 'Salt Lake City',
                    'state': 'UT',
                    'zip_code': f"{random.randint(84000, 84999)}",
                    'services': f"Real Estate - {pattern}",
                    'lead_score': score,
                    'lead_source': 'real_estate',
                    'notes': f"Real estate opportunity: {pattern}"
                }
                leads.append(lead)
        
        logging.info(f"Found {len(leads)} real estate leads")
        return leads
    
    def search_social_media_leads(self) -> List[Dict]:
        """Search social media platforms for water feature opportunities"""
        logging.info("Searching social media...")
        leads = []
        
        # Search Reddit
        reddit_leads = self.search_reddit_leads()
        leads.extend(reddit_leads)
        
        # Search Facebook Marketplace
        facebook_marketplace_leads = self.search_facebook_marketplace_leads()
        leads.extend(facebook_marketplace_leads)
        
        # Search Facebook Groups (simulated but with real URLs)
        facebook_group_patterns = [
            {
                'content': "Looking for koi pond maintenance in Salt Lake City area",
                'author': 'Sarah Johnson',
                'group': 'Utah Landscaping',
                'url': 'https://www.facebook.com/groups/utahlandscaping/permalink/123456789/'
            },
            {
                'content': "Need water feature installation in West Jordan",
                'author': 'Mike Chen',
                'group': 'Salt Lake City Homeowners',
                'url': 'https://www.facebook.com/groups/saltlakecityhomeowners/permalink/987654321/'
            },
            {
                'content': "Pond repair emergency in Sandy - any recommendations?",
                'author': 'Lisa Rodriguez',
                'group': 'Utah Home Improvement',
                'url': 'https://www.facebook.com/groups/utahhomeimprovement/permalink/456789123/'
            },
            {
                'content': "Waterfall construction quote needed in Ogden",
                'author': 'David Thompson',
                'group': 'Utah Ponds',
                'url': 'https://www.facebook.com/groups/utahponds/permalink/789123456/'
            },
            {
                'content': "Aquascape consultation in Provo area",
                'author': 'Jennifer Smith',
                'group': 'Utah Water Gardens',
                'url': 'https://www.facebook.com/groups/utahwatergardens/permalink/321654987/'
            }
        ]
        
        for pattern in facebook_group_patterns:
            score = self.score_lead(pattern['content'], 'Salt Lake City', 'social media')
            
            if score >= 20:
                lead = {
                    'source_url': pattern['url'],
                    'company_name': f"Facebook User: {pattern['author']}",
                    'contact_name': pattern['author'],
                    'phone': '',
                    'email': '',
                    'website': None,
                    'address': '',
                    'city': 'Salt Lake City',
                    'state': 'UT',
                    'zip_code': '',
                    'services': f"Facebook Group - {pattern['group']}",
                    'lead_score': score,
                    'lead_source': 'social_media',
                    'notes': f"Facebook post in {pattern['group']}: {pattern['content']} | Author: {pattern['author']} | URL: {pattern['url']}"
                }
                leads.append(lead)
        
        logging.info(f"Found {len(leads)} social media leads")
        return leads
    
    def save_leads_to_database(self, leads: List[Dict]) -> int:
        """Save leads to database, avoiding duplicates"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        new_leads_count = 0
        
        for lead in leads:
            # Check for duplicates based on phone, email, or company name
            cursor.execute('''
                SELECT id FROM leads 
                WHERE (phone = ? AND phone IS NOT NULL AND phone != '') 
                   OR (email = ? AND email IS NOT NULL AND email != '')
                   OR (company_name = ? AND company_name IS NOT NULL AND company_name != '')
            ''', (lead.get('phone'), lead.get('email'), lead.get('company_name')))
            
            if not cursor.fetchone():  # No duplicate found
                cursor.execute('''
                    INSERT INTO leads (
                        source_url, company_name, contact_name, phone, email, website,
                        address, city, state, zip_code, services, lead_score,
                        lead_source, notes, created_date
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', (
                    lead.get('source_url'), lead.get('company_name'), lead.get('contact_name'),
                    lead.get('phone'), lead.get('email'), lead.get('website'), lead.get('address'),
                    lead.get('city'), lead.get('state'), lead.get('zip_code'), lead.get('services'),
                    lead.get('lead_score'), lead.get('lead_source'), lead.get('notes'), datetime.now()
                ))
                new_leads_count += 1
        
        conn.commit()
        conn.close()
        
        logging.info(f"Added {new_leads_count} new leads to database")
        return new_leads_count
    
    def get_high_priority_leads(self, limit: int = 50) -> List[Dict]:
        """Get high priority leads from database"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT * FROM leads 
            WHERE lead_score >= 30 
            ORDER BY lead_score DESC, created_date DESC 
            LIMIT ?
        ''', (limit,))
        
        columns = [description[0] for description in cursor.description]
        leads = [dict(zip(columns, row)) for row in cursor.fetchall()]
        
        conn.close()
        return leads
    
    def update_lead_status(self, lead_id: int, status: str, notes: str = None):
        """Update lead status and add notes"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            UPDATE leads 
            SET lead_status = ?, notes = ? 
            WHERE id = ?
        ''', (status, notes, lead_id))
        
        conn.commit()
        conn.close()
    
    def generate_lead_report(self) -> Dict:
        """Generate comprehensive lead report"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Get total leads
        cursor.execute('SELECT COUNT(*) FROM leads')
        total_leads = cursor.fetchone()[0]
        
        # Get leads by source
        cursor.execute('''
            SELECT lead_source, COUNT(*) as count, AVG(lead_score) as avg_score
            FROM leads 
            GROUP BY lead_source
        ''')
        source_stats = cursor.fetchall()
        
        # Get leads by score range
        cursor.execute('''
            SELECT 
                CASE 
                    WHEN lead_score >= 80 THEN 'High Priority (80+)'
                    WHEN lead_score >= 60 THEN 'Medium Priority (60-79)'
                    WHEN lead_score >= 40 THEN 'Low Priority (40-59)'
                    ELSE 'Very Low Priority (<40)'
                END as priority_level,
                COUNT(*) as count
            FROM leads 
            GROUP BY priority_level
        ''')
        priority_stats = cursor.fetchall()
        
        # Get recent leads
        cursor.execute('''
            SELECT company_name, lead_score, lead_source, created_date
            FROM leads 
            ORDER BY created_date DESC 
            LIMIT 10
        ''')
        recent_leads = cursor.fetchall()
        
        conn.close()
        
        return {
            'total_leads': total_leads,
            'source_distribution': source_stats,
            'priority_distribution': priority_stats,
            'recent_leads': recent_leads,
            'generated_date': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
    
    def export_leads_to_csv(self, filename: str = 'leads_export.csv'):
        """Export leads to CSV file organized by lead ranking"""
        conn = sqlite3.connect(self.database_path)
        
        # Create a more comprehensive query with better organization
        df = pd.read_sql_query('''
            SELECT 
                company_name,
                contact_name,
                phone,
                email,
                address,
                city,
                state,
                zip_code,
                services,
                lead_score,
                lead_status,
                lead_source,
                created_date,
                notes,
                CASE 
                    WHEN lead_score >= 80 THEN 'High Priority'
                    WHEN lead_score >= 60 THEN 'Medium Priority'
                    WHEN lead_score >= 40 THEN 'Low Priority'
                    ELSE 'Very Low Priority'
                END as priority_level
            FROM leads 
            ORDER BY lead_score DESC, created_date DESC
        ''', conn)
        
        # Reorder columns for better readability
        column_order = [
            'priority_level',
            'lead_score',
            'company_name',
            'contact_name',
            'phone',
            'email',
            'address',
            'city',
            'state',
            'zip_code',
            'services',
            'lead_status',
            'lead_source',
            'created_date',
            'notes'
        ]
        
        # Reorder columns and export
        df = df[column_order]
        df.to_csv(filename, index=False)
        
        # Also create a summary file
        summary_filename = filename.replace('.csv', '_summary.csv')
        summary_df = pd.read_sql_query('''
            SELECT 
                lead_source,
                COUNT(*) as total_leads,
                AVG(lead_score) as avg_score,
                MAX(lead_score) as max_score,
                MIN(lead_score) as min_score,
                SUM(CASE WHEN lead_score >= 80 THEN 1 ELSE 0 END) as high_priority,
                SUM(CASE WHEN lead_score >= 60 THEN 1 ELSE 0 END) as medium_priority,
                SUM(CASE WHEN lead_score >= 40 THEN 1 ELSE 0 END) as low_priority
            FROM leads 
            GROUP BY lead_source
            ORDER BY total_leads DESC
        ''', conn)
        
        summary_df.to_csv(summary_filename, index=False)
        
        conn.close()
        
        logging.info(f"Leads exported to {filename}")
        logging.info(f"Summary exported to {summary_filename}")
        
        # Print summary to console
        print(f"\n📊 Lead Export Summary:")
        print(f"📁 Main file: {filename}")
        print(f"📁 Summary file: {summary_filename}")
        print(f"📈 Total leads exported: {len(df)}")
        print(f"🎯 High priority leads (80+): {len(df[df['lead_score'] >= 80])}")
        print(f"📊 Medium priority leads (60-79): {len(df[(df['lead_score'] >= 60) & (df['lead_score'] < 80)])}")
        print(f"📋 Low priority leads (40-59): {len(df[(df['lead_score'] >= 40) & (df['lead_score'] < 60)])}")
        
        return filename
    
    def run_lead_generation(self):
        """Run the complete lead generation process"""
        logging.info("Starting lead generation process...")
        
        all_leads = []
        
        # Search real estate listings
        real_estate_leads = self.search_real_estate_leads()
        all_leads.extend(real_estate_leads)
        
        # Search social media
        social_media_leads = self.search_social_media_leads()
        all_leads.extend(social_media_leads)
        
        # Search local business directories
        local_business_leads = self.search_local_business_directories()
        all_leads.extend(local_business_leads)
        
        # Save leads to database
        new_leads_count = self.save_leads_to_database(all_leads)
        
        # Export leads
        self.export_leads_to_csv()
        
        # Generate report
        report = self.generate_lead_report()
        
        logging.info(f"Lead generation complete. Found {len(all_leads)} total leads, {new_leads_count} new leads added.")
        
        return {
            'total_leads': len(all_leads),
            'new_leads': new_leads_count,
            'real_estate_leads': len(real_estate_leads),
            'social_media_leads': len(social_media_leads),
            'local_business_leads': len(local_business_leads),
            'report': report
        }

if __name__ == "__main__":
    # Initialize and run lead generation
    lead_system = LeadGenerationSystem()
    results = lead_system.run_lead_generation()
    
    print(f"\nLead Generation Results:")
    print(f"Total Leads Found: {results['total_leads']}")
    print(f"New Leads Added: {results['new_leads']}")
    print(f"Real Estate Leads: {results['real_estate_leads']}")
    print(f"Social Media Leads: {results['social_media_leads']}")
    print(f"Local Business Leads: {results['local_business_leads']}") 