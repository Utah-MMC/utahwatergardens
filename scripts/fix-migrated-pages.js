#!/usr/bin/env node

/**
 * Fix all migrated service area pages to remove cityData.js imports
 * This script will update all migrated pages to use a simpler approach
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SERVICE_AREAS_DIR = path.join(__dirname, '../frontend/src/pages/ServiceAreas');

// New template that doesn't use cityData.js
const FIXED_TEMPLATE = `import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';

const {COMPONENT_NAME} = () => {
  // Convert slug to proper city name
  const citySlug = '{CITY_SLUG}';
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Create comprehensive city data object
  const cityData = {
    cityName: cityName,
    citySlug: citySlug,
    state: "Utah",
    phoneNumber: "(801) 590-8516",
    landmarks: [
      {
        name: \`\${cityName} City Hall\`,
        address: \`\${cityName}, UT\`,
        description: "Local government center and municipal services"
      },
      {
        name: \`\${cityName} Public Library\`,
        address: \`\${cityName}, UT\`,
        description: "Community library and meeting space"
      },
      {
        name: \`\${cityName} Community Center\`,
        address: \`\${cityName}, UT\`,
        description: "Local community events and activities"
      }
    ],
    businessDistricts: [
      {
        name: "Downtown District",
        description: "Main business district with office buildings and commercial properties"
      },
      {
        name: "Shopping Center",
        description: "Local shopping and retail area"
      },
      {
        name: "Industrial Area",
        description: "Commercial and industrial properties"
      }
    ],
    contentSections: {
      overview: \`Professional pond services in \${cityName}, Utah. From pond design and construction to maintenance and cleaning, we provide comprehensive water garden solutions for residential and commercial properties throughout the \${cityName} area. Our local expertise in \${cityName}'s unique climate and soil conditions ensures your pond thrives year-round.\`,
      residentialServices: [
        "Custom Pond Design & Construction",
        "Pond Cleaning & Maintenance", 
        "Water Quality Testing & Treatment",
        "Aquatic Plant Installation & Care",
        "Koi & Goldfish Health Management",
        "Seasonal Pond Care & Winterization",
        "Pond Equipment Repair & Installation",
        "Emergency Pond Services"
      ],
      commercialServices: [
        "Commercial Water Feature Design",
        "Corporate Pond Maintenance Contracts",
        "Restaurant & Hotel Water Features",
        "Office Building Water Gardens",
        "Retail Center Pond Services",
        "Public Space Water Features",
        "Maintenance Programs",
        "Emergency Commercial Services"
      ],
      whyChooseUs: \`Utah Water Gardens has been serving \${cityName} and surrounding areas for over 15 years. Our local expertise, professional equipment including the Truxor T50 system, and commitment to quality make us the premier choice for pond services in \${cityName}. We understand the unique challenges of \${cityName}'s climate and provide tailored solutions for your water feature needs.\`,
      localInfo: \`\${cityName} is a beautiful city in Utah with a growing community of water garden enthusiasts. Our local knowledge of \${cityName}'s climate, soil conditions, and seasonal changes allows us to provide the most effective pond care solutions. We're familiar with local regulations and can help with permit requirements for your pond project.\`,
      serviceAreas: \`We proudly serve all areas of \${cityName} and surrounding communities. Our service area includes residential neighborhoods, commercial districts, and local attractions throughout the \${cityName} region. We provide same-day service for emergencies and regular maintenance programs for ongoing pond care.\`
    }
  };

  return <CityPageTemplate {...cityData} />;
};

export default {COMPONENT_NAME};`;

// Function to extract city information from filename
function extractCityInfo(filename) {
  const nameWithoutExt = filename.replace('.js', '');
  
  // Handle different naming patterns
  let serviceType = 'pond-cleaning'; // default
  let cityName = nameWithoutExt;
  let citySlug = nameWithoutExt.toLowerCase().replace(/\s+/g, '-');
  
  // Check for service type prefixes
  const servicePrefixes = ['harvesting', 'pond-cleaning', 'pond-dredging', 'pond-construction', 'pond-repair', 'water-feature-design'];
  
  for (const prefix of servicePrefixes) {
    if (nameWithoutExt.toLowerCase().startsWith(prefix)) {
      serviceType = prefix;
      cityName = nameWithoutExt.substring(prefix.length);
      citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
      break;
    }
  }
  
  // Handle "Page" suffix
  if (cityName.endsWith('Page')) {
    cityName = cityName.substring(0, cityName.length - 4);
    citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
  }
  
  return {
    serviceType,
    cityName: cityName.replace(/([A-Z])/g, ' $1').trim(),
    citySlug,
    componentName: nameWithoutExt
  };
}

// Function to fix a single file
function fixFile(filePath) {
  const filename = path.basename(filePath);
  const cityInfo = extractCityInfo(filename);
  
  console.log(`Fixing: ${filename}`);
  console.log(`  City: ${cityInfo.cityName}`);
  console.log(`  Slug: ${cityInfo.citySlug}`);
  
  // Create the new content
  const newContent = FIXED_TEMPLATE
    .replace(/{COMPONENT_NAME}/g, cityInfo.componentName)
    .replace(/{CITY_SLUG}/g, cityInfo.citySlug);
  
  // Write the new file
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`  ✅ Fixed successfully`);
}

// Function to scan and fix all files
function fixAllFiles() {
  console.log('🔧 Fixing all migrated service area pages...\n');
  
  let totalFiles = 0;
  let fixedFiles = 0;
  let errorFiles = 0;
  
  // Recursively scan all JavaScript files
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Skip backup directories
        if (!item.startsWith('backup') && item !== 'TemplateBased') {
          scanDirectory(itemPath);
        }
      } else if (item.endsWith('.js')) {
        totalFiles++;
        
        try {
          // Check if file imports cityData
          const content = fs.readFileSync(itemPath, 'utf8');
          if (content.includes('getCityData') && content.includes('cityData')) {
            fixFile(itemPath);
            fixedFiles++;
          } else {
            console.log(`⏭️  Skipping (no cityData import): ${path.relative(SERVICE_AREAS_DIR, itemPath)}`);
          }
          
        } catch (error) {
          console.error(`❌ Error fixing ${itemPath}:`, error.message);
          errorFiles++;
        }
      }
    }
  }
  
  // Start scanning from the ServiceAreas directory
  scanDirectory(SERVICE_AREAS_DIR);
  
  // Print summary
  console.log('\n📊 Fix Summary:');
  console.log(`  Total files processed: ${totalFiles}`);
  console.log(`  Successfully fixed: ${fixedFiles}`);
  console.log(`  Errors: ${errorFiles}`);
  
  if (errorFiles > 0) {
    console.log('\n⚠️  Some files had errors. Check the logs above.');
  } else {
    console.log('\n✅ All files fixed successfully!');
  }
}

// Main execution
if (require.main === module) {
  try {
    fixAllFiles();
    
    console.log('\n🎉 Fix process completed!');
    console.log('\nNext steps:');
    console.log('1. Restart your development server');
    console.log('2. Test the city pages');
    console.log('3. The webpack errors should be resolved');
    
  } catch (error) {
    console.error('❌ Fix failed:', error);
    process.exit(1);
  }
}

module.exports = {
  fixAllFiles,
  extractCityInfo
};
