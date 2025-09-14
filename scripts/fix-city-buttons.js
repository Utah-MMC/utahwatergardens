#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Service type mappings for each page
const serviceMappings = {
  'PondGalleryPage.js': 'pond-gallery',
  'BeforeAfterPage.js': 'pond-gallery/before-after',
  'WaterFeaturesPage.js': 'pond-gallery/water-features',
  'KoiPondsPage.js': 'pond-gallery/koi-ponds',
  'ResidentialPondsPage.js': 'pond-gallery/residential',
  'CustomerProjectsPage.js': 'pond-gallery/customer-projects',
  'CommercialProjectsPage.js': 'pond-gallery/commercial',
  'PondLinersPage.js': 'pond-supplies/liners',
  'PumpsAerationPage.js': 'pond-supplies/pumps-aeration',
  'FiltrationSystemsPage.js': 'pond-supplies/filtration',
  'EquipmentRepairPage.js': 'pond-services/repair',
  'WaterQualityTestingPage.js': 'pond-services/water-quality',
  'PondDesignBuildPage.js': 'pond-services/design-build',
  'PondSuppliesPage.js': 'pond-supplies'
};

// City data for all counties
const cityData = {
  'Salt Lake County': [
    'Salt Lake City', 'West Jordan', 'Murray', 'Sandy', 
    'West Valley City', 'Draper', 'Cottonwood Heights', 'Holladay'
  ],
  'Davis County': [
    'Layton', 'Bountiful', 'Farmington', 'Centerville', 
    'Kaysville', 'Clearfield', 'Clinton', 'Syracuse'
  ],
  'Utah County': [
    'Provo', 'Orem', 'American Fork', 'Lehi', 
    'Pleasant Grove', 'Spanish Fork', 'Springville', 'Alpine'
  ],
  'Weber County': [
    'Ogden', 'Roy', 'Clearfield', 'South Ogden', 
    'North Ogden', 'Riverdale', 'Washington Terrace', 'Farr West'
  ]
};

// Convert city name to slug
function cityToSlug(cityName) {
  return cityName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// Generate Link components for a county
function generateCityLinks(county, serviceType) {
  const cities = cityData[county];
  return cities.map(city => 
    `                <Link to="/${serviceType}/${cityToSlug(city)}" className="city-link">${city}</Link>`
  ).join('\n');
}

// Fix a single file
function fixCityButtons(filePath, serviceType) {
  console.log(`Fixing ${filePath} with service type: ${serviceType}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix each county
  Object.keys(cityData).forEach(county => {
    const cities = cityData[county];
    
    // Create the old span pattern
    const oldSpans = cities.map(city => `                <span>${city}</span>`).join('\n');
    
    // Create the new Link pattern
    const newLinks = generateCityLinks(county, serviceType);
    
    // Replace the pattern
    const oldPattern = `              <div className="cities-list">\n${oldSpans}\n              </div>`;
    const newPattern = `              <div className="cities-list">\n${newLinks}\n              </div>`;
    
    if (content.includes(oldPattern)) {
      content = content.replace(oldPattern, newPattern);
      console.log(`  ✅ Fixed ${county}`);
    } else {
      console.log(`  ⚠️  Pattern not found for ${county}`);
    }
  });
  
  // Write the updated content
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✅ Updated ${filePath}\n`);
}

// Main execution
function main() {
  const pagesDir = path.join(__dirname, '..', 'frontend', 'src', 'pages');
  
  console.log('🔧 Fixing city buttons across all pages...\n');
  
  Object.entries(serviceMappings).forEach(([fileName, serviceType]) => {
    const filePath = path.join(pagesDir, fileName);
    
    if (fs.existsSync(filePath)) {
      fixCityButtons(filePath, serviceType);
    } else {
      console.log(`❌ File not found: ${filePath}`);
    }
  });
  
  console.log('🎉 All city buttons have been fixed!');
  console.log('\n📋 Summary:');
  console.log('- Converted <span> elements to <Link> components');
  console.log('- Added proper navigation URLs for each service type');
  console.log('- Maintained existing CSS classes for styling');
  console.log('\n✨ City buttons should now be fully functional!');
}

if (require.main === module) {
  main();
}

module.exports = { fixCityButtons, cityToSlug, generateCityLinks };
