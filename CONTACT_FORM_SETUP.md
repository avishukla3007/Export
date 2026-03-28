# Complete Contact Form Setup Guide

## Problem Fixed
✅ Contact form now shows clear error messages  
✅ Better error handling for backend connection issues  
✅ Environment-based API configuration  
✅ Clear feedback when user submits inquiry

## How to Run Everything (Local Development)

### Prerequisites
- Node.js v16+ installed
- Two terminal windows/tabs

### Step 1: Set Up Backend Server

**Terminal 1:**
```bash
cd server
npm install
```

Create `.env` file in `server` folder (copy from `.env.example`):
```
PORT=5000
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
COMPANY_EMAIL=info@vantageandcompany.com
```

**To get Gmail credentials:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate an app password for Gmail
5. Copy the 16-character password

**Start backend server:**
```bash
npm run dev
```

You should see: `Server running on port 5000`

### Step 2: Set Up Frontend

**Terminal 2:**
```bash
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

## How It Works

### When User Clicks "Contact Us"
1. User navigates to `/contact` page
2. They fill out the contact form with:
   - Full Name
   - Email Address
   - Company/Business Name
   - Order Details/Requirements

3. Click "Submit Order Inquiry" button

### Form Submission Process
1. **Validation** - Form data is validated
2. **API Call** - Data sent to backend at `http://localhost:5000/api/contact`
3. **Email Sent** - Backend sends two emails:
   - To company inbox (with inquiry details)
   - To user (confirmation email)
4. **Response** - User sees success or error message

### Success Response
```
✓ Thank you! We've received your inquiry and will contact you shortly 
with pricing and availability details.
```

### Error Response (Example)
```
❌ Error Sending Inquiry
Failed to connect to server. Please start the backend server...
```

## Environment Configuration

### For Local Development (.env)
```
VITE_API_URL=http://localhost:5000
```

### For Production (Vercel)
When deploying, set environment variable:
```
VITE_API_URL=https://your-backend-deployed-url.com
```

## Testing Checklist

- [ ] Backend running on port 5000
- [ ] Frontend running on http://localhost:5173
- [ ] Both terminals show "running" messages
- [ ] Open browser console (F12) for debugging
- [ ] Fill contact form and submit
- [ ] Check for success/error message
- [ ] Check email inbox for new message
- [ ] Check browser console for API response

## Troubleshooting

### "Error Sending Inquiry" Message

**Issue**: Backend not running
- **Fix**: Make sure `npm run dev` is running in server folder

**Issue**: Gmail credentials incorrect
- **Fix**: Check .env file, regenerate app password

**Issue**: CORS error in console
- **Fix**: Backend CORS is already configured, check API URL

### No Error Message Appears
- Open browser DevTools (F12)
- Go to Console tab
- Try submitting form again
- Look for error messages in console

### Form Doesn't Submit
- Check network tab (F12 → Network)
- Click submit button
- Look for failed requests to `/api/contact`
- Check response errors

## File Structure

```
Vantage&Co/
├── src/
│   ├── config/
│   │   └── api.ts              # API configuration
│   ├── sections/
│   │   └── ContactSection.tsx  # Contact form
│   └── pages/
│       └── ContactPage.tsx     # Contact page
├── server/
│   ├── server.js              # Backend server
│   ├── .env                   # ⚠️ Don't commit
│   ├── .env.example           # Template
│   └── README.md              # Backend guide
├── .env.example               # Frontend template
└── package.json
```

## What Happens Behind The Scenes

### Frontend (React)
1. User fills form → `ContactSection.tsx`
2. Click submit → Form validation
3. Send POST to `${API_BASE_URL}/api/contact`
4. Show success/error to user

### Backend (Express)
1. Receive POST request
2. Validate form data
3. Create email templates
4. Send via Gmail (Nodemailer)
5. Return JSON response

### Email Service (Nodemailer + Gmail)
1. Connects to Gmail via SMTP
2. Sends inquiry to company email
3. Sends confirmation to user email
4. Logs errors to console

## Next: Production Deployment

### Deploying Backend
1. Choose hosting: Vercel, Heroku, AWS, DigitalOcean
2. Set up environment variables in hosting platform
3. Deploy backend code
4. Get backend URL (e.g., `https://mybackend.vercel.app`)

### Deploying Frontend
1. Update `.env` with deployed backend URL
2. Deploy to Vercel (auto-connected to GitHub)
3. Add same environment variable to Vercel: `VITE_API_URL`

## Quick Reference

| Component | Location | Port | Command |
|-----------|----------|------|---------|
| Backend Server | `/server` | 5000 | `npm run dev` |
| Frontend | `/src` | 5173 | `npm run dev` |
| Contact Page | `/contact` | - | - |
| API Endpoint | Backend | 5000 | `/api/contact` |
| Config File | `/src/config/api.ts` | - | - |

## Getting Help

If form still doesn't work:
1. Check browser console (F12)
2. Check server console
3. Verify `.env` credentials
4. Check network requests in DevTools
5. See `server/README.md` for backend troubleshooting

---

**Status**: ✅ Contact form is now fully functional with error handling!
