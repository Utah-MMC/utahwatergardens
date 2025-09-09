// Test script for API deployment
// Run this after deploying to Vercel to test your API endpoints

const https = require('https');

// Replace with your actual Vercel domain
const BASE_URL = 'https://your-domain.vercel.app';

// Test data
const contactData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '555-1234',
  service: 'Pond Installation',
  message: 'This is a test message from the deployment test script.'
};

const estimateData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '555-1234',
  service: 'Pond Installation',
  message: 'Need estimate for new pond installation.'
};

function makeRequest(endpoint, data) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    
    const options = {
      hostname: new URL(BASE_URL).hostname,
      port: 443,
      path: endpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(responseData);
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            data: parsedData
          });
        } catch (error) {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            data: responseData
          });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

async function testAPI() {
  console.log('🧪 Testing API Deployment...\n');
  
  try {
    // Test contact endpoint
    console.log('📧 Testing contact endpoint...');
    const contactResult = await makeRequest('/api/contact', contactData);
    console.log(`Status: ${contactResult.statusCode}`);
    console.log(`Response:`, contactResult.data);
    console.log('');
    
    // Test estimate endpoint
    console.log('💰 Testing estimate endpoint...');
    const estimateResult = await makeRequest('/api/estimate', estimateData);
    console.log(`Status: ${estimateResult.statusCode}`);
    console.log(`Response:`, estimateResult.data);
    console.log('');
    
    // Summary
    if (contactResult.statusCode === 200 && estimateResult.statusCode === 200) {
      console.log('✅ All tests passed! Your API is working correctly.');
    } else {
      console.log('❌ Some tests failed. Check the responses above.');
    }
    
  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
  }
}

// Instructions
console.log('📋 API Deployment Test Script');
console.log('============================');
console.log('');
console.log('Before running this test:');
console.log('1. Update BASE_URL with your actual Vercel domain');
console.log('2. Make sure your environment variables are set in Vercel');
console.log('3. Deploy your code to Vercel');
console.log('');
console.log('To run the test:');
console.log('node test-api-deployment.js');
console.log('');

// Uncomment the line below to run the test
// testAPI();

module.exports = { testAPI, makeRequest };
