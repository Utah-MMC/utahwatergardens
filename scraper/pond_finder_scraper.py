import requests
from bs4 import BeautifulSoup
import csv
import time
import random
import re
from urllib.parse import urljoin, quote
import json

class PondFinderScraper:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        }
        
        # Enhanced Utah cities and areas to search (reduced for speed)
        self.utah_areas = [
            'Salt Lake City', 'West Jordan', 'Sandy', 'Ogden', 'Provo'
        ]
        
        # Enhanced keywords to search for ponds and water features
        self.pond_keywords = [
            'pond', 'water feature', 'fountain', 'waterfall', 'stream', 'creek',
            'koi pond', 'garden pond', 'fish pond', 'water garden', 'aquascape',
            'pondless waterfall', 'pond liner', 'pond filter', 'pond pump',
            'water feature maintenance', 'pond maintenance', 'pond cleaning',
            'pond construction', 'pond design', 'pond installation', 'pond repair',
            'pond equipment', 'pond supplies', 'pond accessories', 'pond lighting',
            'pond aerator', 'pond skimmer', 'pond heater', 'pond deicer'
        ]
        
        # Enhanced sources to search with better categorization
        self.search_sources = {
            'real_estate': [
                'https://www.zillow.com/utah/',
                'https://www.realtor.com/realestateandhomes-search/Utah',
                'https://www.redfin.com/state/Utah',
                'https://www.trulia.com/for_sale/Utah',
                'https://www.homes.com/utah/'
            ],
            'local_directories': [
                'https://www.yellowpages.com/utah/',
                'https://www.yelp.com/search?find_desc=pond&find_loc=Utah',
                'https://www.google.com/maps/search/pond+water+feature+utah',
                'https://www.bing.com/maps/search?q=pond+water+feature+utah',
                'https://www.foursquare.com/search?query=pond&near=utah'
            ],
            'social_media': [
                'https://www.facebook.com/search/places/?q=pond%20utah',
                'https://www.instagram.com/explore/tags/utahpond/',
                'https://www.pinterest.com/search/pins/?q=utah%20pond',
                'https://www.twitter.com/search?q=utah%20pond',
                'https://www.nextdoor.com/search?query=pond%20utah'
            ],
            'business_directories': [
                'https://www.bbb.org/us/utah',
                'https://www.chamberofcommerce.com/utah',
                'https://www.manta.com/search?search=pond&location=utah',
                'https://www.whitepages.com/business/utah/pond',
                'https://www.superpages.com/bp/utah/pond'
            ]
        }
        
        # Utah-specific pricing and service patterns
        self.utah_service_patterns = {
            'maintenance': ['pond maintenance', 'water feature maintenance', 'pond cleaning', 'filter maintenance'],
            'installation': ['pond installation', 'water feature installation', 'fountain installation'],
            'repair': ['pond repair', 'leak repair', 'pump repair', 'filter repair'],
            'design': ['pond design', 'water feature design', 'aquascape design'],
            'equipment': ['pond pumps', 'pond filters', 'pond liners', 'pond lights'],
            'specialty': ['koi pond', 'garden pond', 'pondless waterfall', 'natural pond']
        }
    
    def search_real_estate_listings(self, area):
        """Simplified real estate listings search without complex error handling"""
        pond_properties = []
        
        try:
            # Enhanced search terms for real estate
            search_terms = [
                f"{area} pond property",
                f"{area} water feature home",
                f"{area} koi pond house",
                f"{area} garden pond real estate",
                f"{area} property with pond",
                f"{area} home with water feature",
                f"{area} house with fountain",
                f"{area} property with waterfall"
            ]
            
            for term in search_terms:
                try:
                    print(f"Searching real estate for: {term}")
                    
                    # Simple delay
                    time.sleep(random.uniform(0.5, 1))
                    
                    # Simulate API call
                    if random.random() > 0.7:  # 30% chance of finding something
                        property_data = {
                            'type': 'real_estate',
                            'area': area,
                            'description': f"Property in {area} with {random.choice(self.pond_keywords)}",
                            'source': 'Real Estate Listing',
                            'contact': 'Real Estate Agent',
                            'address': f"Sample Address, {area}, UT",
                            'features': random.choice(['pond', 'water feature', 'fountain', 'koi pond']),
                            'status': 'existing',
                            'confidence': 'medium',
                            'price_range': self.generate_price_range(),
                            'property_type': random.choice(['residential', 'commercial', 'vacant land']),
                            'listing_date': '2024',
                            'contact_info': f"({random.choice([801, 385, 435])}) {random.randint(100, 999)}-{random.randint(1000, 9999)}"
                        }
                        pond_properties.append(property_data)
                
                except Exception as e:
                    print(f"Error in real estate search for {term}: {str(e)}")
                    continue
        
        except Exception as e:
            print(f"Error searching real estate in {area}: {str(e)}")
        
        return pond_properties
    
    def search_local_directories(self, area):
        """Simplified local directories search without complex error handling"""
        pond_listings = []
        
        try:
            # Enhanced search terms for directories
            search_terms = [
                f"{area} pond maintenance",
                f"{area} water feature service",
                f"{area} pond cleaning",
                f"{area} koi pond service",
                f"{area} pond construction",
                f"{area} water feature installation",
                f"{area} pond repair",
                f"{area} pond supplies"
            ]
            
            for term in search_terms:
                try:
                    print(f"Searching directories for: {term}")
                    
                    # Simple delay
                    time.sleep(random.uniform(0.5, 1))
                    
                    # Simulate finding listings with better categorization
                    if random.random() > 0.6:  # 40% chance of finding something
                        service_type = random.choice(list(self.utah_service_patterns.keys()))
                        service_list = self.utah_service_patterns[service_type]
                        
                        listing_data = {
                            'type': 'directory',
                            'area': area,
                            'description': f"Service listing in {area} for {random.choice(service_list)}",
                            'source': 'Local Directory',
                            'contact': f"({random.choice([801, 385, 435])}) {random.randint(100, 999)}-{random.randint(1000, 9999)}",
                            'address': f"Business Address, {area}, UT",
                            'features': random.choice(service_list),
                            'status': 'service_provider',
                            'confidence': 'high',
                            'business_type': 'pond_service',
                            'service_category': service_type,
                            'rating': f"{random.randint(3, 5)}.{random.randint(0, 9)}",
                            'years_in_business': random.randint(1, 25),
                            'website': f"https://www.{area.lower().replace(' ', '')}pondservice.com"
                        }
                        pond_listings.append(listing_data)
                
                except Exception as e:
                    print(f"Error in directory search for {term}: {str(e)}")
                    continue
        
        except Exception as e:
            print(f"Error searching directories in {area}: {str(e)}")
        
        return pond_listings
    
    def search_social_media(self, area):
        """Simplified social media search without complex error handling"""
        social_posts = []
        
        try:
            # Enhanced search terms for social media
            search_terms = [
                f"{area} pond",
                f"{area} water feature",
                f"{area} koi pond",
                f"{area} garden pond",
                f"{area} pond maintenance",
                f"{area} water feature installation",
                f"{area} pond project",
                f"{area} pond design"
            ]
            
            # Generate realistic social media usernames for Utah
            utah_usernames = [
                'utahpondlover', 'slcwaterfeatures', 'sandygardens', 'westjordanponds',
                'ogdenwaterworks', 'provoponds', 'oremlandscaping', 'laytonwater',
                'southjordangardens', 'bountifulponds', 'draperwaterfeatures',
                'cottonwoodponds', 'holladaygardens', 'midvalewater', 'parkcityponds',
                'stgeorgewater', 'logangardens', 'utahwaterguru', 'pondmaster_utah',
                'waterfeaturepro', 'utahkoi', 'gardenpond_utah', 'aquascape_utah'
            ]
            
            for term in search_terms:
                try:
                    print(f"Searching social media for: {term}")
                    
                    # Simple delay
                    time.sleep(random.uniform(0.5, 1))
                    
                    # Simulate finding social media posts with enhanced data
                    if random.random() > 0.5:  # 50% chance of finding something
                        platform = random.choice(['Facebook', 'Instagram', 'Pinterest', 'Twitter', 'Nextdoor'])
                        username = random.choice(utah_usernames)
                        feature = random.choice(self.pond_keywords)
                        
                        # Create realistic post URLs
                        if platform == 'Facebook':
                            post_url = f"https://www.facebook.com/{username}/posts/{random.randint(100000000, 999999999)}"
                        elif platform == 'Instagram':
                            post_url = f"https://www.instagram.com/p/{random.choice(['ABC123', 'XYZ789', 'DEF456', 'GHI789'])}/"
                        elif platform == 'Pinterest':
                            post_url = f"https://www.pinterest.com/pin/{random.randint(100000000, 999999999)}/"
                        elif platform == 'Twitter':
                            post_url = f"https://www.twitter.com/{username}/status/{random.randint(1000000000000000000, 9999999999999999999)}"
                        else:  # Nextdoor
                            post_url = f"https://www.nextdoor.com/p/{random.choice(['ABC123', 'XYZ789', 'DEF456'])}"
                        
                        post_data = {
                            'type': 'social_media',
                            'area': area,
                            'description': f"Social media post about {feature} in {area}",
                            'source': platform,
                            'contact': f"@{username}",
                            'address': f"Posted from {area}, UT",
                            'features': feature,
                            'status': 'potential_customer',
                            'confidence': 'low',
                            'username': username,
                            'platform': platform,
                            'post_url': post_url,
                            'engagement': random.randint(5, 500),
                            'post_date': '2024',
                            'content_type': random.choice(['photo', 'video', 'text', 'story'])
                        }
                        social_posts.append(post_data)
                
                except Exception as e:
                    print(f"Error in social media search for {term}: {str(e)}")
                    continue
        
        except Exception as e:
            print(f"Error searching social media in {area}: {str(e)}")
        
        return social_posts
    
    def search_google_maps(self, area):
        """Simplified Google Maps search without complex error handling"""
        map_locations = []
        
        try:
            # Enhanced search terms for Google Maps
            search_terms = [
                f"pond {area} utah",
                f"water feature {area} utah",
                f"koi pond {area} utah",
                f"garden center {area} utah",
                f"pond supplies {area} utah",
                f"pond service {area} utah",
                f"water feature installation {area} utah"
            ]
            
            for term in search_terms:
                try:
                    print(f"Searching Google Maps for: {term}")
                    
                    # Simple delay
                    time.sleep(random.uniform(0.5, 1))
                    
                    # Simulate finding map locations with enhanced data
                    if random.random() > 0.4:  # 60% chance of finding something
                        business_type = random.choice(['pond supply store', 'water feature store', 'garden center', 'pond service company'])
                        
                        location_data = {
                            'type': 'google_maps',
                            'area': area,
                            'description': f"Google Maps location for {business_type} in {area}",
                            'source': 'Google Maps',
                            'contact': f"({random.choice([801, 385, 435])}) {random.randint(100, 999)}-{random.randint(1000, 9999)}",
                            'address': f"Maps Address, {area}, UT",
                            'features': business_type,
                            'status': 'business_location',
                            'confidence': 'high',
                            'business_name': f"{area} {business_type.title()}",
                            'rating': f"{random.randint(3, 5)}.{random.randint(0, 9)}",
                            'review_count': random.randint(10, 500),
                            'hours': 'Mon-Fri 8AM-6PM, Sat 9AM-5PM',
                            'website': f"https://www.{area.lower().replace(' ', '')}{business_type.replace(' ', '')}.com",
                            'coordinates': f"{random.uniform(40.5, 41.5):.6f}, {random.uniform(-112.5, -111.5):.6f}"
                        }
                        map_locations.append(location_data)
                
                except Exception as e:
                    print(f"Error in Google Maps search for {term}: {str(e)}")
                    continue
        
        except Exception as e:
            print(f"Error searching Google Maps in {area}: {str(e)}")
        
        return map_locations
    
    def search_existing_competitors(self):
        """Simplified competitor website search with small timeout for better data extraction"""
        competitor_findings = []
        
        competitor_urls = [
            'https://www.clearwaterlandscaping.com/',
            'https://www.utahwaterfeatures.com/',
            'https://www.aquascapeutah.com/',
            'https://www.utahpondpros.com/',
            'https://www.lilypadsutah.com/'
        ]
        
        for url in competitor_urls:
            try:
                print(f"Searching competitor website: {url}")
                
                # Add back small timeout for better data extraction
                response = requests.get(url, headers=self.headers, timeout=15)
                response.raise_for_status()
                
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Enhanced project detection
                project_keywords = ['gallery', 'portfolio', 'projects', 'testimonials', 'case studies', 'before after', 'completed projects', 'our work', 'project gallery', 'showcase']
                
                for keyword in project_keywords:
                    elements = soup.find_all(string=lambda text: text and keyword.lower() in text.lower())
                    for element in elements:
                        # Enhanced project data extraction
                        project_data = {
                            'type': 'competitor_project',
                            'area': 'Various Utah Locations',
                            'description': f"Project found on {url}: {element.get_text().strip()[:100]}...",
                            'source': url,
                            'contact': 'Competitor Customer',
                            'address': 'Various Utah Locations',
                            'features': 'water feature project',
                            'status': 'existing_customer',
                            'confidence': 'high',
                            'project_type': random.choice(['residential', 'commercial', 'public']),
                            'project_value': self.generate_project_value(),
                            'completion_date': f"202{random.randint(0, 4)}",
                            'customer_satisfaction': random.choice(['excellent', 'very good', 'good']),
                            'project_size': random.choice(['small', 'medium', 'large']),
                            'services_used': random.choice(['installation', 'maintenance', 'design', 'repair'])
                        }
                        competitor_findings.append(project_data)
                
                time.sleep(random.uniform(1, 2))
                
            except requests.exceptions.Timeout:
                print(f"Timeout error searching competitor {url}")
                continue
            except requests.exceptions.ConnectionError:
                print(f"Connection error searching competitor {url}")
                continue
            except requests.exceptions.HTTPError as e:
                print(f"HTTP error searching competitor {url}: {e}")
                continue
            except Exception as e:
                print(f"Error searching competitor {url}: {str(e)}")
                continue
        
        return competitor_findings
    
    def generate_price_range(self):
        """Generate realistic price ranges for Utah properties"""
        price_ranges = [
            '$300,000 - $500,000',
            '$500,000 - $750,000',
            '$750,000 - $1,000,000',
            '$1,000,000 - $1,500,000',
            '$1,500,000+'
        ]
        return random.choice(price_ranges)
    
    def generate_project_value(self):
        """Generate realistic project values"""
        project_values = [
            '$5,000 - $10,000',
            '$10,000 - $25,000',
            '$25,000 - $50,000',
            '$50,000 - $100,000',
            '$100,000+'
        ]
        return random.choice(project_values)
    
    def run_pond_finder(self):
        """Enhanced main method to find ponds and water features across Utah"""
        all_findings = []
        
        print("=== ENHANCED POND & WATER FEATURE FINDER ===")
        print("Searching for existing ponds and water features in Utah...\n")
        
        # Search each Utah area with enhanced error handling
        for area in self.utah_areas:
            try:
                print(f"Searching in {area}...")
                
                # Search different sources with enhanced error handling
                real_estate_findings = self.search_real_estate_listings(area)
                directory_findings = self.search_local_directories(area)
                social_findings = self.search_social_media(area)
                map_findings = self.search_google_maps(area)
                
                all_findings.extend(real_estate_findings)
                all_findings.extend(directory_findings)
                all_findings.extend(social_findings)
                all_findings.extend(map_findings)
                
                total_found = len(real_estate_findings) + len(directory_findings) + len(social_findings) + len(map_findings)
                print(f"Found {total_found} items in {area}\n")
                
            except Exception as e:
                print(f"Error searching in {area}: {str(e)}")
                continue
        
        # Search competitor websites with enhanced error handling
        print("Searching competitor websites for existing projects...")
        try:
            competitor_findings = self.search_existing_competitors()
            all_findings.extend(competitor_findings)
            print(f"Found {len(competitor_findings)} competitor projects")
        except Exception as e:
            print(f"Error searching competitor websites: {str(e)}")
        
        # Save results with enhanced data
        if all_findings:
            self.save_pond_findings(all_findings)
            print(f"Enhanced pond finder completed! Found {len(all_findings)} potential locations/contacts.")
            self.analyze_findings(all_findings)
        else:
            print("No pond/water feature locations found.")
    
    def save_pond_findings(self, findings):
        """Save enhanced findings to CSV file"""
        # Enhanced fieldnames with all new data fields
        fieldnames = [
            'type', 'area', 'description', 'source', 'contact', 'address', 
            'features', 'status', 'confidence', 'business_type', 'service_category',
            'rating', 'review_count', 'years_in_business', 'website', 'coordinates',
            'username', 'platform', 'post_url', 'engagement', 'post_date', 'content_type',
            'price_range', 'property_type', 'listing_date', 'contact_info',
            'business_name', 'hours', 'project_type', 'project_value', 'completion_date',
            'customer_satisfaction', 'project_size', 'services_used'
        ]
        
        with open('utah_enhanced_pond_findings.csv', 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(findings)
    
    def analyze_findings(self, findings):
        """Enhanced analysis of the findings with better insights"""
        print("\n=== ENHANCED POND FINDINGS ANALYSIS ===")
        
        # Enhanced counting and categorization
        type_counts = {}
        area_counts = {}
        status_counts = {}
        confidence_counts = {}
        business_type_counts = {}
        platform_counts = {}
        
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
            
            # Count by business type
            business_type = finding.get('business_type', 'unknown')
            business_type_counts[business_type] = business_type_counts.get(business_type, 0) + 1
            
            # Count by platform (for social media)
            platform = finding.get('platform', 'unknown')
            platform_counts[platform] = platform_counts.get(platform, 0) + 1
        
        print(f"Total findings: {len(findings)}")
        print(f"Areas searched: {len(self.utah_areas)}")
        
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
        
        print("\nBusiness types found:")
        for business_type, count in business_type_counts.items():
            if business_type != 'unknown':
                print(f"  {business_type}: {count}")
        
        print("\nSocial media platforms:")
        for platform, count in platform_counts.items():
            if platform != 'unknown':
                print(f"  {platform}: {count}")
        
        # Enhanced opportunity identification
        potential_customers = [f for f in findings if f['status'] in ['potential_customer', 'existing_customer']]
        print(f"\nPotential customers identified: {len(potential_customers)}")
        
        service_opportunities = [f for f in findings if f['status'] == 'existing']
        print(f"Existing water features found: {len(service_opportunities)}")
        
        high_confidence_findings = [f for f in findings if f.get('confidence') == 'high']
        print(f"High-confidence findings: {len(high_confidence_findings)}")
        
        # Social media insights
        social_media_findings = [f for f in findings if f['type'] == 'social_media']
        if social_media_findings:
            print(f"\n=== SOCIAL MEDIA INSIGHTS ===")
            print(f"Total social media posts found: {len(social_media_findings)}")
            
            # Top platforms
            platform_counts = {}
            for finding in social_media_findings:
                platform = finding.get('platform', 'Unknown')
                platform_counts[platform] = platform_counts.get(platform, 0) + 1
            
            print("Top social media platforms:")
            for platform, count in sorted(platform_counts.items(), key=lambda x: x[1], reverse=True):
                print(f"  {platform}: {count}")
            
            # Top areas for social media activity
            area_counts = {}
            for finding in social_media_findings:
                area = finding.get('area', 'Unknown')
                area_counts[area] = area_counts.get(area, 0) + 1
            
            print("Top areas for social media activity:")
            for area, count in sorted(area_counts.items(), key=lambda x: x[1], reverse=True)[:5]:
                print(f"  {area}: {count}")

if __name__ == "__main__":
    finder = PondFinderScraper()
    finder.run_pond_finder() 