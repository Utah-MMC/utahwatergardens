import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# API Keys and Configuration
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
GOOGLE_SHEETS_CREDENTIALS_FILE = os.getenv('GOOGLE_SHEETS_CREDENTIALS_FILE', 'credentials.json')
GOOGLE_SHEET_ID = os.getenv('GOOGLE_SHEET_ID')

# Email Configuration
SMTP_SERVER = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.getenv('SMTP_PORT', '587'))
EMAIL_USER = os.getenv('EMAIL_USER')
EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD')

# Scraping Configuration
SCRAPING_DELAY = 2  # seconds between requests
MAX_RETRIES = 3
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'

# Target Industries and Locations
TARGET_INDUSTRIES = [
    'pest control',
    'landscaping',
    'plumbing',
    'electrical',
    'roofing',
    'HVAC',
    'cleaning services',
    'restaurant',
    'dental',
    'medical',
    'law firm',
    'real estate'
]

TARGET_LOCATIONS = [
    'Salt Lake City UT',
    'Murray UT',
    'West Valley City UT',
    'Provo UT',
    'Orem UT',
    'Sandy UT',
    'Ogden UT',
    'Layton UT',
    'South Jordan UT',
    'Lehi UT'
]

# CRM Configuration
CRM_SHEET_NAME = 'Leads'
CRM_COLUMNS = [
    'Company Name',
    'Phone',
    'Email',
    'Website',
    'Address',
    'Industry',
    'Source',
    'Date Added',
    'Status',
    'Notes'
] 