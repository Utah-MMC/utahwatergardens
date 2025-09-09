// API endpoint for contact form submissions
// Handles form data and sends email notifications

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS for cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only POST requests are accepted'
    });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Name, email, and message are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format',
        message: 'Please provide a valid email address'
      });
    }

    // Create email transporter - Gmail settings
    console.log('Email configuration:', {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      user: process.env.GMAIL_USER,
      hasPassword: !!process.env.GMAIL_PASS
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    // Email content for business owner
    const businessEmailContent = {
      from: process.env.GMAIL_USER,
      to: process.env.BUSINESS_EMAIL, // Your business email
      subject: process.env.EMAIL_SUBJECT,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Service Needed:</strong> ${service}</p>` : ''}
          </div>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;">
              <strong>📧 Reply directly to:</strong> ${email}
              ${phone ? `<br><strong>📞 Call back:</strong> ${phone}` : ''}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #64748b; font-size: 14px; text-align: center;">
            This message was sent from the Utah Water Gardens contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `
    };

    // Auto-reply email for customer
    const customerEmailContent = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: process.env.EMAIL_SUBJECT,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; text-align: center;">Thank You for Contacting Utah Water Gardens!</h2>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to Utah Water Gardens! We've received your message and will get back to you within 24 hours.</p>
            
            ${service ? `<p><strong>Service Requested:</strong> ${service}</p>` : ''}
            
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Call us directly at <strong>${process.env.BUSINESS_PHONE}</strong> for immediate assistance</li>
              <li>Visit our store at <strong>5911 S 1300 E, Salt Lake City, UT 84121</strong></li>
              <li>Check out our <a href="https://utahwatergardens.com/pond-gallery" style="color: #1e40af;">pond gallery</a> for inspiration</li>
            </ul>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Store Hours</h3>
            <p><strong>Monday - Friday:</strong> 10:00 AM - 6:00 PM</p>
            <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #64748b; font-size: 14px; text-align: center;">
            Utah Water Gardens | 5911 S 1300 E, Salt Lake City, UT 84121 | ${process.env.BUSINESS_PHONE}
          </p>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessEmailContent),
      transporter.sendMail(customerEmailContent)
    ]);

    // Log the submission (optional)
    console.log(`Contact form submission from ${name} (${email}) at ${new Date().toISOString()}`);

    return res.status(200).json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      response: error.response
    });
    
    return res.status(500).json({
      error: 'Internal server error',
      message: `There was an error sending your message. Please try again or call us directly at ${process.env.BUSINESS_PHONE}.`,
      debug: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
