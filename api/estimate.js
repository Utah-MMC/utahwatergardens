// API endpoint for free estimate form submissions
// Handles estimate requests and sends email notifications

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
    const { 
      name, 
      email, 
      phone, 
      projectType, 
      projectSize, 
      budget, 
      timeline, 
      location, 
      message,
      additionalServices 
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !projectType) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Name, email, phone, and project type are required'
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
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'jeremyuwg@gmail.com',
        pass: 'qujn cfie mzfp xlol'
      }
    });

    // Email content for business owner
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
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
          </div>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            ${projectSize ? `<p><strong>Project Size:</strong> ${projectSize}</p>` : ''}
            ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
            ${additionalServices ? `<p><strong>Additional Services:</strong> ${additionalServices}</p>` : ''}
          </div>
          
          ${message ? `
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Additional Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          ` : ''}
          
          <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #166534;">
              <strong>🎯 Action Required:</strong> This is a FREE ESTIMATE request - follow up within 24 hours!
              <br><strong>📧 Reply to:</strong> ${email}
              <br><strong>📞 Call:</strong> ${phone}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #64748b; font-size: 14px; text-align: center;">
            Free estimate request from Utah Water Gardens website at ${new Date().toLocaleString()}
          </p>
        </div>
      `
    };

    // Auto-reply email for customer
    const customerEmailContent = {
      from: 'jeremyuwg@gmail.com',
      to: email,
      subject: 'Pond Service Requested',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; text-align: center;">Your Free Estimate Request is Confirmed!</h2>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hi ${name},</p>
            <p>Thank you for requesting a free estimate for your <strong>${projectType}</strong> project! We're excited to help bring your vision to life.</p>
            
            <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #166534; margin-top: 0;">What happens next?</h3>
              <ol style="color: #166534;">
                <li>Our team will review your project details</li>
                <li>We'll contact you within 24 hours to schedule a consultation</li>
                <li>We'll provide a detailed, no-obligation estimate</li>
                <li>You'll receive expert advice and recommendations</li>
              </ol>
            </div>
            
            <p><strong>Project Summary:</strong></p>
            <ul>
              <li><strong>Type:</strong> ${projectType}</li>
              ${projectSize ? `<li><strong>Size:</strong> ${projectSize}</li>` : ''}
              ${budget ? `<li><strong>Budget:</strong> ${budget}</li>` : ''}
              ${timeline ? `<li><strong>Timeline:</strong> ${timeline}</li>` : ''}
            </ul>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Need Immediate Assistance?</h3>
            <p>While you wait for your estimate, feel free to:</p>
            <ul>
              <li>Call us at <strong>(801) 590-8516</strong> for immediate questions</li>
              <li>Visit our store to see our products and get inspiration</li>
              <li>Check out our <a href="https://utahwatergardens.com/pond-gallery" style="color: #1e40af;">project gallery</a></li>
            </ul>
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;">
              <strong>📍 Store Location:</strong> 5911 S 1300 E, Salt Lake City, UT 84121
              <br><strong>🕒 Hours:</strong> Mon-Fri 10AM-6PM, Sat 9AM-4PM, Sun Closed
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #64748b; font-size: 14px; text-align: center;">
            Utah Water Gardens | Professional Pond & Water Feature Services
          </p>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessEmailContent),
      transporter.sendMail(customerEmailContent)
    ]);

    // Log the submission
    console.log(`Free estimate request from ${name} (${email}) for ${projectType} at ${new Date().toISOString()}`);

    return res.status(200).json({
      success: true,
      message: 'Your free estimate request has been submitted! We\'ll contact you within 24 hours.'
    });

  } catch (error) {
    console.error('Estimate form error:', error);
    
    return res.status(500).json({
      error: 'Internal server error',
      message: 'There was an error submitting your estimate request. Please try again or call us directly at (801) 590-8516.'
    });
  }
}
