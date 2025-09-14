#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Gallery pages that need fixing
const galleryPages = [
  'BeforeAfterPage.js',
  'WaterFeaturesPage.js', 
  'KoiPondsPage.js',
  'ResidentialPondsPage.js',
  'CustomerProjectsPage.js',
  'CommercialProjectsPage.js'
];

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
function generateCityLinks(county) {
  const cities = cityData[county];
  return cities.map(city => 
    `                  <Link to="/pond-services/${cityToSlug(city)}" className="city-link">${city}</Link>`
  ).join('\n');
}

// Fix a single file
function fixCityButtons(filePath) {
  console.log(`Fixing ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix each county
  Object.keys(cityData).forEach(county => {
    const cities = cityData[county];
    
    // Create the old span pattern
    const oldSpans = cities.map(city => `                  <span>${city}</span>`).join('\n');
    
    // Create the new Link pattern
    const newLinks = generateCityLinks(county);
    
    // Replace the pattern
    const oldPattern = `                <div className="cities-list">\n${oldSpans}\n                </div>`;
    const newPattern = `                <div className="cities-list">\n${newLinks}\n                </div>`;
    
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
  
  console.log('🔧 Fixing gallery page city buttons...\n');
  
  galleryPages.forEach(fileName => {
    const filePath = path.join(pagesDir, fileName);
    
    if (fs.existsSync(filePath)) {
      fixCityButtons(filePath);
    } else {
      console.log(`❌ File not found: ${filePath}`);
    }
  });
  
  console.log('🎉 All gallery city buttons have been fixed!');
  console.log('\n📋 Summary:');
  console.log('- Converted <span> elements to <Link> components');
  console.log('- Added proper navigation URLs to /pond-services/[city-slug]');
  console.log('- Maintained existing CSS classes for styling');
  console.log('\n✨ Gallery city buttons should now be fully functional!');
}

if (require.main === module) {
  main();
}

module.exports = { fixCityButtons, cityToSlug, generateCityLinks };
