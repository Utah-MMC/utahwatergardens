import requests
from bs4 import BeautifulSoup
import csv
from urllib.parse import urljoin
import time
import random
import re

class CompetitorScraper:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        }
        
        # Enhanced base URLs with more Utah-specific competitors
        self.base_urls = {
            'pond_management': [
                'https://hensleypro.com/',
                'https://www.clearwaterlandscaping.com/',
                'https://www.aquascapeutah.com/',
                'https://www.utahwaterfeatures.com/',
                'https://www.thepondguy.com/',
                'https://www.sapphirefountains.com/',
                'https://www.utahwatergardenclub.org/',
                'https://www.utahwatergardens.com/',
                'https://allstarpros.com/',
                'https://www.koipond.com/',
                'https://www.watergarden.com/',
                'https://www.pondliner.com/',
                'https://www.azponds.com/',
                'https://www.koi.com/',
                'https://www.pondboss.com/',
                'https://www.pondtrade.com/',
                'https://www.koi.org/',
                'https://www.akca.org/',
                'https://www.koiusa.com/',
                'https://www.koihealth.com/',
                'https://aquascapeinc.com/',
                'https://livingwateraeration.com/',
                'https://naturalwaterscapes.com/',
                'https://webbsonline.com/',
                'https://pondboss.com/'
            ],
            'dumpster_rentals': [
                'https://www.wasatchwaste.com/',
                'https://www.utahdumpsterrental.com/',
                'https://www.saltlakedumpster.com/',
                'https://www.dumpsterrentalutah.com/',
                'https://www.utahwaste.com/',
                'https://www.unclebuckdumpster.com/',
                'https://www.budgetdumpster.com/',
                'https://www.wasteconnections.com/',
                'https://www.republicservices.com/',
                'https://www.wm.com/',
                'https://www.advanceddisposal.com/',
                'https://www.junk-king.com/',
                'https://www.collegehunkshaulingjunk.com/',
                'https://www.bagster.com/',
                'https://www.dumpsters.com/',
                'https://www.dumpster.com/',
                'https://www.1800gotjunk.com/',
                'https://www.junkremoval.com/',
                'https://www.junkremovalpros.com/',
                'https://www.junkremovalusa.com/'
            ],
            'pest_services': [
                'https://www.utahpestcontrol.com/',
                'https://www.saltlakepestcontrol.com/',
                'https://www.utahpestpros.com/',
                'https://www.orkin.com/',
                'https://www.arrowpestcontrol.com/',
                'https://www.mosquitosquad.com/',
                'https://www.trulynolen.com/',
                'https://www.westernpest.com/',
                'https://www.americanpest.com/',
                'https://www.antimite.com/',
                'https://www.pestworld.org/',
                'https://www.npma.org/',
                'https://www.pestcontrol.com/',
                'https://www.pestcontrolpros.com/',
                'https://www.pestcontrolusa.com/',
                'https://www.pestcontrolnetwork.com/',
                'https://www.pestcontrolguide.com/',
                'https://www.pestcontrolinfo.com/',
                'https://www.pestcontrolhelp.com/',
                'https://www.pestcontroladvice.com/'
            ],
            'stormwater': [
                'https://www.utahstormwater.com/',
                'https://www.stormwaterutah.com/',
                'https://www.industrialutah.com/',
                'https://www.utahwatermanagement.com/',
                'https://www.xylem.com/',
                'https://www.pentair.com/',
                'https://www.ksb.com/',
                'https://www.franklin-electric.com/',
                'https://www.zoeller.com/',
                'https://www.libertypumps.com/',
                'https://www.hayward.com/',
                'https://www.poolsupplies.com/',
                'https://www.poolandspa.com/',
                'https://www.poolcenter.com/',
                'https://www.poolsupplyworld.com/',
                'https://www.poolpartstogo.com/',
                'https://www.poolgeek.com/',
                'https://www.poolwarehouse.com/',
                'https://www.poolstore.com/',
                'https://www.poolpro.com/'
            ],
            'landscaping': [
                'https://www.outbacklandscape.com/',
                'https://www.utahlandscaping.com/',
                'https://www.saltlakelandscaping.com/',
                'https://www.trueservices.com/',
                'https://www.davey.com/',
                'https://www.asla.org/',
                'https://www.landscapingnetwork.com/',
                'https://www.landscapingideas.com/',
                'https://www.landscaping.com/',
                'https://www.landscapingpros.com/',
                'https://www.landscapingusa.com/',
                'https://www.landscapingnetwork.com/',
                'https://www.landscapingguide.com/',
                'https://www.landscapinginfo.com/',
                'https://www.landscapinghelp.com/',
                'https://www.landscapingadvice.com/',
                'https://www.landscapingtips.com/',
                'https://www.landscapingdesign.com/',
                'https://www.landscapingcontractor.com/',
                'https://www.landscapingcompany.com/'
            ]
        }
        
        # Utah-specific pricing patterns
        self.utah_pricing_patterns = {
            'pond_management': [
                'free estimate', 'free consultation', 'starting at', 'package deal',
                'seasonal pricing', 'maintenance package', 'installation quote',
                'utah pricing', 'local rates', 'competitive pricing', 'family owned',
                'utah owned', 'local business', 'free onsite estimate'
            ],
            'dumpster_rentals': [
                'daily rate', 'weekly rate', 'monthly rate', 'delivery fee',
                'pickup fee', 'overage charges', 'utah rates', 'local delivery',
                'same day delivery', 'next day delivery', 'free delivery',
                'competitive rates', 'utah pricing'
            ],
            'pest_services': [
                'treatment package', 'seasonal service', 'one-time treatment',
                'recurring service', 'free inspection', 'free estimate',
                'utah pest control rates', 'local pest control', 'family owned',
                'utah owned', 'competitive pricing'
            ],
            'stormwater': [
                'system installation', 'maintenance contract', 'emergency service',
                'preventive maintenance', 'utah stormwater', 'local service',
                'industrial rates', 'commercial pricing', 'residential pricing',
                'free assessment', 'free consultation'
            ],
            'landscaping': [
                'design consultation', 'installation quote', 'maintenance package',
                'seasonal service', 'utah landscaping', 'local rates',
                'free estimate', 'free consultation', 'package deals',
                'utah owned', 'family business', 'competitive pricing'
            ]
        }
    
    def scrape_competitor(self, url, industry):
        try:
            # Simple delay to avoid detection
            time.sleep(random.uniform(1, 2))
            
            # Add back small timeout for better data extraction
            response = requests.get(url, headers=self.headers, timeout=15)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Extract enhanced information
            data = {
                'industry': industry,
                'url': url,
                'company_name': self.extract_company_name(soup, url),
                'title': soup.title.string if soup.title else 'N/A',
                'phone': self.extract_phone(soup),
                'email': self.extract_email(soup),
                'about_us': self.extract_about_us(soup),
                'services': self.extract_services(soup, industry),
                'service_areas': self.extract_service_areas(soup),
                'pricing_info': self.extract_utah_pricing(soup, industry),
                'social_media': self.extract_social_media(soup),
                'year_established': self.extract_year_established(soup),
                'certifications': self.extract_certifications(soup),
                'specializations': self.extract_specializations(soup, industry)
            }
            
            return data
            
        except requests.exceptions.Timeout:
            print(f"Timeout error scraping {url}")
            return None
        except requests.exceptions.ConnectionError:
            print(f"Connection error scraping {url}")
            return None
        except requests.exceptions.HTTPError as e:
            print(f"HTTP error scraping {url}: {e}")
            return None
        except Exception as e:
            print(f"Error scraping {url}: {str(e)}")
            return None
    
    def extract_company_name(self, soup, url):
        """Extract company name from various sources"""
        # Try logo alt text first
        logo = soup.find('img', alt=re.compile(r'logo', re.I))
        if logo and logo.get('alt'):
            return logo.get('alt').replace('logo', '').replace('Logo', '').strip()
        
        # Try title tag
        if soup.title:
            title = soup.title.string
            # Remove common suffixes
            for suffix in [' - Home', ' | Home', ' - Utah', ' | Utah', ' - Salt Lake', ' | Salt Lake']:
                title = title.replace(suffix, '')
            return title.strip()
        
        # Try h1 tags
        h1_tags = soup.find_all('h1')
        for h1 in h1_tags:
            text = h1.get_text().strip()
            if len(text) < 50 and not text.isdigit():  # Reasonable company name length
                return text
        
        # Extract from URL as fallback
        from urllib.parse import urlparse
        domain = urlparse(url).netloc
        if domain.startswith('www.'):
            domain = domain[4:]
        return domain.replace('.com', '').replace('.org', '').replace('.net', '').title()
    
    def extract_phone(self, soup):
        """Enhanced phone number extraction"""
        # Look for phone numbers in common patterns
        phone_patterns = [
            r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}',  # (555) 123-4567 or 555-123-4567
            r'\d{3}[-.\s]?\d{3}[-.\s]?\d{4}',        # 5551234567
            r'1[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}' # 1-555-123-4567
        ]
        
        # Look in text content
        text_content = soup.get_text()
        for pattern in phone_patterns:
            matches = re.findall(pattern, text_content)
            if matches:
                return matches[0]
        
        # Look in href attributes for tel: links
        phone_links = soup.find_all('a', href=re.compile(r'^tel:'))
        if phone_links:
            phone_text = phone_links[0].get_text().strip()
            if phone_text:
                return phone_text
        
        # Look for phone in structured data
        phone_elements = soup.find_all(['span', 'div', 'p'], string=re.compile(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}'))
        for element in phone_elements:
            text = element.get_text().strip()
            if re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', text):
                return re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', text).group()
        
        return 'N/A'
    
    def extract_email(self, soup):
        """Enhanced email extraction from multiple sources"""
        emails = []
        
        try:
            # Method 1: Look for mailto links
            mailto_links = soup.find_all('a', href=re.compile(r'^mailto:'))
            for link in mailto_links:
                email = link['href'].replace('mailto:', '').split('?')[0]
                if self.is_valid_email(email):
                    emails.append(email)
            
            # Method 2: Look for email patterns in text content
            text_content = soup.get_text()
            email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
            found_emails = re.findall(email_pattern, text_content)
            for email in found_emails:
                if self.is_valid_email(email) and email not in emails:
                    emails.append(email)
            
            # Method 3: Look for email in contact forms and specific elements
            contact_elements = soup.find_all(['div', 'span', 'p'], string=re.compile(r'@'))
            for element in contact_elements:
                element_text = element.get_text()
                found_emails = re.findall(email_pattern, element_text)
                for email in found_emails:
                    if self.is_valid_email(email) and email not in emails:
                        emails.append(email)
            
            # Method 4: Look for email in input fields
            email_inputs = soup.find_all('input', type='email')
            for input_field in email_inputs:
                if input_field.get('value'):
                    email = input_field['value']
                    if self.is_valid_email(email) and email not in emails:
                        emails.append(email)
            
            # Method 5: Look for email in placeholder attributes
            email_placeholders = soup.find_all('input', placeholder=re.compile(r'@'))
            for input_field in email_placeholders:
                placeholder = input_field.get('placeholder', '')
                found_emails = re.findall(email_pattern, placeholder)
                for email in found_emails:
                    if self.is_valid_email(email) and email not in emails:
                        emails.append(email)
            
            # Return the first valid email found, or 'N/A' if none found
            return emails[0] if emails else 'N/A'
            
        except Exception as e:
            print(f"Error extracting email: {str(e)}")
            return 'N/A'
    
    def is_valid_email(self, email):
        """Validate email format"""
        if not email or email == 'N/A':
            return False
        
        # Basic email validation
        email_pattern = r'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'
        if not re.match(email_pattern, email):
            return False
        
        # Filter out common false positives
        invalid_domains = ['example.com', 'domain.com', 'test.com', 'sample.com']
        domain = email.split('@')[1].lower()
        if domain in invalid_domains:
            return False
        
        return True
    
    def extract_about_us(self, soup):
        """Extract About Us section content"""
        about_sections = []
        
        # Look for About Us links and sections
        about_links = soup.find_all('a', href=re.compile(r'about', re.I))
        for link in about_links:
            about_sections.append(link.get_text().strip())
        
        # Look for About Us headings
        about_headings = soup.find_all(['h1', 'h2', 'h3'], string=re.compile(r'about', re.I))
        for heading in about_headings:
            # Get next sibling content
            next_element = heading.find_next_sibling()
            if next_element and next_element.get_text().strip():
                about_sections.append(next_element.get_text().strip()[:200] + "...")
        
        # Look for common About Us content patterns
        about_patterns = ['about us', 'about our company', 'our story', 'company history']
        for pattern in about_patterns:
            elements = soup.find_all(string=re.compile(pattern, re.I))
            for element in elements:
                parent = element.parent
                if parent:
                    text = parent.get_text().strip()
                    if len(text) > 50 and len(text) < 500:
                        about_sections.append(text[:200] + "...")
        
        return ' | '.join(about_sections[:3]) if about_sections else 'N/A'
    
    def extract_services(self, soup, industry):
        """Enhanced service extraction with detailed categorization"""
        # Industry-specific service extraction with more detailed categories
        service_keywords = {
            'pond_management': {
                'installation': ['pond installation', 'water feature installation', 'fountain installation', 'waterfall installation', 'aquascape installation'],
                'maintenance': ['pond maintenance', 'water feature maintenance', 'pond cleaning', 'filter maintenance', 'pump maintenance', 'algae control'],
                'repair': ['pond repair', 'leak repair', 'pump repair', 'filter repair', 'liner repair'],
                'design': ['pond design', 'water feature design', 'landscape design', 'aquascape design'],
                'equipment': ['pond pumps', 'pond filters', 'pond liners', 'pond lights', 'aerators', 'skimmers'],
                'specialty': ['koi pond', 'garden pond', 'pondless waterfall', 'stream', 'creek', 'water garden']
            },
            'dumpster_rentals': {
                'sizes': ['10 yard', '15 yard', '20 yard', '30 yard', '40 yard', 'roll-off dumpster'],
                'services': ['delivery', 'pickup', 'same day delivery', 'next day delivery', 'extended rental'],
                'waste_types': ['construction debris', 'demolition waste', 'residential waste', 'commercial waste', 'junk removal'],
                'specialty': ['concrete disposal', 'asphalt disposal', 'roofing disposal', 'drywall disposal']
            },
            'pest_services': {
                'pest_types': ['mosquito control', 'ant control', 'spider control', 'rodent control', 'termite control', 'bed bug control'],
                'services': ['inspection', 'treatment', 'prevention', 'extermination', 'ongoing maintenance'],
                'methods': ['spray treatment', 'bait treatment', 'fumigation', 'exclusion', 'integrated pest management'],
                'specialty': ['residential pest control', 'commercial pest control', 'seasonal treatment']
            },
            'stormwater': {
                'systems': ['stormwater management', 'drainage systems', 'pump systems', 'irrigation systems', 'flood control'],
                'services': ['design', 'installation', 'maintenance', 'repair', 'emergency service'],
                'applications': ['residential', 'commercial', 'industrial', 'municipal', 'construction'],
                'specialty': ['erosion control', 'sediment control', 'water quality management']
            },
            'landscaping': {
                'services': ['landscape design', 'installation', 'maintenance', 'irrigation', 'hardscaping'],
                'features': ['patios', 'walkways', 'retaining walls', 'outdoor kitchens', 'fire pits'],
                'planting': ['trees', 'shrubs', 'flowers', 'sod', 'turf', 'garden design'],
                'specialty': ['drought-resistant landscaping', 'native plants', 'sustainable landscaping']
            }
        }
        
        services = {}
        keywords = service_keywords.get(industry, {})
        
        for category, terms in keywords.items():
            category_services = set()
            for term in terms:
                elements = soup.find_all(string=lambda text: text and term.lower() in text.lower())
            for element in elements:
                    text = element.get_text().strip()
                    if len(text) < 100:  # Avoid very long text blocks
                        category_services.add(text)
            if category_services:
                services[category] = list(category_services)[:5]  # Limit to 5 per category
        
        # Format services by category
        formatted_services = []
        for category, service_list in services.items():
            formatted_services.append(f"{category.title()}: {', '.join(service_list)}")
        
        return ' | '.join(formatted_services) if formatted_services else 'N/A'
    
    def extract_service_areas(self, soup):
        """Enhanced service area extraction"""
        # Comprehensive Utah areas list
        utah_areas = [
            'Utah', 'Salt Lake', 'Provo', 'Ogden', 'Park City', 'St. George', 
            'Davis County', 'Utah County', 'Weber County', 'West Valley', 'Sandy',
            'West Jordan', 'South Jordan', 'Draper', 'Lehi', 'American Fork',
            'Orem', 'Layton', 'Bountiful', 'Murray', 'Taylorsville', 'Midvale',
            'Cottonwood Heights', 'Holladay', 'Kearns', 'Magna', 'West Valley City',
            'Salt Lake City', 'Salt Lake County', 'Davis County', 'Utah County',
            'Weber County', 'Summit County', 'Wasatch County', 'Tooele County',
            'Cache County', 'Box Elder County', 'Morgan County', 'Rich County',
            'Duchesne County', 'Uintah County', 'Carbon County', 'Emery County',
            'Grand County', 'San Juan County', 'Kane County', 'Garfield County',
            'Washington County', 'Iron County', 'Beaver County', 'Millard County',
            'Sevier County', 'Piute County', 'Wayne County', 'Sanpete County',
            'Juab County', 'Nephi', 'Spanish Fork', 'Springville', 'Payson',
            'Mapleton', 'Lindon', 'Pleasant Grove', 'American Fork', 'Alpine',
            'Highland', 'Cedar Hills', 'Eagle Mountain', 'Saratoga Springs',
            'Bluffdale', 'Herriman', 'Riverton', 'South Jordan', 'West Jordan',
            'Taylorsville', 'Murray', 'Midvale', 'Cottonwood Heights', 'Holladay',
            'Millcreek', 'Salt Lake City', 'West Valley City', 'Kearns', 'Magna',
            'Taylorsville', 'Murray', 'Midvale', 'Cottonwood Heights', 'Holladay',
            'Millcreek', 'Salt Lake City', 'West Valley City', 'Kearns', 'Magna'
        ]
        
        service_areas = set()
        text_content = soup.get_text().lower()
        
        for area in utah_areas:
            if area.lower() in text_content:
                service_areas.add(area)
        
        # If no Utah areas found, look for general location indicators
        if not service_areas:
            location_indicators = ['local', 'serving', 'area', 'region', 'community', 'surrounding']
            for indicator in location_indicators:
                if indicator in text_content:
                    service_areas.add('Local Service Area')
                    break
        
        return ', '.join(sorted(service_areas)) if service_areas else 'N/A'
    
    def extract_utah_pricing(self, soup, industry):
        """Extract Utah-relevant pricing information"""
        pricing_info = set()
        text_content = soup.get_text().lower()
        
        # Get industry-specific pricing patterns
        pricing_patterns = self.utah_pricing_patterns.get(industry, [])
        
        for pattern in pricing_patterns:
            if pattern.lower() in text_content:
                # Find sentences containing pricing terms
                sentences = text_content.split('.')
                for sentence in sentences:
                    if pattern.lower() in sentence.lower() and len(sentence) < 200:
                        pricing_info.add(sentence.strip())
        
        # Look for specific pricing mentions
        pricing_mentions = [
            'free estimate', 'free consultation', 'starting at', 'package deal',
            'competitive pricing', 'utah pricing', 'local rates', 'family owned',
            'utah owned', 'local business'
        ]
        
        for mention in pricing_mentions:
            if mention in text_content:
                # Find context around pricing mentions
                words = text_content.split()
                try:
                    mention_index = words.index(mention.split()[0])
                    start = max(0, mention_index - 5)
                    end = min(len(words), mention_index + 10)
                    context = ' '.join(words[start:end])
                    pricing_info.add(context)
                except ValueError:
                    continue
        
        return ' | '.join(list(pricing_info)[:5]) if pricing_info else 'N/A'
    
    def extract_social_media(self, soup):
        """Extract social media links"""
        social_media = []
        
        # Look for social media links
        social_patterns = {
            'facebook': r'facebook\.com',
            'instagram': r'instagram\.com',
            'twitter': r'twitter\.com',
            'linkedin': r'linkedin\.com',
            'youtube': r'youtube\.com',
            'pinterest': r'pinterest\.com'
        }
        
        for platform, pattern in social_patterns.items():
            links = soup.find_all('a', href=re.compile(pattern, re.I))
            for link in links:
                social_media.append(f"{platform}: {link['href']}")
        
        return ' | '.join(social_media[:3]) if social_media else 'N/A'
    
    def extract_year_established(self, soup):
        """Extract year company was established"""
        text_content = soup.get_text()
        
        # Look for establishment patterns
        establishment_patterns = [
            r'established\s+in\s+(\d{4})',
            r'founded\s+in\s+(\d{4})',
            r'since\s+(\d{4})',
            r'(\d{4})\s*-\s*established',
            r'(\d{4})\s*-\s*founded'
        ]
        
        for pattern in establishment_patterns:
            match = re.search(pattern, text_content, re.I)
            if match:
                year = match.group(1)
                if 1900 <= int(year) <= 2024:
                    return year
        
        return 'N/A'
    
    def extract_certifications(self, soup):
        """Extract certifications and licenses"""
        certifications = []
        text_content = soup.get_text().lower()
        
        cert_patterns = [
            'licensed', 'certified', 'bonded', 'insured', 'bbb', 'better business bureau',
            'epa certified', 'licensed contractor', 'certified installer', 'licensed pest control',
            'utah licensed', 'state licensed', 'federal licensed'
        ]
        
        for pattern in cert_patterns:
            if pattern in text_content:
                certifications.append(pattern.title())
        
        return ' | '.join(certifications[:5]) if certifications else 'N/A'
    
    def extract_specializations(self, soup, industry):
        """Extract company specializations"""
        specializations = []
        text_content = soup.get_text().lower()
        
        # Industry-specific specializations
        industry_specs = {
            'pond_management': ['koi ponds', 'water features', 'aquascapes', 'pondless waterfalls', 'natural ponds'],
            'dumpster_rentals': ['construction', 'demolition', 'residential', 'commercial', 'same day delivery'],
            'pest_services': ['residential', 'commercial', 'mosquito control', 'termite control', 'bed bugs'],
            'stormwater': ['industrial', 'commercial', 'residential', 'municipal', 'construction'],
            'landscaping': ['residential', 'commercial', 'design', 'maintenance', 'irrigation']
        }
        
        specs = industry_specs.get(industry, [])
        for spec in specs:
            if spec in text_content:
                specializations.append(spec.title())
        
        # Look for general specialization indicators
        spec_indicators = ['specializing in', 'specialists in', 'experts in', 'focus on', 'specialty']
        for indicator in spec_indicators:
            if indicator in text_content:
                # Find context around specialization
                sentences = text_content.split('.')
                for sentence in sentences:
                    if indicator in sentence and len(sentence) < 100:
                        specializations.append(sentence.strip())
                        break
        
        return ' | '.join(specializations[:3]) if specializations else 'N/A'
    
    def run_scraper(self):
        all_data = []
        
        for industry, urls in self.base_urls.items():
            print(f"Scraping {industry.replace('_', ' ')} competitors...")
            for url in urls:
                print(f"Attempting to scrape: {url}")
                data = self.scrape_competitor(url, industry)
                if data:
                    all_data.append(data)
                    print(f"Successfully scraped: {url}")
                else:
                    print(f"Failed to scrape: {url}")
        
        # Save to CSV
        if all_data:
            self.save_to_csv(all_data)
            print(f"Scraping completed! Saved {len(all_data)} records to competitor_data.csv")
        else:
            print("No data was successfully scraped.")
    
    def save_to_csv(self, data):
        fieldnames = [
            'industry', 'url', 'company_name', 'title', 'phone', 'email', 
            'about_us', 'services', 'service_areas', 'pricing_info', 
            'social_media', 'year_established', 'certifications', 'specializations'
        ]
        
        with open('competitor_data.csv', 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(data)

if __name__ == "__main__":
    scraper = CompetitorScraper()
    scraper.run_scraper()