# Vantage & Company - Backend Setup Guide

## Overview
This backend server handles email functionality for the Vantage & Company website, including:
- Contact form submissions via email
- Automated confirmation emails to users
- Email notifications to company inbox

## Backend Technology Stack
- **Node.js** with Express.js
- **Nodemailer** for email service
- **CORS** for frontend integration
- **dotenv** for environment variables

## Installation & Setup

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Gmail Configuration (Important!)

Since we're using Gmail as the email service, follow these steps:

#### Step A: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled

#### Step B: Create App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows Computer" (or your device)
3. Google will generate a 16-character password
4. Copy this password (you'll use it in .env file)

### 3. Configure Environment Variables

Create a `.env` file in the `server` folder:

```bash
# Copy from .env.example
cp .env.example .env
```

Edit `.env` and add your credentials:
```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
COMPANY_EMAIL=info@vantageandcompany.com
```

Replace:
- `your-email@gmail.com` - Your Gmail address
- `xxxx xxxx xxxx xxxx` - Your 16-character App Password (with spaces)
- `info@vantageandcompany.com` - Your company email to receive inquiries

### 4. Start the Server

#### Development (with auto-reload):
```bash
npm run dev
```

#### Production:
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Contact Form Submission
**POST** `/api/contact`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Company",
  "message": "I'm interested in your products..."
}
```

Response (Success):
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### Health Check
**GET** `/api/health`

Response:
```json
{
  "status": "Server is running"
}
```

### Newsletter Subscription (Optional)
**POST** `/api/subscribe`

Request body:
```json
{
  "email": "subscriber@example.com"
}
```

## Frontend Integration

The frontend (`src/sections/ContactSection.tsx`) automatically calls the backend when a form is submitted.

**API Endpoint in Frontend:**
```
http://localhost:5000/api/contact
```

**Note:** Update this URL when deploying to production!

## Deployment Options

### Option 1: Vercel (Recommended for Node.js)
1. Create account at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `COMPANY_EMAIL`
   - `PORT`
4. Deploy button will automatically build and deploy

### Option 2: Heroku
1. Create account at [heroku.com](https://heroku.com)
2. Connect GitHub repository
3. Set environment variables in Heroku dashboard
4. Deploy

### Option 3: AWS/DigitalOcean (VPS)
Deploy server to a VPS with Node.js installed and PM2 for process management.

## Important Security Notes

⚠️ **Never commit `.env` file to GitHub** - it contains sensitive credentials

✅ **Always use `.env.example`** as a template

✅ **Use App Passwords instead of your actual Gmail password** for security

✅ **Keep email credentials private** - rotate them periodically

## Troubleshooting

### "Failed to send email" error
- Check Gmail App Password is correct (16 characters with spaces)
- Verify 2-Factor Authentication is enabled
- Check EMAIL_USER and EMAIL_PASSWORD in .env file
- Ensure Gmail account allows "Less secure app access" if using regular password

### CORS errors
- Make sure frontend API URL matches backend URL
- Backend CORS is already configured for all origins (*)
- Update CORS settings if needed in `server.js`

### "Cannot find module" errors
- Run `npm install` in server folder
- Delete `node_modules` and install again
- Check Node.js version (use v16 or higher)

## File Structure
```
server/
├── server.js          # Main server file
├── package.json       # Dependencies
├── .env               # **DON'T COMMIT** - Your credentials
├── .env.example       # Template for .env
└── README.md          # This file
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Set up Gmail credentials
3. ✅ Create .env file with credentials
4. ✅ Start server with `npm run dev`
5. ✅ Test contact form on frontend
6. ✅ Deploy to production

## Support

For issues with:
- **Gmail setup**: Check Google Account Security settings
- **Nodemailer**: Visit [nodemailer.com](https://nodemailer.com)
- **Express**: Check [expressjs.com](https://expressjs.com)

