# API Setup Guide for Utah Water Gardens

This guide will help you set up the email API endpoints for form submissions.

## 🚀 Quick Setup

### 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Email Configuration for Utah Water Gardens
EMAIL_USER=admin@utahwatergardens.com
EMAIL_PASS=Uwg2025!
BUSINESS_EMAIL=admin@utahwatergardens.com

# SMTP Configuration (adjust if needed for your email provider)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

### 2. Email Provider Setup

Since you're using `admin@utahwatergardens.com`, you may need to configure your email provider settings:

**For Gmail/Google Workspace:**
- If using Gmail, you might need an App Password
- If using Google Workspace, regular password should work

**For other email providers:**
- Update `SMTP_HOST`, `SMTP_PORT`, and `SMTP_SECURE` values accordingly
- Common settings:
  - Outlook: `smtp-mail.outlook.com`, port 587
  - Yahoo: `smtp.mail.yahoo.com`, port 587
  - Custom hosting: Check with your hosting provider

### 3. Vercel Environment Variables

When deploying to Vercel, add these environment variables in your Vercel dashboard:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add each variable:
   - `EMAIL_USER` = `admin@utahwatergardens.com`
   - `EMAIL_PASS` = `Uwg2025!`
   - `BUSINESS_EMAIL` = `admin@utahwatergardens.com`
   - `SMTP_HOST` = `smtp.gmail.com` (or your email provider's SMTP server)
   - `SMTP_PORT` = `587`
   - `SMTP_SECURE` = `false`

## 📧 API Endpoints

### Contact Form (`/api/contact`)

**POST** `/api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(801) 555-0123",
  "service": "Pond Maintenance",
  "message": "I need help with my pond..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We'll get back to you soon."
}
```

### Free Estimate Form (`/api/estimate`)

**POST** `/api/estimate`

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "(801) 555-0123",
  "projectType": "Pond Construction",
  "projectSize": "Medium (500-1000 sq ft)",
  "budget": "$5,000 - $10,000",
  "timeline": "Within 3 months",
  "location": "Salt Lake City, UT",
  "message": "I want to build a koi pond..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your free estimate request has been submitted! We'll contact you within 24 hours."
}
```

## 🔧 Local Development

To test the API endpoints locally:

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel dev`
3. Test the endpoints at `http://localhost:3000/api/contact` and `http://localhost:3000/api/estimate`

## 📨 Email Features

### Business Notifications
- Formatted HTML emails with all form data
- Clear project details and contact information
- Action items highlighted for quick follow-up

### Customer Auto-Reply
- Professional confirmation emails
- Store hours and contact information
- Next steps clearly outlined

## 🛡️ Security Features

- Input validation and sanitization
- Email format validation
- Rate limiting (handled by Vercel)
- CORS protection
- Error handling without exposing sensitive data

## 🚨 Troubleshooting

### Common Issues

1. **"Authentication failed" error**
   - Verify your email credentials are correct
   - If using Gmail, you might need an App Password instead of your regular password
   - Check if your email provider requires specific SMTP settings

2. **"Connection timeout" error**
   - Check your internet connection
   - Verify the SMTP server settings (host, port, secure)
   - Try different SMTP settings for your email provider

3. **Forms not submitting**
   - Check browser console for errors
   - Verify the API endpoints are deployed correctly
   - Test with a simple curl request
   - Ensure environment variables are set correctly in Vercel

### Testing the API

You can test the endpoints using curl:

```bash
# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'

# Test estimate form
curl -X POST http://localhost:3000/api/estimate \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "(801) 555-0123",
    "projectType": "Pond Construction"
  }'
```

## 📊 Monitoring

- Check Vercel function logs for any errors
- Monitor email delivery rates
- Set up alerts for failed form submissions

## 🔄 Updates

To update the API:
1. Make changes to the API files
2. Commit and push to your repository
3. Vercel will automatically redeploy the functions

---

**Need help?** Contact your developer or check the Vercel documentation for serverless functions.
