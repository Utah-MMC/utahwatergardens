const nodemailer = require('nodemailer');

// Email configuration
const getEmailConfig = () => {
  return process.env.EMAIL_SERVICE === 'hostgator' ? {
    host: process.env.SMTP_HOST || 'mail.utahwatergardens.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER || 'services@utahwatergardens.com',
      pass: process.env.EMAIL_PASS || 'Uwg2025!'
    },
    tls: {
      rejectUnauthorized: false
    }
  } : {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'jeremyuwg@gmail.com',
      pass: process.env.EMAIL_PASS || 'egrn oriw jdys xdjo'
    }
  };
};

const createTransporter = () => {
  return nodemailer.createTransport(getEmailConfig());
};

// Email templates
const emailTemplates = {
  contactForm: (formData) => ({
    subject: `New Contact Form Submission from ${formData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2c5530;">New Contact Form Submission</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2c5530;">
            ${formData.message.replace(/\n/g, '<br>')}
          </p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          Submitted on ${new Date().toLocaleString()}
        </p>
      </div>
    `
  }),

  customerFollowUp: (formData, formType) => ({
    subject: 'Pond Service Requested',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c5530; margin-bottom: 10px;">Utah Water Gardens</h1>
          <p style="color: #666; font-size: 16px;">Creating Beautiful Water Features Since 1995</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #2c5530; margin-top: 0;">Thank You for Your Interest!</h2>
          <p style="font-size: 16px; line-height: 1.6;">
            Hi ${formData.name},
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to Utah Water Gardens! We've received your ${formType} request and are excited to help you create the water feature of your dreams.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            <strong>What happens next?</strong><br>
            • One of our experienced team members will review your request<br>
            • We'll contact you within 24 hours to discuss your project<br>
            • We'll schedule a convenient time for a consultation
          </p>
        </div>

        <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #2c5530; margin-top: 0;">Why Choose Utah Water Gardens?</h3>
          <ul style="color: #333; line-height: 1.6;">
            <li>Over 25 years of experience in water feature design and installation</li>
            <li>Licensed and insured professionals</li>
            <li>Custom designs tailored to your space and budget</li>
            <li>Comprehensive maintenance and repair services</li>
            <li>Local Utah company with deep community roots</li>
          </ul>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <p style="font-size: 16px; color: #2c5530; font-weight: bold;">
            Questions? Call us at (801) 590-8516
          </p>
          <p style="font-size: 14px; color: #666;">
            Monday - Friday: 10:00 AM - 6:00 PM<br>
            Saturday: 9:00 AM - 4:00 PM
          </p>
        </div>

        <div style="border-top: 1px solid #ddd; padding-top: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>Utah Water Gardens | Serving Utah County and Surrounding Areas</p>
          <p>This email was sent to ${formData.email} because you submitted a form on our website.</p>
        </div>
      </div>
    `
  })
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    console.log('Contact form submission received:', req.body);
    const formData = req.body;

    // Send business email
    const template = emailTemplates.contactForm(formData);
    const mailOptions = {
      from: getEmailConfig().auth.user,
      to: 'contact@utahwatergardens.com',
      subject: template.subject,
      html: template.html
    };

    const transporter = createTransporter();
    const result = await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully:', result.messageId);

    // Send customer follow-up email
    const followUpTemplate = emailTemplates.customerFollowUp(formData, 'Contact Form');
    const followUpOptions = {
      from: getEmailConfig().auth.user,
      to: formData.email,
      subject: followUpTemplate.subject,
      html: followUpTemplate.html
    };

    const followUpResult = await transporter.sendMail(followUpOptions);
    console.log('Customer follow-up email sent successfully:', followUpResult.messageId);

    res.status(200).json({ 
      success: true, 
      messageId: result.messageId,
      followUpMessageId: followUpResult.messageId
    });

  } catch (error) {
    console.error('Error sending contact form email:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    res.status(500).json({ 
      success: false, 
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
