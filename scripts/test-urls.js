#!/usr/bin/env node

/**
 * Test URLs for the Randomization System
 * 
 * This script generates test URLs to verify the dynamic routing works
 */

console.log('🧪 Testing URLs for Randomization System');
console.log('========================================\n');

const testUrls = [
  '/pond-cleaning/salt-lake-city',
  '/pond-dredging/west-jordan',
  '/pond-construction/sandy',
  '/harvesting/provo',
  '/pond-cleaning/ogden',
  '/pond-dredging/boulder',
  '/pond-construction/las-vegas',
  '/harvesting/phoenix'
];

console.log('📋 Test URLs to visit:');
testUrls.forEach((url, index) => {
  console.log(`${index + 1}. http://localhost:3000${url}`);
});

console.log('\n🎯 What to look for:');
console.log('   ✅ Each URL should show different content (not home page)');
console.log('   ✅ Different cities should have different templates');
console.log('   ✅ Each page should have unique titles and content');
console.log('   ✅ No duplicate content between pages');

console.log('\n🔍 Expected Template Distribution:');
console.log('   - Salt Lake City: Professional template');
console.log('   - West Jordan: Technical Expert template');
console.log('   - Sandy: Technical Expert template');
console.log('   - Provo: Community Focused template');
console.log('   - Ogden: Professional template');
console.log('   - Boulder: Technical Expert template');
console.log('   - Las Vegas: Nature Inspired template');
console.log('   - Phoenix: Community Focused template');

console.log('\n🚀 Ready to test! Visit the URLs above to see the randomization in action.');
