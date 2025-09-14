const emailService = require('./services/emailService');

// Test data
const testFormData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '(555) 123-4567',
  address: '123 Test Street',
  city: 'Test City',
  state: 'UT',
  zipCode: '84121',
  distance: '75',
  projectType: 'Residential Pond',
  projectDescription: 'This is a test project description',
  timeline: 'Within 1 month',
  budget: '$10,000 - $25,000',
  additionalInfo: 'This is a test submission'
};

async function testEmailService() {
  console.log('Testing email service...');
  
  try {
    // Test extended service email
    console.log('Testing extended service email...');
    const result = await emailService.sendOutOfAreaServiceEmail(testFormData);
    
    if (result.success) {
      console.log('✅ Extended service email sent successfully!');
      console.log('Business email Message ID:', result.messageId);
      if (result.followUpMessageId) {
        console.log('Customer follow-up Message ID:', result.followUpMessageId);
      }
    } else {
      console.log('❌ Extended service email failed:', result.error);
    }
    
    // Test contact form email
    console.log('\nTesting contact form email...');
    const contactData = {
      name: 'Test Contact',
      email: 'contact@example.com',
      phone: '(555) 987-6543',
      service: 'Pond Maintenance',
      message: 'This is a test contact form message'
    };
    
    const contactResult = await emailService.sendContactFormEmail(contactData);
    
    if (contactResult.success) {
      console.log('✅ Contact form email sent successfully!');
      console.log('Business email Message ID:', contactResult.messageId);
      if (contactResult.followUpMessageId) {
        console.log('Customer follow-up Message ID:', contactResult.followUpMessageId);
      }
    } else {
      console.log('❌ Contact form email failed:', contactResult.error);
    }
    
    // Test schedule form email
    console.log('\nTesting schedule form email...');
    const scheduleData = {
      name: 'Test Schedule',
      email: 'schedule@example.com',
      phone: '(555) 456-7890',
      preferredDate: '2024-02-15',
      preferredTime: 'Morning',
      serviceType: 'Pond Design',
      location: 'Test Location',
      message: 'This is a test schedule request'
    };
    
    const scheduleResult = await emailService.sendScheduleFormEmail(scheduleData);
    
    if (scheduleResult.success) {
      console.log('✅ Schedule form email sent successfully!');
      console.log('Business email Message ID:', scheduleResult.messageId);
      if (scheduleResult.followUpMessageId) {
        console.log('Customer follow-up Message ID:', scheduleResult.followUpMessageId);
      }
    } else {
      console.log('❌ Schedule form email failed:', scheduleResult.error);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Run the test
testEmailService();
