# Utah Water Gardens - Deployment Guide

## 🚀 Overview

This guide covers deploying both components of the Utah Water Gardens project:

1. **Frontend** - React web application
2. **Scraper** - Python lead generation system

## 🎯 Frontend Deployment

### Prerequisites
- Node.js 18+ installed
- Git repository access
- Hosting service account (Vercel, Netlify, etc.)

### Local Development Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Vercel Deployment (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy from frontend directory**
   ```bash
   cd frontend
   vercel --prod
   ```

3. **Environment Variables** (if needed)
   ```bash
   vercel env add REACT_APP_API_URL
   vercel env add REACT_APP_GOOGLE_ANALYTICS_ID
   ```

4. **Custom Domain** (optional)
   ```bash
   vercel domains add yourdomain.com
   ```

### Netlify Deployment

1. **Build the project**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=build
   ```

3. **Environment Variables**
   - Go to Site Settings > Environment Variables
   - Add your environment variables

### Traditional Web Server Deployment

1. **Build the project**
   ```bash
   cd frontend
   npm run build
   ```

2. **Upload to server**
   - Upload the `build` folder contents to your web server
   - Ensure proper file permissions

3. **Configure web server**
   - Apache: Use `.htaccess` for React Router
   - Nginx: Configure try_files directive
   - IIS: Set up URL rewriting

### Apache Configuration (.htaccess)

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### Nginx Configuration

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## 🤖 Scraper Deployment

### Prerequisites
- Python 3.8+ installed
- pip package manager
- Server with internet access
- Database storage space

### Local Development Setup

```bash
# Navigate to scraper directory
cd scraper

# Install dependencies
pip install -r requirements.txt

# Configure the system
python main_lead_generator.py

# Test the system
python main_lead_generator.py --mode test
```

### Server Deployment

1. **Upload files to server**
   ```bash
   scp -r scraper/ user@your-server:/opt/utahwatergardens/
   ```

2. **Install dependencies**
   ```bash
   ssh user@your-server
   cd /opt/utahwatergardens/scraper
   pip install -r requirements.txt
   ```

3. **Configure the system**
   ```bash
   python main_lead_generator.py
   # This creates config.json
   ```

4. **Edit configuration**
   ```bash
   nano config.json
   # Update email settings, database path, etc.
   ```

### Scheduled Execution (Cron)

1. **Edit crontab**
   ```bash
   crontab -e
   ```

2. **Add scheduled jobs**
   ```bash
   # Daily lead generation at 9 AM
   0 9 * * * cd /opt/utahwatergardens/scraper && python main_lead_generator.py --mode generate

   # Weekly nurturing at 10 AM on Mondays
   0 10 * * 1 cd /opt/utahwatergardens/scraper && python main_lead_generator.py --mode nurture

   # Monthly analytics at 11 AM on the 1st
   0 11 1 * * cd /opt/utahwatergardens/scraper && python main_lead_generator.py --mode analyze
   ```

### Systemd Service (Linux)

1. **Create service file**
   ```bash
   sudo nano /etc/systemd/system/utahwatergardens-scraper.service
   ```

2. **Service configuration**
   ```ini
   [Unit]
   Description=Utah Water Gardens Scraper
   After=network.target

   [Service]
   Type=simple
   User=utahwatergardens
   WorkingDirectory=/opt/utahwatergardens/scraper
   ExecStart=/usr/bin/python3 main_lead_generator.py --mode full
   Restart=always
   RestartSec=300

   [Install]
   WantedBy=multi-user.target
   ```

3. **Enable and start service**
   ```bash
   sudo systemctl enable utahwatergardens-scraper
   sudo systemctl start utahwatergardens-scraper
   sudo systemctl status utahwatergardens-scraper
   ```

## ☁️ Cloud Deployment

### AWS Lambda + EventBridge

1. **Create Lambda function**
   ```bash
   # Package dependencies
   pip install -r requirements.txt -t package/
   cd package
   zip -r ../lambda-deployment.zip .
   cd ..
   zip -g lambda-deployment.zip *.py config.json
   ```

2. **Upload to Lambda**
   - Create Lambda function with Python 3.9 runtime
   - Upload the zip file
   - Set handler to `main_lead_generator.lambda_handler`

3. **Configure EventBridge**
   - Create rule for daily execution
   - Target the Lambda function

### Google Cloud Functions

1. **Deploy function**
   ```bash
   gcloud functions deploy utahwatergardens-scraper \
     --runtime python39 \
     --trigger-http \
     --allow-unauthenticated
   ```

2. **Set up Cloud Scheduler**
   ```bash
   gcloud scheduler jobs create http daily-scraping \
     --schedule="0 9 * * *" \
     --uri="YOUR_FUNCTION_URL" \
     --http-method=POST
   ```

### Azure Functions

1. **Create function app**
   ```bash
   az functionapp create \
     --name utahwatergardens-scraper \
     --storage-account yourstorageaccount \
     --consumption-plan-location eastus \
     --resource-group your-resource-group \
     --runtime python
   ```

2. **Deploy function**
   ```bash
   func azure functionapp publish utahwatergardens-scraper
   ```

## 🔧 Configuration Management

### Environment Variables

1. **Frontend (.env)**
   ```env
   REACT_APP_API_URL=https://api.yourdomain.com
   REACT_APP_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
   REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...
   ```

2. **Scraper (.env)**
   ```env
   EMAIL_PASSWORD=your_app_password
   DATABASE_URL=sqlite:///leads.db
   API_KEYS=your_api_keys
   LOG_LEVEL=INFO
   ```

### Configuration Files

1. **Scraper config.json**
   ```json
   {
     "database": {
       "path": "/opt/utahwatergardens/data/leads.db",
       "backup_interval": 24
     },
     "email_config": {
       "smtp_server": "smtp.gmail.com",
       "smtp_port": 587,
       "username": "your-email@gmail.com",
       "password": "${EMAIL_PASSWORD}",
       "from_name": "Utah Water Gardens"
     },
     "scraping": {
       "delay_between_requests": 2,
       "max_retries": 3,
       "user_agent": "Mozilla/5.0 (compatible; UtahWaterGardens/1.0)"
     }
   }
   ```

## 📊 Monitoring & Logging

### Log Management

1. **Log rotation**
   ```bash
   # Add to /etc/logrotate.d/utahwatergardens
   /opt/utahwatergardens/scraper/logs/*.log {
     daily
     rotate 30
     compress
     delaycompress
     missingok
     notifempty
     create 644 utahwatergardens utahwatergardens
   }
   ```

2. **Log monitoring**
   ```bash
   # Watch logs in real-time
   tail -f /opt/utahwatergardens/scraper/logs/lead_generation.log

   # Search for errors
   grep -i error /opt/utahwatergardens/scraper/logs/*.log
   ```

### Health Checks

1. **Create health check script**
   ```bash
   #!/bin/bash
   cd /opt/utahwatergardens/scraper
   python -c "from lead_generation_system import check_system_health; check_system_health()"
   ```

2. **Monitor with cron**
   ```bash
   # Check system health every hour
   0 * * * * /opt/utahwatergardens/scripts/health_check.sh
   ```

## 🔒 Security Considerations

### Access Control

1. **User permissions**
   ```bash
   # Create dedicated user
   sudo useradd -r -s /bin/false utahwatergardens
   sudo chown -R utahwatergardens:utahwatergardens /opt/utahwatergardens
   ```

2. **File permissions**
   ```bash
   # Secure sensitive files
   chmod 600 config.json
   chmod 600 .env
   chmod 755 *.py
   ```

### Network Security

1. **Firewall rules**
   ```bash
   # Allow only necessary ports
   sudo ufw allow 22/tcp    # SSH
   sudo ufw allow 80/tcp    # HTTP
   sudo ufw allow 443/tcp   # HTTPS
   sudo ufw enable
   ```

2. **VPN access** (if needed)
   - Set up VPN for secure remote access
   - Restrict access to specific IP ranges

## 📈 Performance Optimization

### Frontend

1. **Build optimization**
   ```bash
   # Analyze bundle size
   npm run build -- --analyze

   # Optimize images
   npm install -g imagemin-cli
   imagemin public/images/* --out-dir=public/images/optimized
   ```

2. **CDN configuration**
   - Use CDN for static assets
   - Configure caching headers
   - Enable gzip compression

### Scraper

1. **Database optimization**
   ```sql
   -- Add indexes for better performance
   CREATE INDEX idx_leads_location ON leads(location);
   CREATE INDEX idx_leads_score ON leads(score);
   CREATE INDEX idx_leads_created_date ON leads(created_date);
   ```

2. **Memory management**
   ```python
   # Process data in chunks
   chunk_size = 1000
   for chunk in pd.read_csv('large_file.csv', chunksize=chunk_size):
       process_chunk(chunk)
   ```

## 🚨 Troubleshooting

### Common Issues

1. **Frontend build fails**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Scraper import errors**
   ```bash
   # Check Python path
   python -c "import sys; print(sys.path)"
   
   # Install missing packages
   pip install -r requirements.txt --force-reinstall
   ```

3. **Database connection issues**
   ```bash
   # Check file permissions
   ls -la leads.db
   
   # Verify database integrity
   sqlite3 leads.db "PRAGMA integrity_check;"
   ```

### Debug Mode

1. **Enable debug logging**
   ```bash
   # Frontend
   npm start -- --verbose
   
   # Scraper
   python main_lead_generator.py --debug --mode generate
   ```

2. **Check system resources**
   ```bash
   # Monitor system usage
   htop
   df -h
   free -h
   ```

## 📞 Support

For deployment assistance:
- **Email**: icondumpsters@gmail.com
- **Phone**: (801) 918-6000
- **Documentation**: Check docs/ directory

## 🔄 Maintenance

### Regular Tasks

1. **Daily**
   - Check log files for errors
   - Monitor system performance
   - Verify scheduled jobs are running

2. **Weekly**
   - Review lead generation reports
   - Check database size and performance
   - Update dependencies if needed

3. **Monthly**
   - Database cleanup and optimization
   - Security updates and patches
   - Performance review and optimization

4. **Quarterly**
   - Full system backup
   - Infrastructure review
   - Capacity planning

---

**Utah Water Gardens Deployment Guide** - Comprehensive deployment instructions for both frontend and scraper components. 🚀
