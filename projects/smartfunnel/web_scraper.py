import requests
from bs4 import BeautifulSoup
import csv
import time
import random
import re
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from fake_useragent import UserAgent
import pandas as pd
from datetime import datetime
import logging
from config import *

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class LeadScraper:
    def __init__(self):
        self.session = requests.Session()
        self.ua = UserAgent()
        self.session.headers.update({'User-Agent': self.ua.random})
        self.driver = None
        
    def setup_selenium(self):
        """Setup Selenium WebDriver with Chrome"""
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument(f"--user-agent={USER_AGENT}")
        
        service = Service(ChromeDriverManager().install())
        self.driver = webdriver.Chrome(service=service, options=chrome_options)
        
    def scrape_yelp_businesses(self, query, location):
        """Scrape business information from Yelp"""
        logger.info(f"Scraping Yelp for {query} in {location}")
        businesses = []
        
        try:
            # Format query and location for URL
            query_formatted = query.replace(' ', '+')
            location_formatted = location.replace(' ', '+')
            
            url = f"https://www.yelp.com/search?find_desc={query_formatted}&find_loc={location_formatted}"
            
            response = self.session.get(url)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Look for business listings
            business_containers = soup.find_all('div', {'class': re.compile(r'.*business.*')})
            
            for container in business_containers[:10]:  # Limit to first 10 results
                try:
                    # Extract business name
                    name_elem = container.find('a', {'class': re.compile(r'.*business.*')})
                    name = name_elem.get_text(strip=True) if name_elem else "N/A"
                    
                    # Extract phone number
                    phone_elem = container.find('p', string=re.compile(r'\d{3}-\d{3}-\d{4}'))
                    phone = phone_elem.get_text(strip=True) if phone_elem else "N/A"
                    
                    # Extract address
                    address_elem = container.find('address')
                    address = address_elem.get_text(strip=True) if address_elem else "N/A"
                    
                    # Extract website
                    website_elem = container.find('a', href=re.compile(r'http'))
                    website = website_elem.get('href') if website_elem else "N/A"
                    
                    if name != "N/A":
                        businesses.append({
                            'Company Name': name,
                            'Phone': phone,
                            'Email': 'N/A',
                            'Website': website,
                            'Address': address,
                            'Industry': query,
                            'Source': 'Yelp',
                            'Date Added': datetime.now().strftime('%Y-%m-%d'),
                            'Status': 'New',
                            'Notes': f'Scraped from Yelp - {location}'
                        })
                        
                except Exception as e:
                    logger.error(f"Error parsing business: {e}")
                    continue
                    
        except Exception as e:
            logger.error(f"Error scraping Yelp: {e}")
            
        return businesses
    
    def scrape_google_businesses(self, query, location):
        """Scrape business information from Google"""
        logger.info(f"Scraping Google for {query} in {location}")
        businesses = []
        
        try:
            if not self.driver:
                self.setup_selenium()
                
            search_query = f"{query} {location}"
            url = f"https://www.google.com/search?q={search_query.replace(' ', '+')}"
            
            self.driver.get(url)
            time.sleep(random.uniform(2, 4))
            
            # Look for business listings
            business_elements = self.driver.find_elements(By.CSS_SELECTOR, '[data-ved]')
            
            for element in business_elements[:10]:  # Limit to first 10 results
                try:
                    # Extract business name
                    name_elem = element.find_element(By.CSS_SELECTOR, 'h3')
                    name = name_elem.text if name_elem else "N/A"
                    
                    # Extract phone number
                    phone_pattern = r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b'
                    phone_match = re.search(phone_pattern, element.text)
                    phone = phone_match.group() if phone_match else "N/A"
                    
                    # Extract address
                    address_elem = element.find_element(By.CSS_SELECTOR, '[data-ved] span')
                    address = address_elem.text if address_elem else "N/A"
                    
                    if name != "N/A" and name not in [b['Company Name'] for b in businesses]:
                        businesses.append({
                            'Company Name': name,
                            'Phone': phone,
                            'Email': 'N/A',
                            'Website': 'N/A',
                            'Address': address,
                            'Industry': query,
                            'Source': 'Google',
                            'Date Added': datetime.now().strftime('%Y-%m-%d'),
                            'Status': 'New',
                            'Notes': f'Scraped from Google - {location}'
                        })
                        
                except Exception as e:
                    logger.error(f"Error parsing Google business: {e}")
                    continue
                    
        except Exception as e:
            logger.error(f"Error scraping Google: {e}")
            
        return businesses
    
    def scrape_yellow_pages(self, query, location):
        """Scrape business information from Yellow Pages"""
        logger.info(f"Scraping Yellow Pages for {query} in {location}")
        businesses = []
        
        try:
            query_formatted = query.replace(' ', '-')
            location_formatted = location.replace(' ', '-')
            
            url = f"https://www.yellowpages.com/{location_formatted}/{query_formatted}"
            
            response = self.session.get(url)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Look for business listings
            business_containers = soup.find_all('div', {'class': 'result'})
            
            for container in business_containers[:10]:  # Limit to first 10 results
                try:
                    # Extract business name
                    name_elem = container.find('a', {'class': 'business-name'})
                    name = name_elem.get_text(strip=True) if name_elem else "N/A"
                    
                    # Extract phone number
                    phone_elem = container.find('div', {'class': 'phones phone primary'})
                    phone = phone_elem.get_text(strip=True) if phone_elem else "N/A"
                    
                    # Extract address
                    address_elem = container.find('div', {'class': 'street-address'})
                    address = address_elem.get_text(strip=True) if address_elem else "N/A"
                    
                    # Extract website
                    website_elem = container.find('a', {'class': 'track-visit-website'})
                    website = website_elem.get('href') if website_elem else "N/A"
                    
                    if name != "N/A":
                        businesses.append({
                            'Company Name': name,
                            'Phone': phone,
                            'Email': 'N/A',
                            'Website': website,
                            'Address': address,
                            'Industry': query,
                            'Source': 'Yellow Pages',
                            'Date Added': datetime.now().strftime('%Y-%m-%d'),
                            'Status': 'New',
                            'Notes': f'Scraped from Yellow Pages - {location}'
                        })
                        
                except Exception as e:
                    logger.error(f"Error parsing Yellow Pages business: {e}")
                    continue
                    
        except Exception as e:
            logger.error(f"Error scraping Yellow Pages: {e}")
            
        return businesses
    
    def scrape_all_sources(self, query, location):
        """Scrape from all sources and combine results"""
        all_businesses = []
        
        # Scrape from different sources
        yelp_businesses = self.scrape_yelp_businesses(query, location)
        google_businesses = self.scrape_google_businesses(query, location)
        yellow_pages_businesses = self.scrape_yellow_pages(query, location)
        
        # Combine all results
        all_businesses.extend(yelp_businesses)
        all_businesses.extend(google_businesses)
        all_businesses.extend(yellow_pages_businesses)
        
        # Remove duplicates based on company name
        seen_names = set()
        unique_businesses = []
        
        for business in all_businesses:
            if business['Company Name'] not in seen_names:
                seen_names.add(business['Company Name'])
                unique_businesses.append(business)
        
        logger.info(f"Found {len(unique_businesses)} unique businesses for {query} in {location}")
        return unique_businesses
    
    def save_to_csv(self, businesses, filename='leads.csv'):
        """Save scraped data to CSV file"""
        if not businesses:
            logger.warning("No businesses to save")
            return
            
        df = pd.DataFrame(businesses)
        df.to_csv(filename, index=False)
        logger.info(f"Saved {len(businesses)} leads to {filename}")
    
    def run_full_scrape(self):
        """Run scraping for all target industries and locations"""
        all_leads = []
        
        for industry in TARGET_INDUSTRIES:
            for location in TARGET_LOCATIONS:
                logger.info(f"Scraping {industry} in {location}")
                leads = self.scrape_all_sources(industry, location)
                all_leads.extend(leads)
                
                # Add delay between requests
                time.sleep(random.uniform(SCRAPING_DELAY, SCRAPING_DELAY + 2))
        
        # Save all leads
        self.save_to_csv(all_leads, 'all_leads.csv')
        return all_leads
    
    def cleanup(self):
        """Clean up resources"""
        if self.driver:
            self.driver.quit()

if __name__ == "__main__":
    scraper = LeadScraper()
    try:
        leads = scraper.run_full_scrape()
        print(f"Successfully scraped {len(leads)} leads!")
    finally:
        scraper.cleanup() 