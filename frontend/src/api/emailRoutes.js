const express = require('express');
const emailService = require('../services/emailService');
const router = express.Router();

// Extended Service Form
router.post('/extended-service', async (req, res) => {
  try {
    const result = await emailService.sendOutOfAreaServiceEmail(req.body);
    
    if (result.success) {
      res.json({ 
        success: true, 
        message: 'Extended service request submitted successfully',
        messageId: result.messageId
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send email',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Extended service API error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Contact Form
router.post('/contact', async (req, res) => {
  try {
    const result = await emailService.sendContactFormEmail(req.body);
    
    if (result.success) {
      res.json({ 
        success: true, 
        message: 'Contact form submitted successfully',
        messageId: result.messageId
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send email',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Contact form API error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Schedule Form
router.post('/schedule', async (req, res) => {
  try {
    const result = await emailService.sendScheduleFormEmail(req.body);
    
    if (result.success) {
      res.json({ 
        success: true, 
        message: 'Schedule request submitted successfully',
        messageId: result.messageId
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send email',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Schedule form API error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error',
      error: error.message
    });
  }
});

// General Form (catch-all for other forms)
router.post('/general', async (req, res) => {
  try {
    const { formType = 'General', ...formData } = req.body;
    const result = await emailService.sendGeneralFormEmail(formData, formType);
    
    if (result.success) {
      res.json({ 
        success: true, 
        message: `${formType} form submitted successfully`,
        messageId: result.messageId
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send email',
        error: result.error
      });
    }
  } catch (error) {
    console.error('General form API error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error',
      error: error.message
    });
  }
});

module.exports = router;
