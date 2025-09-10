// Test script for the Extended Service API endpoint
const testData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(801) 555-0123",
  address: "123 Main Street",
  city: "Park City",
  state: "UT",
  zipCode: "84060",
  distance: "35",
  projectType: "Residential Pond",
  timeline: "Within 3 months",
  budget: "$10,000 - $25,000",
  projectDescription: "I want to build a beautiful koi pond in my backyard with a waterfall feature. The area is about 20x15 feet and I'd like it to be about 3 feet deep.",
  additionalInfo: "I have a dog, so safety features are important. Also, I'm interested in adding some aquatic plants."
};

async function testExtendedServiceAPI() {
  console.log('🧪 Testing Extended Service API...\n');
  
  try {
    const response = await fetch('http://localhost:3001/api/extended-service', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    console.log('📊 Response Status:', response.status);
    console.log('📋 Response Body:', JSON.stringify(result, null, 2));
    
    if (result.success) {
      console.log('✅ Test PASSED - Form submission successful!');
      console.log('📧 Check your email (jeremyuwg@gmail.com) for the notification');
      console.log('📧 Check the customer email (john.doe@example.com) for the confirmation');
    } else {
      console.log('❌ Test FAILED - Form submission failed');
      console.log('🔍 Error:', result.message);
    }
    
  } catch (error) {
    console.log('❌ Test FAILED - Network or server error');
    console.log('🔍 Error:', error.message);
    console.log('\n💡 Make sure:');
    console.log('   1. The development server is running (npm run dev or vercel dev)');
    console.log('   2. The API endpoint is accessible at /api/extended-service');
    console.log('   3. Environment variables are set correctly');
  }
}

// Run the test
testExtendedServiceAPI();
