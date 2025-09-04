# SmartFunnel - Lead Generation & Automation System

A comprehensive lead generation and automation system that combines web scraping, CRM automation, and AI-powered email campaigns to generate and nurture business leads.

## 🚀 Features

### 📊 Web Scraping
- **Multi-source scraping**: Yelp, Google, Yellow Pages
- **Industry targeting**: 12+ target industries
- **Location targeting**: 10+ Utah locations
- **Data extraction**: Company names, phones, addresses, websites
- **Anti-detection**: Random delays, user agent rotation

### 📈 CRM Automation
- **Google Sheets integration**: Automatic lead import/export
- **Lead management**: Status tracking, filtering, statistics
- **Data organization**: Structured lead data with timestamps
- **Export capabilities**: CSV export with custom formatting

### ✉️ AI-Powered Email Campaigns
- **Personalized emails**: AI-generated content for each company
- **Industry-specific**: Tailored messaging per industry
- **Drip campaigns**: Automated follow-up sequences
- **Performance tracking**: Email success rates and analytics
- **Template generation**: AI-created email templates

### 🤖 Automation
- **Scheduled scraping**: Daily automated lead generation
- **Follow-up campaigns**: Automated email sequences
- **Pipeline orchestration**: End-to-end automation
- **Performance reporting**: Comprehensive analytics

## 📋 Requirements

- Python 3.8+
- Chrome browser (for Selenium)
- Google Sheets API access
- OpenAI API key
- SMTP email credentials

## 🛠️ Installation

1. **Clone or download the project**
   ```bash
   cd smartfunnel
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Setup configuration**
   ```bash
   # Copy the example environment file
   cp env_example.txt .env
   
   # Edit .env with your actual credentials
   nano .env
   ```

4. **Setup Google Sheets API**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable Google Sheets API
   - Create service account credentials
   - Download `credentials.json` to the project folder

## ⚙️ Configuration

### Environment Variables (.env file)

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

# Scraping Configuration
SCRAPING_DELAY=2
MAX_RETRIES=3
```

### Target Industries & Locations

Edit `config.py` to customize target industries and locations:

```python
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
```

## 🎯 Usage

### Command Line Interface

```bash
# Run full pipeline (scraping + CRM + email campaigns)
python main.py pipeline

# Run scraping only
python main.py scrape

# CRM operations
python main.py crm stats      # View CRM statistics
python main.py crm export     # Export leads to CSV

# Email operations
python main.py email templates "pest control"  # Generate templates
python main.py email test                      # Test email generation

# Run automated scheduler
python main.py schedule
```

### Interactive Mode

```bash
python main.py
```

This launches an interactive menu with options:
1. Run full pipeline
2. Run scraping only
3. View CRM stats
4. Generate email templates
5. Run follow-up campaign
6. Exit

## 📁 Project Structure

```
smartfunnel/
├── main.py                 # Main orchestration script
├── config.py              # Configuration settings
├── web_scraper.py         # Web scraping functionality
├── crm_automation.py      # Google Sheets CRM integration
├── ai_email_campaign.py   # AI-powered email campaigns
├── requirements.txt       # Python dependencies
├── env_example.txt        # Environment variables template
├── README.md             # This file
└── credentials.json      # Google Sheets API credentials (you provide)
```

## 🔧 Components

### 1. Web Scraper (`web_scraper.py`)
- **LeadScraper class**: Main scraping functionality
- **Multi-source support**: Yelp, Google, Yellow Pages
- **Data cleaning**: Duplicate removal, data validation
- **Error handling**: Retry logic, logging

### 2. CRM Automation (`crm_automation.py`)
- **CRMAutomation class**: Google Sheets integration
- **Lead management**: Import, export, status updates
- **Statistics**: Performance metrics and reporting
- **Data organization**: Structured lead storage

### 3. AI Email Campaign (`ai_email_campaign.py`)
- **AIEmailCampaign class**: OpenAI-powered email generation
- **Personalization**: Company and industry-specific content
- **Drip campaigns**: Automated follow-up sequences
- **Performance tracking**: Email analytics and reporting

### 4. Main Orchestration (`main.py`)
- **SmartFunnel class**: Complete pipeline management
- **Scheduling**: Automated task execution
- **Reporting**: Comprehensive performance reports
- **Interactive interface**: User-friendly command options

## 📊 Data Flow

1. **Scraping Phase**
   - Scrape leads from multiple sources
   - Clean and deduplicate data
   - Save to CSV file

2. **CRM Integration**
   - Import leads to Google Sheets
   - Organize by industry and location
   - Track lead status

3. **Email Campaign**
   - Generate personalized emails
   - Send initial outreach
   - Schedule follow-up sequences

4. **Reporting**
   - Generate performance reports
   - Track success metrics
   - Export analytics

## 🎨 Customization

### Adding New Industries
Edit `config.py` and add to `TARGET_INDUSTRIES`:
```python
TARGET_INDUSTRIES.append('your_new_industry')
```

### Adding New Locations
Edit `config.py` and add to `TARGET_LOCATIONS`:
```python
TARGET_LOCATIONS.append('Your City UT')
```

### Custom Email Templates
Modify `ai_email_campaign.py` to customize email generation prompts.

### Custom Scraping Sources
Add new scraping methods to `web_scraper.py` following the existing pattern.

## 📈 Performance Tips

1. **Rate Limiting**: Adjust `SCRAPING_DELAY` to avoid being blocked
2. **Batch Processing**: Process leads in smaller batches for better performance
3. **Email Timing**: Space out email sends to avoid spam filters
4. **Data Quality**: Regularly clean and validate scraped data
5. **Monitoring**: Check logs for errors and performance issues

## 🔒 Security & Compliance

- **API Keys**: Never commit API keys to version control
- **Rate Limits**: Respect website terms of service and rate limits
- **Data Privacy**: Ensure compliance with data protection regulations
- **Email Compliance**: Follow CAN-SPAM and other email regulations

## 🐛 Troubleshooting

### Common Issues

1. **Chrome Driver Issues**
   ```bash
   # Update Chrome browser
   # The script automatically downloads the correct driver version
   ```

2. **Google Sheets API Errors**
   - Verify credentials.json file is in the project directory
   - Check Google Sheets API is enabled in Google Cloud Console
   - Ensure service account has proper permissions

3. **Email Sending Failures**
   - Verify SMTP credentials
   - Check if using app password for Gmail
   - Ensure email server settings are correct

4. **OpenAI API Errors**
   - Verify API key is correct
   - Check API usage limits
   - Ensure sufficient credits in OpenAI account

### Logs
Check `smartfunnel.log` for detailed error information and debugging.

## 📞 Support

For issues and questions:
1. Check the troubleshooting section
2. Review the logs in `smartfunnel.log`
3. Verify all configuration settings
4. Test individual components separately

## 📄 License

This project is for educational and business use. Please respect website terms of service and applicable laws when scraping data.

## 🔄 Updates

- **v1.0**: Initial release with core functionality
- Multi-source scraping
- Google Sheets CRM integration
- AI-powered email campaigns
- Automated scheduling
- Comprehensive reporting

---

**SmartFunnel** - Automate your lead generation and sales outreach! 🚀 