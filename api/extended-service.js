const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Set CORS headers
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
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      distance,
      projectType,
      timeline,
      budget,
      projectDescription,
      additionalInfo
    } = req.body;

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'projectType', 'timeline', 'projectDescription'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'jeremyuwg@gmail.com',
        pass: process.env.EMAIL_PASS // You'll need to set this as an App Password
      }
    });

    // Email content for business notification
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e40af, #1d4ed8); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🌊 Extended Service Request</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">New project inquiry from outside primary service area</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #1e40af;">
            <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 20px;">📞 Contact Information</h2>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1e40af;">${email}</a></p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1e40af;">${phone}</a></p>
            <p style="margin: 5px 0;"><strong>Distance:</strong> ${distance} miles from Salt Lake City</p>
          </div>

          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #10b981;">
            <h2 style="color: #10b981; margin: 0 0 15px 0; font-size: 20px;">📍 Project Location</h2>
            <p style="margin: 5px 0;"><strong>Address:</strong> ${address}</p>
            <p style="margin: 5px 0;"><strong>City:</strong> ${city}, ${state} ${zipCode}</p>
          </div>

          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f59e0b;">
            <h2 style="color: #f59e0b; margin: 0 0 15px 0; font-size: 20px;">🏗️ Project Details</h2>
            <p style="margin: 5px 0;"><strong>Type:</strong> ${projectType}</p>
            <p style="margin: 5px 0;"><strong>Timeline:</strong> ${timeline}</p>
            <p style="margin: 5px 0;"><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            <div style="margin: 15px 0;">
              <strong>Description:</strong>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 8px; white-space: pre-wrap;">${projectDescription}</div>
            </div>
            ${additionalInfo ? `
              <div style="margin: 15px 0;">
                <strong>Additional Information:</strong>
                <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 8px; white-space: pre-wrap;">${additionalInfo}</div>
              </div>
            ` : ''}
          </div>

          <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; text-align: center;">
            <h3 style="color: #92400e; margin: 0 0 10px 0;">⚠️ Extended Service Area</h3>
            <p style="color: #92400e; margin: 0; font-weight: 500;">This project is ${distance} miles from Salt Lake City. Review logistics and pricing considerations.</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
          <p>Utah Water Gardens - Extended Service Request</p>
          <p>Submitted on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    // Email content for customer confirmation
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e40af, #1d4ed8); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🌊 Utah Water Gardens</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Extended Service Request Received</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1e40af; margin: 0 0 15px 0;">Thank You, ${name}!</h2>
            <p style="color: #374151; line-height: 1.6;">We've received your extended service request for your ${projectType.toLowerCase()} project. Our team will review your project details and contact you within 2-3 business days to discuss availability and next steps.</p>
          </div>

          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin: 0 0 15px 0;">📋 Your Project Summary</h3>
            <p style="margin: 5px 0;"><strong>Project Type:</strong> ${projectType}</p>
            <p style="margin: 5px 0;"><strong>Location:</strong> ${city}, ${state} ${zipCode}</p>
            <p style="margin: 5px 0;"><strong>Timeline:</strong> ${timeline}</p>
            <p style="margin: 5px 0;"><strong>Distance:</strong> ${distance} miles from Salt Lake City</p>
          </div>

          <div style="background: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #065f46; margin: 0 0 10px 0;">📞 Need Immediate Assistance?</h3>
            <p style="color: #065f46; margin: 0 0 10px 0;">Feel free to call us directly:</p>
            <p style="color: #065f46; margin: 0; font-size: 18px; font-weight: bold;">(801) 590-8516</p>
            <p style="color: #065f46; margin: 10px 0 0 0; font-size: 14px;">Mon-Sat: 10:00AM-6PM</p>
          </div>

          <div style="background: white; padding: 25px; border-radius: 8px; text-align: center;">
            <h3 style="color: #1e40af; margin: 0 0 15px 0;">🏪 Visit Our Store</h3>
            <p style="color: #374151; margin: 0;">Utah 84121</p>
            <p style="color: #6b7280; font-size: 14px; margin: 10px 0 0 0;">Come see us in person to discuss your project</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
          <p>Utah Water Gardens - Your Complete Pond & Water Feature Solution</p>
          <p>This email was sent to ${email} on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    // Send business notification email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'jeremyuwg@gmail.com',
      to: process.env.BUSINESS_EMAIL || 'jeremyuwg@gmail.com',
      subject: `🌊 Extended Service Request - ${projectType} (${distance} miles)`,
      html: businessEmailHtml
    });

    // Send customer confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'jeremyuwg@gmail.com',
      to: email,
      subject: '🌊 Extended Service Request Received - Utah Water Gardens',
      html: customerEmailHtml
    });

    return res.status(200).json({
      success: true,
      message: 'Extended service request submitted successfully! We\'ll review your project and contact you within 2-3 business days.'
    });

  } catch (error) {
    console.error('Extended service form error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'There was an error submitting your request. Please try again or contact us directly at (801) 590-8516.'
    });
  }
}
