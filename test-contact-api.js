// Test script for contact API debugging
const https = require('https');

const testData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '555-1234',
  service: 'Pond Maintenance',
  message: 'This is a test message from the debugging script.'
};

function testContactAPI() {
  const postData = JSON.stringify(testData);
  
  const options = {
    hostname: 'utahwatergardens.com',
    port: 443,
    path: '/api/contact',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  console.log('🧪 Testing Contact API...');
  console.log('📤 Sending data:', testData);
  console.log('🌐 URL: https://utahwatergardens.com/api/contact');
  console.log('');

  const req = https.request(options, (res) => {
    let responseData = '';
    
    console.log(`📊 Status Code: ${res.statusCode}`);
    console.log(`📋 Headers:`, res.headers);
    console.log('');
    
    res.on('data', (chunk) => {
      responseData += chunk;
    });
    
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(responseData);
        console.log('✅ Response:', parsedData);
        
        if (res.statusCode === 200) {
          console.log('🎉 API is working correctly!');
        } else {
          console.log('❌ API returned an error');
          if (parsedData.debug) {
            console.log('🔍 Debug info:', parsedData.debug);
          }
        }
      } catch (error) {
        console.log('📄 Raw response:', responseData);
        console.log('❌ Failed to parse JSON response');
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ Request failed:', error.message);
  });

  req.write(postData);
  req.end();
}

// Run the test
testContactAPI();
