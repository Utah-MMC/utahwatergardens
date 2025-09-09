#!/usr/bin/env node

/**
 * Test Template System Script
 * 
 * This script tests the template system by creating a few sample pages
 * and verifying they work correctly.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CITY_DATA_FILE = path.join(__dirname, '../frontend/src/data/cityData.js');
const TEMPLATE_DIR = path.join(__dirname, '../frontend/src/pages/ServiceAreas/TemplateBased');

// Test cities
const testCities = [
  'salt-lake-city',
  'west-jordan', 
  'sandy',
  'murray',
  'provo'
];

console.log('🧪 Testing Template System...');

try {
  // Read city data
  const cityDataContent = fs.readFileSync(CITY_DATA_FILE, 'utf8');
  const cityDataMatch = cityDataContent.match(/export const cityData = ({[\s\S]*?});/);
  const cityData = eval(`(${cityDataMatch[1]})`);
  
  console.log(`📊 Found ${Object.keys(cityData).length} cities in cityData.js`);
  
  // Test each city
  for (const citySlug of testCities) {
    if (cityData[citySlug]) {
      const city = cityData[citySlug];
      console.log(`✅ ${city.cityName} (${citySlug}) - ${city.state}`);
      
      // Verify required fields
      const requiredFields = ['cityName', 'citySlug', 'state', 'contentSections'];
      const missingFields = requiredFields.filter(field => !city[field]);
      
      if (missingFields.length > 0) {
        console.log(`   ⚠️  Missing fields: ${missingFields.join(', ')}`);
      } else {
        console.log(`   ✅ All required fields present`);
      }
      
      // Check content sections
      const contentSections = city.contentSections;
      const requiredSections = ['overview', 'residentialServices', 'commercialServices', 'whyChooseUs'];
      const missingSections = requiredSections.filter(section => !contentSections[section]);
      
      if (missingSections.length > 0) {
        console.log(`   ⚠️  Missing content sections: ${missingSections.join(', ')}`);
      } else {
        console.log(`   ✅ All content sections present`);
      }
      
    } else {
      console.log(`❌ ${citySlug} not found in cityData`);
    }
  }
  
  // Check if template-based pages exist
  console.log('\n📁 Checking template-based pages...');
  if (fs.existsSync(TEMPLATE_DIR)) {
    const templateFiles = fs.readdirSync(TEMPLATE_DIR);
    console.log(`✅ Found ${templateFiles.length} template-based pages`);
    
    // Check a few sample files
    const sampleFiles = templateFiles.slice(0, 3);
    for (const file of sampleFiles) {
      const filePath = path.join(TEMPLATE_DIR, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes('CityPageTemplate') && content.includes('getCityData')) {
        console.log(`   ✅ ${file} - Template structure correct`);
      } else {
        console.log(`   ❌ ${file} - Template structure incorrect`);
      }
    }
  } else {
    console.log('❌ TemplateBased directory not found');
  }
  
  // Check cityData.js structure
  console.log('\n📊 Checking cityData.js structure...');
  const cityDataKeys = Object.keys(cityData);
  const sampleCity = cityData[cityDataKeys[0]];
  
  console.log(`✅ Sample city: ${sampleCity.cityName}`);
  console.log(`✅ City slug: ${sampleCity.citySlug}`);
  console.log(`✅ State: ${sampleCity.state}`);
  console.log(`✅ Phone: ${sampleCity.phoneNumber}`);
  console.log(`✅ Content sections: ${Object.keys(sampleCity.contentSections).length}`);
  
  // Check for duplicate slugs
  const slugs = Object.keys(cityData);
  const uniqueSlugs = new Set(slugs);
  if (slugs.length === uniqueSlugs.size) {
    console.log('✅ No duplicate city slugs found');
  } else {
    console.log(`❌ Found ${slugs.length - uniqueSlugs.size} duplicate slugs`);
  }
  
  console.log('\n🎉 Template system test completed!');
  console.log('📋 Summary:');
  console.log(`   - Cities in cityData.js: ${Object.keys(cityData).length}`);
  console.log(`   - Test cities verified: ${testCities.length}`);
  console.log(`   - Template-based pages: ${fs.existsSync(TEMPLATE_DIR) ? fs.readdirSync(TEMPLATE_DIR).length : 0}`);
  
} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}
