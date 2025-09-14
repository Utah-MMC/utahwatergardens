const nodemailer = require('nodemailer');

// Function to get email configuration dynamically
const getEmailConfig = () => {
  return process.env.EMAIL_SERVICE === 'hostgator' ? {
    host: process.env.SMTP_HOST || 'mail.utahwatergardens.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
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
      pass: process.env.EMAIL_PASS || 'egrn oriw jdys xdjo' // App password
    }
  };
};

// Create transporter function
const createTransporter = () => {
  return nodemailer.createTransport(getEmailConfig());
};

// Email templates
const emailTemplates = {
  outOfAreaService: (formData) => ({
    subject: `Extended Service Request - ${formData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Extended Service Request</h2>
        <p><strong>New extended service request received from:</strong> ${formData.name}</p>
        
        <h3 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 5px;">Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone}</li>
          <li><strong>Distance from SLC:</strong> ${formData.distance} miles</li>
        </ul>
        
        <h3 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 5px;">Project Location</h3>
        <ul>
          <li><strong>Address:</strong> ${formData.address}</li>
          <li><strong>City:</strong> ${formData.city}, ${formData.state} ${formData.zipCode}</li>
        </ul>
        
        <h3 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 5px;">Project Details</h3>
        <ul>
          <li><strong>Project Type:</strong> ${formData.projectType}</li>
          <li><strong>Timeline:</strong> ${formData.timeline}</li>
          <li><strong>Budget:</strong> ${formData.budget || 'Not specified'}</li>
          <li><strong>Description:</strong> ${formData.projectDescription}</li>
          ${formData.additionalInfo ? `<li><strong>Additional Info:</strong> ${formData.additionalInfo}</li>` : ''}
        </ul>
        
        <hr style="margin: 20px 0; border: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          This request was submitted through the Utah Water Gardens website extended service form.
        </p>
      </div>
    `
  }),

  contactForm: (formData) => ({
    subject: `Contact Form Submission - ${formData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Contact Form Submission</h2>
        <p><strong>New contact form submission from:</strong> ${formData.name}</p>
        
        <h3 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 5px;">Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
          <li><strong>Subject:</strong> ${formData.subject || 'General Inquiry'}</li>
        </ul>
        
        <h3 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 5px;">Message</h3>
        <div style="background: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #1e40af;">
          ${formData.message.replace(/\n/g, '<br>')}
        </div>
        
        <hr style="margin: 20px 0; border: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          This message was submitted through the Utah Water Gardens website contact form.
        </p>
      </div>
    `
  }),

  scheduleForm: (formData) => ({
    subject: `Schedule Request - ${formData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Schedule Request</h2>
        <p><strong>New schedule request from:</strong> ${formData.name}</p>
        
        <h3 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 5px;">Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone}</li>
        </ul>
        
        <h3 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 5px;">Schedule Details</h3>
        <ul>
          <li><strong>Preferred Date:</strong> ${formData.preferredDate || 'Not specified'}</li>
          <li><strong>Preferred Time:</strong> ${formData.preferredTime || 'Not specified'}</li>
          <li><strong>Service Type:</strong> ${formData.serviceType || 'Not specified'}</li>
          <li><strong>Location:</strong> ${formData.location || 'Not specified'}</li>
          <li><strong>Message:</strong> ${formData.message || 'No additional message'}</li>
        </ul>
        
        <hr style="margin: 20px 0; border: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          This request was submitted through the Utah Water Gardens website schedule form.
        </p>
      </div>
    `
  }),

  generalForm: (formData, formType) => ({
    subject: `${formType} Form Submission - ${formData.name || 'Unknown'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">${formType} Form Submission</h2>
        <p><strong>New ${formType.toLowerCase()} form submission</strong></p>
        
        <h3 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 5px;">Form Data</h3>
        <div style="background: #f8fafc; padding: 15px; border-radius: 5px;">
          <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${JSON.stringify(formData, null, 2)}</pre>
        </div>
        
        <hr style="margin: 20px 0; border: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          This request was submitted through the Utah Water Gardens website ${formType.toLowerCase()} form.
        </p>
      </div>
    `
  }),

  // Customer follow-up email template
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
            Questions? Call us at (801) 555-0123
          </p>
          <p style="font-size: 14px; color: #666;">
            Monday - Friday: 8:00 AM - 6:00 PM<br>
            Saturday: 9:00 AM - 4:00 PM
          </p>
        </div>

        <div style="border-top: 1px solid #ddd; padding-top: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>Utah Water Gardens | 1234 Water Feature Way, Salt Lake City, UT 84101</p>
          <p>This email was sent to ${formData.email} because you submitted a form on our website.</p>
        </div>
      </div>
    `
  })
};

// Email service functions
const emailService = {
  // Send customer follow-up email
  sendCustomerFollowUp: async (formData, formType) => {
    try {
      const template = emailTemplates.customerFollowUp(formData, formType);
      const mailOptions = {
        from: 'jeremyuwg@gmail.com',
        to: formData.email,
        subject: template.subject,
        html: template.html
      };

      const transporter = createTransporter();
      const result = await transporter.sendMail(mailOptions);
      console.log('Customer follow-up email sent successfully:', result.messageId);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error('Error sending customer follow-up email:', error);
      return { success: false, error: error.message };
    }
  },

  // Send extended service request email
  sendOutOfAreaServiceEmail: async (formData) => {
    try {
      // Send business email
      const template = emailTemplates.outOfAreaService(formData);
      const mailOptions = {
        from: 'jeremyuwg@gmail.com',
        to: 'contact@utahwatergardens.com',
        subject: template.subject,
        html: template.html
      };

      const transporter = createTransporter();
      const result = await transporter.sendMail(mailOptions);
      console.log('Extended service email sent successfully:', result.messageId);

      // Send customer follow-up email
      const followUpResult = await emailService.sendCustomerFollowUp(formData, 'Extended Service Request');
      console.log('Customer follow-up email sent:', followUpResult.messageId);

      return { success: true, messageId: result.messageId, followUpMessageId: followUpResult.messageId };
    } catch (error) {
      console.error('Error sending extended service email:', error);
      return { success: false, error: error.message };
    }
  },

  // Send contact form email
  sendContactFormEmail: async (formData) => {
    try {
      // Send business email
      const template = emailTemplates.contactForm(formData);
      const mailOptions = {
        from: 'jeremyuwg@gmail.com',
        to: 'contact@utahwatergardens.com',
        subject: template.subject,
        html: template.html
      };

      const transporter = createTransporter();
      const result = await transporter.sendMail(mailOptions);
      console.log('Contact form email sent successfully:', result.messageId);

      // Send customer follow-up email
      const followUpResult = await emailService.sendCustomerFollowUp(formData, 'Contact Form');
      console.log('Customer follow-up email sent:', followUpResult.messageId);

      return { success: true, messageId: result.messageId, followUpMessageId: followUpResult.messageId };
    } catch (error) {
      console.error('Error sending contact form email:', error);
      return { success: false, error: error.message };
    }
  },

  // Send schedule form email
  sendScheduleFormEmail: async (formData) => {
    try {
      // Send business email
      const template = emailTemplates.scheduleForm(formData);
      const mailOptions = {
        from: 'jeremyuwg@gmail.com',
        to: 'contact@utahwatergardens.com',
        subject: template.subject,
        html: template.html
      };

      const transporter = createTransporter();
      const result = await transporter.sendMail(mailOptions);
      console.log('Schedule form email sent successfully:', result.messageId);

      // Send customer follow-up email
      const followUpResult = await emailService.sendCustomerFollowUp(formData, 'Schedule Request');
      console.log('Customer follow-up email sent:', followUpResult.messageId);

      return { success: true, messageId: result.messageId, followUpMessageId: followUpResult.messageId };
    } catch (error) {
      console.error('Error sending schedule form email:', error);
      return { success: false, error: error.message };
    }
  },

  // Send general form email
  sendGeneralFormEmail: async (formData, formType) => {
    try {
      // Send business email
      const template = emailTemplates.generalForm(formData, formType);
      const mailOptions = {
        from: 'jeremyuwg@gmail.com',
        to: 'contact@utahwatergardens.com',
        subject: template.subject,
        html: template.html
      };

      const transporter = createTransporter();
      const result = await transporter.sendMail(mailOptions);
      console.log(`${formType} form email sent successfully:`, result.messageId);

      // Send customer follow-up email if email is available
      if (formData.email) {
        const followUpResult = await emailService.sendCustomerFollowUp(formData, formType);
        console.log('Customer follow-up email sent:', followUpResult.messageId);
        return { success: true, messageId: result.messageId, followUpMessageId: followUpResult.messageId };
      }

      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error(`Error sending ${formType} form email:`, error);
      return { success: false, error: error.message };
    }
  }
};

module.exports = emailService;
