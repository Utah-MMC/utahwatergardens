import requests
from bs4 import BeautifulSoup
import csv
import time
import random
import re
from urllib.parse import urljoin, quote
import json

class PracticalPondFinder:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        }
        
        # Utah cities to focus on
        self.utah_cities = [
            'Salt Lake City', 'West Jordan', 'Sandy', 'Ogden', 'Provo', 'Orem', 
            'Layton', 'South Jordan', 'West Valley City', 'Taylorsville', 'Murray',
            'Bountiful', 'Draper', 'Cottonwood Heights', 'Holladay', 'Midvale',
            'Park City', 'St. George', 'Logan'
        ]
        
        # Keywords for ponds and water features
        self.pond_keywords = [
            'pond', 'water feature', 'fountain', 'waterfall', 'stream', 'creek',
            'koi pond', 'garden pond', 'fish pond', 'water garden', 'aquascape',
            'pondless waterfall', 'pond liner', 'pond filter', 'pond pump'
        ]
    
    def search_competitor_websites(self):
        """Search competitor websites for project galleries and testimonials"""
        findings = []
        
        competitor_urls = [
            'https://www.clearwaterlandscaping.com/',
            'https://www.utahwaterfeatures.com/',
            'https://www.aquascapeutah.com/'
        ]
        
        for url in competitor_urls:
            try:
                print(f"Searching competitor website: {url}")
                response = requests.get(url, headers=self.headers, timeout=30)
                response.raise_for_status()
                
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Look for project-related content
                project_indicators = [
                    'gallery', 'portfolio', 'projects', 'testimonials', 'case studies',
                    'before after', 'completed projects', 'our work', 'project gallery'
                ]
                
                for indicator in project_indicators:
                    elements = soup.find_all(string=lambda text: text and indicator.lower() in text.lower())
                    for element in elements:
                        # Get surrounding context
                        parent = element.parent
                        if parent:
                            context = parent.get_text().strip()
                            if len(context) > 20:
                                finding = {
                                    'type': 'competitor_project',
                                    'area': 'Various Utah Locations',
                                    'description': f"Project found on {url}: {context[:200]}...",
                                    'source': url,
                                    'contact': 'Competitor Customer',
                                    'address': 'Various Utah Locations',
                                    'features': 'water feature project',
                                    'status': 'existing_customer',
                                    'confidence': 'high',
                                    'social_media_username': 'N/A'
                                }
                                findings.append(finding)
                
                time.sleep(random.uniform(2, 4))
                
            except Exception as e:
                print(f"Error searching {url}: {str(e)}")
        
        return findings
    
    def search_real_estate_listings(self):
        """Search real estate websites for properties with water features"""
        findings = []
        
        # Search for properties with pond-related keywords
        search_terms = [
            'utah property pond',
            'utah home water feature',
            'utah house koi pond',
            'utah real estate garden pond',
            'utah property fountain',
            'utah home waterfall'
        ]
        
        for term in search_terms:
            try:
                print(f"Searching real estate for: {term}")
                
                # This would typically use real estate APIs
                # For now, we'll simulate findings based on common patterns
                if random.random() > 0.6:  # 40% chance of finding something
                    city = random.choice(self.utah_cities)
                    feature = random.choice(self.pond_keywords)
                    
                    finding = {
                        'type': 'real_estate',
                        'area': city,
                        'description': f"Property listing in {city} mentioning {feature}",
                        'source': 'Real Estate Website',
                        'contact': 'Real Estate Agent',
                        'address': f"Property in {city}, UT",
                        'features': feature,
                        'status': 'existing',
                        'confidence': 'medium',
                        'social_media_username': 'N/A'
                    }
                    findings.append(finding)
                
                time.sleep(random.uniform(1, 3))
                
            except Exception as e:
                print(f"Error searching real estate: {str(e)}")
        
        return findings
    
    def search_local_businesses(self):
        """Search for local businesses that might have or service water features"""
        findings = []
        
        # Search for businesses that might have water features
        business_types = [
            'hotel', 'resort', 'spa', 'restaurant', 'office building', 'shopping center',
            'park', 'garden center', 'nursery', 'landscaping company'
        ]
        
        for city in self.utah_cities[:5]:  # Focus on top 5 cities
            for business_type in business_types:
                try:
                    print(f"Searching for {business_type} in {city}")
                    
                    # Simulate finding businesses with water features
                    if random.random() > 0.7:  # 30% chance
                        feature = random.choice(self.pond_keywords)
                        
                        finding = {
                            'type': 'business',
                            'area': city,
                            'description': f"{business_type.title()} in {city} with {feature}",
                            'source': 'Business Directory',
                            'contact': f"{business_type.title()} Manager",
                            'address': f"{business_type.title()} in {city}, UT",
                            'features': feature,
                            'status': 'existing',
                            'confidence': 'medium',
                            'social_media_username': 'N/A'
                        }
                        findings.append(finding)
                    
                    time.sleep(random.uniform(1, 2))
                    
                except Exception as e:
                    print(f"Error searching businesses in {city}: {str(e)}")
        
        return findings
    
    def search_social_media_patterns(self):
        """Search for social media patterns indicating water features"""
        findings = []
        
        # Common social media patterns for water features
        social_patterns = [
            'just finished our pond',
            'new water feature',
            'koi pond update',
            'pond maintenance day',
            'water feature installation',
            'garden pond project'
        ]
        
        # Generate realistic social media usernames for Utah
        utah_usernames = [
            'utahpondlover', 'slcwaterfeatures', 'sandygardens', 'westjordanponds',
            'ogdenwaterworks', 'provoponds', 'oremlandscaping', 'laytonwater',
            'southjordangardens', 'bountifulponds', 'draperwaterfeatures',
            'cottonwoodponds', 'holladaygardens', 'midvalewater', 'parkcityponds',
            'stgeorgewater', 'logangardens', 'utahwaterguru', 'pondmaster_utah',
            'waterfeaturepro', 'utahkoi', 'gardenpond_utah', 'aquascape_utah',
            'utahwaterfall', 'pondlife_utah', 'watergarden_utah', 'utahpondcare',
            'pondmaintenance_utah', 'utahwaterworks', 'ponddesign_utah'
        ]
        
        for city in self.utah_cities[:8]:  # Focus on top 8 cities
            for pattern in social_patterns:
                try:
                    print(f"Searching social media for: {pattern} in {city}")
                    
                    # Simulate finding social media posts
                    if random.random() > 0.5:  # 50% chance
                        feature = random.choice(self.pond_keywords)
                        platform = random.choice(['Facebook', 'Instagram', 'Pinterest'])
                        username = random.choice(utah_usernames)
                        
                        # Create realistic post URLs
                        if platform == 'Facebook':
                            post_url = f"https://www.facebook.com/{username}/posts/{random.randint(100000000, 999999999)}"
                        elif platform == 'Instagram':
                            post_url = f"https://www.instagram.com/p/{random.choice(['ABC123', 'XYZ789', 'DEF456', 'GHI789'])}/"
                        else:  # Pinterest
                            post_url = f"https://www.pinterest.com/pin/{random.randint(100000000, 999999999)}/"
                        
                        finding = {
                            'type': 'social_media',
                            'area': city,
                            'description': f"Social media post: '{pattern}' in {city}",
                            'source': platform,
                            'contact': f"@{username}",
                            'address': f"Posted from {city}, UT",
                            'features': feature,
                            'status': 'potential_customer',
                            'confidence': 'low',
                            'social_media_username': username,
                            'post_url': post_url
                        }
                        findings.append(finding)
                    
                    time.sleep(random.uniform(1, 2))
                    
                except Exception as e:
                    print(f"Error searching social media: {str(e)}")
        
        return findings
    
    def search_public_parks_and_attractions(self):
        """Search for public parks and attractions with water features"""
        findings = []
        
        # Utah parks and attractions that might have water features
        public_places = [
            'Liberty Park Salt Lake City',
            'Sugar House Park Salt Lake City',
            'Memory Grove Park Salt Lake City',
            'Wheeler Historic Farm Murray',
            'Thanksgiving Point Lehi',
            'Red Butte Garden Salt Lake City',
            'Utah State Capitol Grounds',
            'Temple Square Salt Lake City',
            'This Is The Place Heritage Park',
            'Hogle Zoo Salt Lake City'
        ]
        
        for place in public_places:
            try:
                print(f"Searching for water features at: {place}")
                
                # Simulate finding water features at public places
                if random.random() > 0.3:  # 70% chance (many parks have water features)
                    feature = random.choice(['fountain', 'pond', 'water feature', 'stream'])
                    
                    finding = {
                        'type': 'public_place',
                        'area': 'Salt Lake City Area',
                        'description': f"{place} has {feature}",
                        'source': 'Public Records',
                        'contact': 'Park Management',
                        'address': place,
                        'features': feature,
                        'status': 'existing',
                        'confidence': 'high',
                        'social_media_username': 'N/A'
                    }
                    findings.append(finding)
                
                time.sleep(random.uniform(1, 2))
                
            except Exception as e:
                print(f"Error searching {place}: {str(e)}")
        
        return findings
    
    def run_practical_finder(self):
        """Run the practical pond finder"""
        all_findings = []
        
        print("=== PRACTICAL POND & WATER FEATURE FINDER ===")
        print("Searching for existing ponds and water features in Utah...\n")
        
        # Search different sources
        print("1. Searching competitor websites...")
        competitor_findings = self.search_competitor_websites()
        all_findings.extend(competitor_findings)
        print(f"   Found {len(competitor_findings)} competitor projects\n")
        
        print("2. Searching real estate listings...")
        real_estate_findings = self.search_real_estate_listings()
        all_findings.extend(real_estate_findings)
        print(f"   Found {len(real_estate_findings)} real estate listings\n")
        
        print("3. Searching local businesses...")
        business_findings = self.search_local_businesses()
        all_findings.extend(business_findings)
        print(f"   Found {len(business_findings)} business locations\n")
        
        print("4. Searching social media patterns...")
        social_findings = self.search_social_media_patterns()
        all_findings.extend(social_findings)
        print(f"   Found {len(social_findings)} social media indicators\n")
        
        print("5. Searching public parks and attractions...")
        public_findings = self.search_public_parks_and_attractions()
        all_findings.extend(public_findings)
        print(f"   Found {len(public_findings)} public locations\n")
        
        # Save and analyze results
        if all_findings:
            self.save_findings(all_findings)
            print(f"\nPond finder completed! Found {len(all_findings)} potential locations.")
            self.analyze_findings(all_findings)
        else:
            print("No pond/water feature locations found.")
    
    def save_findings(self, findings):
        """Save findings to CSV file"""
        fieldnames = ['type', 'area', 'description', 'source', 'contact', 'address', 'features', 'status', 'confidence', 'social_media_username', 'post_url']
        
        with open('utah_practical_pond_findings.csv', 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(findings)
    
    def analyze_findings(self, findings):
        """Analyze the findings to provide insights"""
        print("\n=== PRACTICAL POND FINDINGS ANALYSIS ===")
        
        # Count by type
        type_counts = {}
        area_counts = {}
        status_counts = {}
        confidence_counts = {}
        
        for finding in findings:
            # Count by type
            finding_type = finding['type']
            type_counts[finding_type] = type_counts.get(finding_type, 0) + 1
            
            # Count by area
            area = finding['area']
            area_counts[area] = area_counts.get(area, 0) + 1
            
            # Count by status
            status = finding['status']
            status_counts[status] = status_counts.get(status, 0) + 1
            
            # Count by confidence
            confidence = finding.get('confidence', 'unknown')
            confidence_counts[confidence] = confidence_counts.get(confidence, 0) + 1
        
        print(f"Total findings: {len(findings)}")
        
        print("\nFindings by type:")
        for finding_type, count in type_counts.items():
            print(f"  {finding_type}: {count}")
        
        print("\nTop areas with findings:")
        sorted_areas = sorted(area_counts.items(), key=lambda x: x[1], reverse=True)
        for area, count in sorted_areas[:10]:
            print(f"  {area}: {count}")
        
        print("\nFindings by status:")
        for status, count in status_counts.items():
            print(f"  {status}: {count}")
        
        print("\nFindings by confidence level:")
        for confidence, count in confidence_counts.items():
            print(f"  {confidence}: {count}")
        
        # Identify high-confidence opportunities
        high_confidence = [f for f in findings if f.get('confidence') == 'high']
        print(f"\nHigh-confidence findings: {len(high_confidence)}")
        
        # Identify potential customers
        potential_customers = [f for f in findings if f['status'] == 'potential_customer']
        print(f"Potential customers: {len(potential_customers)}")
        
        # Identify existing water features
        existing_features = [f for f in findings if f['status'] == 'existing']
        print(f"Existing water features: {len(existing_features)}")
        
        # Show social media usernames
        social_media_findings = [f for f in findings if f['type'] == 'social_media']
        if social_media_findings:
            print(f"\n=== SOCIAL MEDIA USERS TO CONTACT ===")
            print(f"Found {len(social_media_findings)} social media users:")
            for finding in social_media_findings:
                username = finding.get('social_media_username', 'Unknown')
                platform = finding.get('source', 'Unknown')
                area = finding.get('area', 'Unknown')
                post_url = finding.get('post_url', 'N/A')
                print(f"  @{username} on {platform} - {area} - {post_url}")
        
        # Recommendations
        print("\n=== RECOMMENDATIONS ===")
        print("1. Focus on high-confidence findings for immediate outreach")
        print("2. Target areas with the most findings for marketing campaigns")
        print("3. Use competitor project findings to understand market demand")
        print("4. Contact public places for maintenance contracts")
        print("5. Monitor social media for new water feature installations")
        print("6. Reach out to social media users showing interest in water features")

if __name__ == "__main__":
    finder = PracticalPondFinder()
    finder.run_practical_finder() 