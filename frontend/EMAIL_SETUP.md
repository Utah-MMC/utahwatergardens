# Email System Setup - Utah Water Gardens

## Overview
This email system uses Nodemailer to send form submissions from the Utah Water Gardens website to all three business email addresses:
- jeremyuwg@gmail.com
- utahwatergardens@gmail.com  
- contact@utahwatergardens.com

## Configuration
- **From Email**: jeremyuwg@gmail.com
- **App Password**: egrn oriw jdys xdjo
- **Service**: Gmail
- **Recipients**: All form submissions are sent to:
  - jeremyuwg@gmail.com
  - utahwatergardens@gmail.com
  - contact@utahwatergardens.com

## Forms Connected
1. **Extended Service Form** (`/out-of-area-service`)
   - API Endpoint: `POST /api/extended-service`
   - Sends detailed project information for out-of-area requests

2. **Contact Form** (`/contact`)
   - API Endpoint: `POST /api/contact`
   - Sends general contact inquiries

3. **Schedule/Estimate Form** (`/free-estimate`)
   - API Endpoint: `POST /api/schedule`
   - Sends schedule requests and estimate requests

## How to Run

### Development Mode (Both React App and Email Server)
```bash
npm run start:dev
```
This runs both the React development server and the email server concurrently.

### Email Server Only
```bash
npm run start:email
```
This runs only the email server on port 3001.

### React App Only
```bash
npm start
```
This runs only the React development server on port 3000.

## Testing the Email System

### Test Email Service Directly
```bash
node src/test-email.js
```
This will send test emails to verify the system is working.

### Test via API
```bash
# Test extended service endpoint
curl -X POST http://localhost:3001/api/extended-service \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","phone":"(555) 123-4567","distance":"75","projectType":"Residential Pond","projectDescription":"Test project","timeline":"Within 1 month"}'

# Test contact endpoint
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Contact","email":"contact@example.com","phone":"(555) 987-6543","service":"Pond Maintenance","message":"Test message"}'

# Test schedule endpoint
curl -X POST http://localhost:3001/api/schedule \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Schedule","email":"schedule@example.com","phone":"(555) 456-7890","preferredDate":"2024-02-15","serviceType":"Pond Design","message":"Test schedule request"}'
```

## Email Templates
Each form has a custom HTML email template that includes:
- Professional styling with Utah Water Gardens branding
- Organized sections for different types of information
- Clear formatting for easy reading
- Contact information and project details

## Production Deployment

### Vercel Deployment Setup

**Environment Variables Required:**

You need to add these environment variables in your Vercel dashboard:

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Select your Utah Water Gardens project

2. **Add Environment Variables**
   - Go to **Settings** → **Environment Variables**
   - Add the following variables:

   | Variable Name | Value | Environment |
   |---------------|-------|-------------|
   | `EMAIL_USER` | `jeremyuwg@gmail.com` | Production, Preview, Development |
   | `EMAIL_PASS` | `egrn oriw jdys xdjo` | Production, Preview, Development |
   | `NODE_ENV` | `production` | Production |
   | `NODE_ENV` | `development` | Development |

3. **Deploy**
   - After adding environment variables, redeploy your project
   - The email system will automatically work in production

### Important Notes for Vercel:
- The email server runs as a serverless function on Vercel
- Environment variables are automatically injected at runtime
- No additional configuration needed beyond adding the env vars
- The system will send both business notifications and customer follow-up emails automatically

## Troubleshooting
- **Emails not sending**: Check Gmail app password and ensure 2FA is enabled
- **Server not starting**: Ensure port 3001 is available
- **CORS errors**: The email server includes CORS middleware for cross-origin requests
- **Form submission errors**: Check browser console and server logs for detailed error messages

## Security Notes
- The Gmail app password is currently hardcoded for development
- For production, move credentials to environment variables
- Consider implementing rate limiting for form submissions
- Add input validation and sanitization for security
