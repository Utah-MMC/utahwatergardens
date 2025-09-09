# Vercel Deployment Guide for Utah Water Gardens

## Issues Fixed

### 1. Permission Denied Error
- **Problem**: `react-scripts` binary didn't have execute permissions
- **Solution**: Updated build script to use `npx react-scripts build` instead of direct binary call

### 2. Conflicting Vercel Configurations
- **Problem**: Two `vercel.json` files with different configurations
- **Solution**: Consolidated into single root `vercel.json` with proper API function configuration

### 3. Security Vulnerabilities
- **Problem**: 9 vulnerabilities in dependencies (React 19.1.1, React Router 7.8.2)
- **Solution**: Downgraded to stable versions (React 18.3.1, React Router 6.28.0)

### 4. Environment Variable Mismatch
- **Problem**: API files used `GMAIL_USER`/`GMAIL_PASS` but env.example had `EMAIL_USER`/`EMAIL_PASS`
- **Solution**: Updated env.example to match API requirements

## Environment Variables Required

Set these in your Vercel dashboard under Project Settings > Environment Variables:

```
GMAIL_USER=your_gmail_address@gmail.com
GMAIL_PASS=your_gmail_app_password
BUSINESS_EMAIL=admin@utahwatergardens.com
EMAIL_SUBJECT=New Contact Form Submission - Utah Water Gardens
BUSINESS_PHONE=(801) 123-4567
NODE_ENV=production
```

## Gmail App Password Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use this app password (not your regular Gmail password) for `GMAIL_PASS`

## Deployment Steps

1. **Commit all changes**:
   ```bash
   git add .
   git commit -m "Fix Vercel deployment issues"
   git push origin master
   ```

2. **Set environment variables** in Vercel dashboard

3. **Deploy**: Vercel will automatically deploy when you push to master

## File Structure

```
utahwatergardens/
├── api/                    # API endpoints (contact.js, estimate.js)
├── frontend/              # React app
│   ├── src/              # React source code
│   ├── public/           # Static assets
│   └── package.json      # Frontend dependencies
├── vercel.json           # Vercel configuration
├── .vercelignore         # Files to ignore during deployment
├── .gitignore           # Git ignore rules
└── env.example          # Environment variable template
```

## API Endpoints

- `POST /api/contact` - Contact form submissions
- `POST /api/estimate` - Estimate request submissions

Both endpoints:
- Accept JSON data
- Send email notifications
- Return JSON responses
- Include CORS headers

## Testing

After deployment, test your API endpoints:

```bash
# Test contact form
curl -X POST https://your-domain.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'

# Test estimate form
curl -X POST https://your-domain.vercel.app/api/estimate \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "555-1234",
    "service": "Pond Installation",
    "message": "Need estimate for new pond"
  }'
```

## Troubleshooting

### Build Fails
- Check that all environment variables are set
- Verify Node.js version compatibility (>=18.0.0)
- Check Vercel build logs for specific errors

### API Not Working
- Verify environment variables are set correctly
- Check Gmail app password is valid
- Test with curl commands above
- Check Vercel function logs

### Email Not Sending
- Verify Gmail credentials
- Check if 2FA is enabled and app password is used
- Test SMTP connection manually
- Check Vercel function logs for error details

## Next Steps

1. Deploy to Vercel
2. Set environment variables
3. Test API endpoints
4. Update your frontend to use the correct API URLs
5. Monitor Vercel function logs for any issues
