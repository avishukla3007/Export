import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body

  // Validation
  if (!name || !email || !company || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    // Email to Vantage & Company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Vantage & Company',
      html: `
        <h2>Thank You</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you soon.</p>
        <p>Best regards,<br>Vantage & Company Team</p>
      `,
    })

    res.json({ 
      success: true, 
      message: 'Email sent successfully' 
    })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    })
  }
})

// Subscribe endpoint (optional - for newsletter)
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' })
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: `New Newsletter Subscription: ${email}`,
      html: `<p>New subscriber: ${email}</p>`,
    })

    res.json({ 
      success: true, 
      message: 'Subscription successful' 
    })
  } catch (error) {
    console.error('Subscription error:', error)
    res.status(500).json({ 
      error: 'Failed to process subscription' 
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
