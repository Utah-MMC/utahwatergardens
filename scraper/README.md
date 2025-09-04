# Utah Water Gardens - Web Scraper & Lead Generation System

A comprehensive, automated lead generation and nurturing system designed specifically for Utah Water Gardens. This system transforms web scraping into a robust lead generation tool that finds, scores, nurtures, and converts high-quality leads.

## 🚀 Quick Start

```bash
# Install dependencies
pip install -r requirements.txt

# Run the complete pipeline
python main_lead_generator.py --mode full

# Generate leads only
python main_lead_generator.py --mode generate

# Nurture existing leads
python main_lead_generator.py --mode nurture
```

## 🏗️ Project Structure

```
scraper/
├── main_lead_generator.py      # Main entry point
├── lead_generation_system.py   # Core lead generation logic
├── lead_nurturing_system.py    # Lead nurturing and follow-up
├── competitor_scraper.py       # Competitor analysis tools
├── pond_finder_scraper.py      # Property/pond finding
├── lead_analytics_system.py    # Analytics and reporting
├── config.json                 # Configuration file
├── requirements.txt            # Python dependencies
├── setup.py                    # Installation script
├── exports/                    # Data export directory
├── logs/                       # Log files
└── README.md                   # This file
```

## 🎯 Core Features

### 🔍 Multi-Source Lead Generation
- **Real Estate Listings**: Zillow, Realtor.com, Redfin for properties with ponds/water features
- **Social Media**: Facebook, Instagram, Pinterest for pond-related discussions
- **Local Directories**: Yellow Pages, Yelp, Google Maps for local businesses
- **Competitor Analysis**: Tracks competitor websites and social media presence

### 🎯 Intelligent Lead Scoring
- **Keyword Analysis**: Scores leads based on pond/water feature related keywords
- **Location Bonus**: Prioritizes Utah-based leads (Salt Lake City, West Jordan, Sandy, etc.)
- **Service Indicators**: Identifies leads looking for maintenance, installation, repair
- **Urgency Detection**: Flags leads with emergency or urgent needs

### 📧 Automated Lead Nurturing
- **Follow-up Sequences**: Automated email and phone call reminders
- **Email Campaigns**: Targeted campaigns based on lead characteristics
- **Engagement Tracking**: Monitors email opens, clicks, and interactions
- **Lead Qualification**: Automatically qualifies leads based on engagement

### 📊 Advanced Analytics & Reporting
- **ROI Tracking**: Calculates potential revenue and return on investment
- **Performance Metrics**: Source performance, conversion rates, lead velocity
- **Predictive Analytics**: Machine learning models for lead conversion prediction
- **Visual Reports**: Charts and graphs for easy analysis
- **Forecasting**: Predicts future lead generation trends

### 🗄️ Database Management
- **SQLite Database**: Stores all lead data, interactions, and campaign history
- **Duplicate Prevention**: Prevents duplicate leads based on contact information
- **Data Export**: Export leads to CSV for CRM integration
- **Backup & Recovery**: Database backup and recovery capabilities

## 🛠️ Installation

### Prerequisites
- Python 3.8 or higher
- pip package manager
- Internet connection for web scraping

### Setup Instructions

1. **Navigate to scraper directory**
   ```bash
   cd scraper
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure the system**
   ```bash
   python main_lead_generator.py
   ```
   This will create a default `config.json` file that you can customize.

4. **Update email configuration**
   Edit `config.json` and update the email settings:
   ```json
   {
     "email_config": {
       "smtp_server": "smtp.gmail.com",
       "smtp_port": 587,
       "username": "your-email@gmail.com",
       "password": "your-app-password",
       "from_name": "Utah Water Gardens"
     }
   }
   ```

## 📖 Usage

### Basic Commands

**Run the complete pipeline (recommended):**
```bash
python main_lead_generator.py --mode full
```

**Generate leads only:**
```bash
python main_lead_generator.py --mode generate
```

**Nurture existing leads:**
```bash
python main_lead_generator.py --mode nurture
```

**Generate analytics and reports:**
```bash
python main_lead_generator.py --mode analyze
```

**Get quick statistics:**
```bash
python main_lead_generator.py --mode stats
```

### Advanced Usage

**Custom lead generation:**
```bash
python main_lead_generator.py --mode generate --source real_estate --location "Salt Lake City"
```

**Export leads to CSV:**
```bash
python main_lead_generator.py --mode export --format csv --output leads_export.csv
```

**Run competitor analysis:**
```bash
python competitor_scraper.py --analyze --export
```

## ⚙️ Configuration

### Main Configuration (`config.json`)
```json
{
  "database": {
    "path": "leads.db",
    "backup_interval": 24
  },
  "email_config": {
    "smtp_server": "smtp.gmail.com",
    "smtp_port": 587,
    "username": "your-email@gmail.com",
    "password": "your-app-password",
    "from_name": "Utah Water Gardens"
  },
  "scraping": {
    "delay_between_requests": 2,
    "max_retries": 3,
    "user_agent": "Mozilla/5.0 (compatible; UtahWaterGardens/1.0)"
  },
  "lead_scoring": {
    "location_bonus": 10,
    "keyword_bonus": 5,
    "urgency_bonus": 15
  }
}
```

### Environment Variables
Create a `.env` file for sensitive information:
```env
EMAIL_PASSWORD=your_app_password
DATABASE_URL=your_database_url
API_KEYS=your_api_keys
```

## 📊 Data Output

### Lead Data Structure
```json
{
  "id": "unique_lead_id",
  "name": "Contact Name",
  "email": "email@example.com",
  "phone": "(801) 555-0123",
  "location": "Salt Lake City, UT",
  "source": "zillow",
  "score": 85,
  "status": "qualified",
  "created_date": "2025-09-03",
  "last_contact": "2025-09-03",
  "notes": "Interested in pond maintenance"
}
```

### Export Formats
- **CSV**: Standard spreadsheet format
- **JSON**: API-friendly format
- **Excel**: Advanced spreadsheet features
- **PDF**: Professional reports

## 🔧 Customization

### Adding New Data Sources
1. Create a new scraper class in `scrapers/`
2. Implement the required methods
3. Add configuration options
4. Update the main system

### Custom Lead Scoring
Modify the scoring algorithm in `lead_generation_system.py`:
```python
def calculate_lead_score(self, lead_data):
    score = 0
    
    # Location scoring
    if "Utah" in lead_data.get("location", ""):
        score += self.config["lead_scoring"]["location_bonus"]
    
    # Keyword scoring
    keywords = ["pond", "water feature", "maintenance"]
    for keyword in keywords:
        if keyword in lead_data.get("description", "").lower():
            score += self.config["lead_scoring"]["keyword_bonus"]
    
    return score
```

## 📈 Monitoring & Maintenance

### Log Files
- **lead_generation.log**: Main system logs
- **error.log**: Error tracking and debugging
- **performance.log**: System performance metrics

### Database Maintenance
```bash
# Backup database
python -c "from lead_generation_system import backup_database; backup_database()"

# Clean old data
python -c "from lead_generation_system import cleanup_old_data; cleanup_old_data()"
```

### Performance Optimization
- Adjust scraping delays based on target site policies
- Use proxy rotation for high-volume scraping
- Implement caching for frequently accessed data
- Monitor memory usage and optimize data structures

## 🚨 Troubleshooting

### Common Issues

**Rate limiting errors:**
- Increase delay between requests
- Use proxy rotation
- Implement exponential backoff

**Email sending failures:**
- Check SMTP credentials
- Verify app password for Gmail
- Check firewall settings

**Database errors:**
- Verify file permissions
- Check disk space
- Validate database integrity

### Debug Mode
Enable debug logging:
```bash
python main_lead_generator.py --debug --mode generate
```

### Error Reporting
Check the logs directory for detailed error information:
```bash
tail -f logs/error.log
```

## 🔒 Security & Compliance

### Data Protection
- All sensitive data is encrypted
- No personal information is logged
- Compliant with data protection regulations

### Web Scraping Ethics
- Respect robots.txt files
- Implement reasonable delays
- Follow website terms of service
- Use data responsibly

## 🚀 Deployment

### Local Development
```bash
python main_lead_generator.py --mode full
```

### Scheduled Execution
```bash
# Cron job for daily execution
0 9 * * * cd /path/to/scraper && python main_lead_generator.py --mode full
```

### Cloud Deployment
- **AWS**: Use Lambda functions for scheduled execution
- **GCP**: Cloud Functions with Cloud Scheduler
- **Azure**: Functions with Timer triggers

## 📞 Support

For technical support or questions:
- Email: icondumpsters@gmail.com
- Phone: (801) 918-6000
- Website: www.icondumpsters.com

## 📄 License

This project is proprietary to Utah Water Gardens.

## 🔄 Version History

- **v1.0.0**: Initial release with basic scraping
- **v1.1.0**: Added lead scoring and nurturing
- **v1.2.0**: Enhanced analytics and reporting
- **v1.3.0**: Improved competitor analysis
- **v1.4.0**: Added email automation and CRM integration 