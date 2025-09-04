# SmartFunnel Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Configure Environment Variables
Copy `env_example.txt` to `.env` and fill in your API keys:

```env
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Google Sheets Configuration
GOOGLE_SHEETS_CREDENTIALS_FILE=credentials.json
GOOGLE_SHEET_ID=your_google_sheet_id_here

# Email Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password_here
```

### 3. Setup Google Sheets API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google Sheets API
4. Create service account credentials
5. Download `credentials.json` to the project folder

### 4. Test the System
```bash
# Run demo to test functionality
python demo.py

# Run full system (requires API setup)
python main.py
```

## 🔧 Troubleshooting

### Chrome Driver Issues (Windows)
If you see Chrome driver errors, try:
1. Update Chrome browser to latest version
2. Clear Chrome driver cache: `rm -rf ~/.wdm`
3. The system will automatically download the correct driver

### API Key Issues
- Ensure all API keys are correctly set in `.env`
- Check API usage limits and billing
- Verify service account permissions for Google Sheets

### Email Configuration
- Use app passwords for Gmail (not regular passwords)
- Enable 2-factor authentication first
- Check SMTP settings match your email provider

## 📊 System Capabilities

### ✅ What's Working
- **Web Scraping Framework**: Multi-source scraping architecture
- **Data Processing**: Lead deduplication and validation
- **CRM Integration**: Google Sheets automation
- **AI Email Generation**: OpenAI-powered personalization
- **Scheduling**: Automated task execution
- **Reporting**: Comprehensive analytics and exports

### 🎯 Target Industries
- Pest Control
- Landscaping
- Plumbing
- Electrical
- Roofing
- HVAC
- Cleaning Services
- Restaurants
- Dental
- Medical
- Law Firms
- Real Estate

### 📍 Target Locations
- Salt Lake City UT
- Murray UT
- West Valley City UT
- Provo UT
- Orem UT
- Sandy UT
- Ogden UT
- Layton UT
- South Jordan UT
- Lehi UT

## 🚀 Usage Examples

### Command Line Usage
```bash
# Run full pipeline
python main.py pipeline

# Run scraping only
python main.py scrape

# View CRM stats
python main.py crm stats

# Generate email templates
python main.py email templates "pest control"

# Run automated scheduler
python main.py schedule
```

### Demo Mode
```bash
# Test scraping functionality
python demo.py scrape

# Test AI email generation
python demo.py email

# Test data processing
python demo.py data

# Run full demo pipeline
python demo.py pipeline
```

## 📈 Expected Results

With proper configuration, you can expect:
- **50-200+ leads per day** from scraping
- **Personalized emails** for each company
- **Automated CRM updates** in Google Sheets
- **Follow-up campaigns** every 3 days
- **Comprehensive reporting** and analytics

## 🔒 Best Practices

1. **Rate Limiting**: Respect website terms of service
2. **Data Quality**: Regularly validate and clean scraped data
3. **Email Compliance**: Follow CAN-SPAM regulations
4. **API Management**: Monitor usage and costs
5. **Backup**: Regularly export data from Google Sheets

## 📞 Support

For issues:
1. Check the troubleshooting section
2. Review logs in `smartfunnel.log`
3. Test individual components with demo mode
4. Verify all configuration settings

---

**SmartFunnel** - Your complete lead generation and automation solution! 🚀 