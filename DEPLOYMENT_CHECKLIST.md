# 🚀 Email System Deployment Checklist

## ✅ Pre-Deployment (Completed)
- [x] Updated email from `support@utahwatergardens.com` to `services@utahwatergardens.com`
- [x] All forms connected to email API
- [x] Email system tested locally
- [x] Code committed and pushed to git
- [x] Environment variables documented

## 🔧 Vercel Deployment Steps

### 1. Environment Variables Setup
In Vercel Dashboard → Settings → Environment Variables, add:

| Variable | Value | Environment |
|----------|-------|-------------|
| `EMAIL_SERVICE` | `hostgator` | Production, Preview, Development |
| `EMAIL_USER` | `services@utahwatergardens.com` | Production, Preview, Development |
| `EMAIL_PASS` | `Uwg2025!` | Production, Preview, Development |
| `BUSINESS_EMAIL` | `contact@utahwatergardens.com` | Production, Preview, Development |
| `SMTP_HOST` | `mail.utahwatergardens.com` | Production, Preview, Development |
| `SMTP_PORT` | `587` | Production, Preview, Development |
| `SMTP_SECURE` | `false` | Production, Preview, Development |
| `NODE_ENV` | `production` | Production |
| `NODE_ENV` | `development` | Preview, Development |

### 2. Deploy
- [ ] Trigger deployment in Vercel
- [ ] Wait for build to complete
- [ ] Check deployment logs for errors

### 3. Post-Deployment Testing
- [ ] Test Contact Form (`/contact`)
- [ ] Test Free Estimate Form (`/schedule`)
- [ ] Test Extended Service Form (`/out-of-area-service`)
- [ ] Verify emails received at `contact@utahwatergardens.com`
- [ ] Verify customer follow-up emails sent
- [ ] Check email sender shows `services@utahwatergardens.com`

## 📧 Email System Configuration

**From Email**: `services@utahwatergardens.com`  
**To Email**: `contact@utahwatergardens.com`  
**Customer Follow-up**: Automatic confirmation emails  
**SMTP**: HostGator (`mail.utahwatergardens.com:587`)

## 🔍 Troubleshooting

If emails don't work after deployment:
1. Check Vercel environment variables are set correctly
2. Verify `services@utahwatergardens.com` email account is active
3. Check Vercel function logs for SMTP errors
4. Test with a simple form submission

## 📱 Forms Connected
- ✅ Contact Form (`/contact`)
- ✅ Free Estimate Form (`/schedule`) 
- ✅ Extended Service Form (`/out-of-area-service`)

---
**Last Updated**: September 14, 2025  
**Email System**: HostGator SMTP with services@utahwatergardens.com
