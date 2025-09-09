// Test script to check the API endpoint
const fetch = require('node-fetch');

async function testContactAPI() {
  try {
    console.log('Testing contact API...');
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '(801) 555-0123',
        service: 'Pond Maintenance',
        message: 'This is a test message from the API test script.'
      }),
    });

    const result = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response body:', result);
    
    if (response.ok) {
      console.log('✅ API call successful!');
    } else {
      console.log('❌ API call failed:', result.message);
    }
    
  } catch (error) {
    console.error('❌ Error testing API:', error.message);
  }
}

testContactAPI();
