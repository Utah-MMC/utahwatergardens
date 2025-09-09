const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = 3000; // Same port as React dev server

// Middleware
app.use(cors());
app.use(express.json());

// Gmail transporter configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'jeremyuwg@gmail.com',
    pass: 'qujn cfie mzfp xlol'
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        message: 'Please fill in all required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        message: 'Please provide a valid email address'
      });
    }

    console.log('📧 Sending contact form email...');

    // Email to business owner
    const businessEmailContent = {
      from: 'jeremyuwg@gmail.com',
      to: 'contact@utahwatergardens.com',
      subject: 'Pond Service Requested',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
          </div>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This message was sent from the Utah Water Gardens contact form.
          </p>
        </div>
      `
    };

    // Auto-reply email to customer
    const customerEmailContent = {
      from: 'jeremyuwg@gmail.com',
      to: email,
      subject: 'Pond Service Requested',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; text-align: center;">Thank You for Contacting Utah Water Gardens!</h2>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to Utah Water Gardens! We've received your message and will get back to you within 24 hours.</p>
            
            ${service ? `<p><strong>Service Requested:</strong> ${service}</p>` : ''}
            
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Visit our website: <a href="https://utahwatergardens.com">utahwatergardens.com</a></li>
              <li>Call us at: (801) 590-8516</li>
              <li>Check out our pond gallery and services</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #6b7280;">Best regards,<br>The Utah Water Gardens Team</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(businessEmailContent);
    await transporter.sendMail(customerEmailContent);

    console.log('✅ Contact form emails sent successfully');

    res.json({
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('❌ Error sending contact form email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email',
      message: 'There was an error sending your message. Please try again or call us directly.'
    });
  }
});

// Free estimate form endpoint
app.post('/api/estimate', async (req, res) => {
  try {
    const { name, email, phone, projectType, budget, timeline, message } = req.body;

    // Validation
    if (!name || !email || !projectType) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        message: 'Please fill in all required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        message: 'Please provide a valid email address'
      });
    }

    console.log('📧 Sending estimate request email...');

    // Email to business owner
    const businessEmailContent = {
      from: 'jeremyuwg@gmail.com',
      to: 'contact@utahwatergardens.com',
      subject: 'Pond Service Requested',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            🆓 New Free Estimate Request
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Project Details:</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
          </div>
          
          ${message ? `
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Additional Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This estimate request was sent from the Utah Water Gardens website.
          </p>
        </div>
      `
    };

    // Auto-reply email to customer
    const customerEmailContent = {
      from: 'jeremyuwg@gmail.com',
      to: email,
      subject: 'Pond Service Requested',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; text-align: center;">Your Free Estimate Request is Confirmed!</h2>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hi ${name},</p>
            <p>Thank you for requesting a free estimate for your ${projectType} project! We're excited to help bring your vision to life.</p>
            
            <div style="background: #e0f2fe; padding: 15px; border-radius: 6px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-top: 0;">What happens next?</h3>
              <ol>
                <li>Our team will review your project details</li>
                <li>We'll contact you within 24 hours to schedule a consultation</li>
                <li>We'll provide a detailed, no-obligation estimate</li>
              </ol>
            </div>
            
            <p><strong>Project Type:</strong> ${projectType}</p>
            ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #6b7280;">Questions? Call us at (801) 590-8516</p>
            <p style="color: #6b7280;">Best regards,<br>The Utah Water Gardens Team</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(businessEmailContent);
    await transporter.sendMail(customerEmailContent);

    console.log('✅ Estimate request emails sent successfully');

    res.json({
      success: true,
      message: 'Your free estimate request has been submitted! We will contact you within 24 hours.'
    });

  } catch (error) {
    console.error('❌ Error sending estimate request email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email',
      message: 'There was an error submitting your request. Please try again or call us directly.'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
  console.log(`📧 Gmail configured: jeremyuwg@gmail.com`);
  console.log(`📬 Business email: contact@utahwatergardens.com`);
});
