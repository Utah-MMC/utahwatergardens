#!/usr/bin/env node

/**
 * Migration Script for Utah Water Gardens Service Areas
 * 
 * This script migrates all existing service area pages to use the new template system.
 * It processes 3,919+ pages and creates a centralized cityData.js file.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SERVICE_AREAS_DIR = path.join(__dirname, '../frontend/src/pages/ServiceAreas');
const CITY_DATA_FILE = path.join(__dirname, '../frontend/src/data/cityData.js');
const TEMPLATE_DIR = path.join(__dirname, '../frontend/src/pages/ServiceAreas/TemplateBased');

// City data structure template
const createCityDataTemplate = (cityName, citySlug, state = 'UT') => {
  const normalizedCityName = cityName.replace(/([A-Z])/g, ' $1').trim();
  
  return {
    cityName: normalizedCityName,
    citySlug: citySlug,
    state: state,
    phoneNumber: '(801) 590-8516',
    latitude: '40.7608', // Default to Salt Lake City coordinates
    longitude: '-111.8910',
    landmarks: [
      {
        name: `${normalizedCityName} City Hall`,
        address: `${normalizedCityName}, ${state}`,
        url: `https://www.${citySlug}.gov/`,
      }
    ],
    businessDistricts: [
      {
        name: 'Downtown',
        description: 'Business district with office buildings and commercial properties',
        link: `/pond-services/${citySlug}`,
      }
    ],
    permitInfo: {
      cityName: normalizedCityName,
      phoneNumber: '(801) 555-1234',
      requirements: `Contact ${normalizedCityName} for pond and water feature permit requirements and applications.`,
    },
    contentSections: {
      overview: `Utah Water Gardens provides comprehensive pond and water feature services throughout ${normalizedCityName}, ${state}. Our local expertise in ${normalizedCityName}'s unique climate, water conditions, and seasonal changes ensures your pond thrives year-round. From custom pond design and construction to ongoing maintenance and repair services, we're your trusted partner for all water feature needs in the ${normalizedCityName} area.`,
      residentialServices: [
        'Custom pond design and construction',
        'Koi pond installation and maintenance',
        'Water garden design and planting',
        'Pond cleaning and maintenance',
        'Fish health management',
        'Seasonal pond care',
        'Equipment repair and replacement',
        'Pond renovation and upgrades',
      ],
      commercialServices: [
        'Commercial pond design and installation',
        'Hotel and resort water features',
        'Office building water features',
        'Restaurant and retail water displays',
        'Maintenance contracts for commercial properties',
        'Emergency repair services',
        'Water quality management',
        'Landscaping integration',
      ],
      whyChooseUs: `When you need reliable pond services in ${normalizedCityName}, Utah Water Gardens stands out for our local expertise, quality craftsmanship, and commitment to customer satisfaction. We understand ${normalizedCityName}'s unique climate challenges and design ponds that thrive in all seasons. Our team is licensed, insured, and experienced in working with local regulations and permit requirements.`,
      pondSizes: [
        {
          size: 'Small Garden Pond',
          description: 'Perfect for intimate spaces and small yards',
          useCases: ['Patio water features', 'Small garden ponds', 'Fountain installations', 'Decorative water displays'],
        },
        {
          size: 'Medium Residential Pond',
          description: 'Ideal for most residential properties',
          useCases: ['Backyard ponds', 'Koi ponds', 'Water gardens', 'Family entertainment areas'],
        },
        {
          size: 'Large Estate Pond',
          description: 'Designed for large properties and estates',
          useCases: ['Estate water features', 'Large koi ponds', 'Swimming ponds', 'Commercial installations'],
        },
        {
          size: 'Commercial Water Features',
          description: 'Custom solutions for businesses and public spaces',
          useCases: ['Hotel lobbies', 'Office buildings', 'Restaurants', 'Public spaces'],
        },
      ],
      localInfo: `${normalizedCityName} offers unique opportunities for custom pond designs. The city's diverse neighborhoods and commitment to green spaces make it an ideal location for beautiful water features that enhance property values and provide years of enjoyment.`,
      serviceAreas: `We provide comprehensive pond services throughout ${normalizedCityName} and surrounding areas, ensuring quick response times and local expertise for all your water feature needs.`,
    },
    nearbyAreas: [
      'Salt Lake City', 'West Jordan', 'Sandy', 'Murray', 'West Valley City'
    ],
  };
};

// Extract city name from filename
const extractCityName = (filename) => {
  // Remove .js extension
  let cityName = filename.replace('.js', '');
  
  // Handle special cases
  if (cityName.startsWith('Harvesting')) {
    cityName = cityName.replace('Harvesting', '');
  }
  
  // Convert to slug format
  const citySlug = cityName
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
    .replace(/-+/g, '-');
  
  return {
    originalName: cityName,
    displayName: cityName.replace(/([A-Z])/g, ' $1').trim(),
    slug: citySlug
  };
};

// Determine state based on city name patterns
const determineState = (cityName) => {
  // Utah cities (default)
  if (cityName.includes('Salt') || cityName.includes('Utah') || 
      cityName.includes('Davis') || cityName.includes('Weber') ||
      cityName.includes('Tooele') || cityName.includes('Summit') ||
      cityName.includes('Wasatch') || cityName.includes('Cache') ||
      cityName.includes('Box') || cityName.includes('Rich') ||
      cityName.includes('Morgan') || cityName.includes('Duchesne') ||
      cityName.includes('Uintah') || cityName.includes('Daggett') ||
      cityName.includes('Carbon') || cityName.includes('Emery') ||
      cityName.includes('Grand') || cityName.includes('San') ||
      cityName.includes('Sevier') || cityName.includes('Piute') ||
      cityName.includes('Wayne') || cityName.includes('Garfield') ||
      cityName.includes('Kane') || cityName.includes('Iron') ||
      cityName.includes('Washington') || cityName.includes('Beaver') ||
      cityName.includes('Millard') || cityName.includes('Juab') ||
      cityName.includes('Sanpete') || cityName.includes('Carbon') ||
      cityName.includes('Emery') || cityName.includes('Grand') ||
      cityName.includes('San') || cityName.includes('Sevier') ||
      cityName.includes('Piute') || cityName.includes('Wayne') ||
      cityName.includes('Garfield') || cityName.includes('Kane') ||
      cityName.includes('Iron') || cityName.includes('Washington') ||
      cityName.includes('Beaver') || cityName.includes('Millard') ||
      cityName.includes('Juab') || cityName.includes('Sanpete')) {
    return 'UT';
  }
  
  // Nevada cities
  if (cityName.includes('Las Vegas') || cityName.includes('Henderson') ||
      cityName.includes('Reno') || cityName.includes('Carson') ||
      cityName.includes('Mesquite') || cityName.includes('Boulder') ||
      cityName.includes('North Las Vegas') || cityName.includes('Sparks') ||
      cityName.includes('Fernley') || cityName.includes('Elko') ||
      cityName.includes('Fallon') || cityName.includes('Winnemucca') ||
      cityName.includes('Ely') || cityName.includes('West Wendover')) {
    return 'NV';
  }
  
  // Arizona cities
  if (cityName.includes('Phoenix') || cityName.includes('Tucson') ||
      cityName.includes('Mesa') || cityName.includes('Chandler') ||
      cityName.includes('Scottsdale') || cityName.includes('Glendale') ||
      cityName.includes('Gilbert') || cityName.includes('Tempe') ||
      cityName.includes('Peoria') || cityName.includes('Surprise') ||
      cityName.includes('Yuma') || cityName.includes('Avondale') ||
      cityName.includes('Goodyear') || cityName.includes('Flagstaff') ||
      cityName.includes('Buckeye') || cityName.includes('Lake Havasu') ||
      cityName.includes('Casa Grande') || cityName.includes('Sierra Vista') ||
      cityName.includes('Maricopa') || cityName.includes('Oro Valley') ||
      cityName.includes('Prescott') || cityName.includes('Bullhead') ||
      cityName.includes('Prescott Valley') || cityName.includes('Marana') ||
      cityName.includes('Apache Junction') || cityName.includes('El Mirage') ||
      cityName.includes('Kingman') || cityName.includes('Queen Creek') ||
      cityName.includes('Catalina Foothills') || cityName.includes('San Tan Valley') ||
      cityName.includes('Fountain Hills') || cityName.includes('Nogales') ||
      cityName.includes('Douglas') || cityName.includes('Eloy') ||
      cityName.includes('Sahuarita') || cityName.includes('Somerton') ||
      cityName.includes('Paradise Valley') || cityName.includes('Coolidge') ||
      cityName.includes('Sedona') || cityName.includes('Globe') ||
      cityName.includes('Payson') || cityName.includes('Show Low') ||
      cityName.includes('Safford') || cityName.includes('Bisbee') ||
      cityName.includes('Green Valley') || cityName.includes('Camp Verde') ||
      cityName.includes('Winslow') || cityName.includes('Page') ||
      cityName.includes('Cottonwood') || cityName.includes('Florence') ||
      cityName.includes('Snowflake') || cityName.includes('Eagar') ||
      cityName.includes('Springerville') || cityName.includes('Holbrook') ||
      cityName.includes('Pinetop-Lakeside') || cityName.includes('Taylor') ||
      cityName.includes('St. Johns') || cityName.includes('Safford') ||
      cityName.includes('Bisbee') || cityName.includes('Green Valley') ||
      cityName.includes('Camp Verde') || cityName.includes('Winslow') ||
      cityName.includes('Page') || cityName.includes('Cottonwood') ||
      cityName.includes('Florence') || cityName.includes('Snowflake') ||
      cityName.includes('Eagar') || cityName.includes('Springerville') ||
      cityName.includes('Holbrook') || cityName.includes('Pinetop-Lakeside') ||
      cityName.includes('Taylor') || cityName.includes('St. Johns')) {
    return 'AZ';
  }
  
  // Idaho cities
  if (cityName.includes('Boise') || cityName.includes('Nampa') ||
      cityName.includes('Meridian') || cityName.includes('Idaho Falls') ||
      cityName.includes('Pocatello') || cityName.includes('Caldwell') ||
      cityName.includes('Coeur d\'Alene') || cityName.includes('Twin Falls') ||
      cityName.includes('Lewiston') || cityName.includes('Post Falls') ||
      cityName.includes('Rexburg') || cityName.includes('Eagle') ||
      cityName.includes('Chubbuck') || cityName.includes('Ammon') ||
      cityName.includes('Hayden') || cityName.includes('Mountain Home') ||
      cityName.includes('Kuna') || cityName.includes('Moscow') ||
      cityName.includes('Garden City') || cityName.includes('Blackfoot') ||
      cityName.includes('Jerome') || cityName.includes('Burley') ||
      cityName.includes('Sandpoint') || cityName.includes('Rathdrum') ||
      cityName.includes('Star') || cityName.includes('Emmett') ||
      cityName.includes('Payette') || cityName.includes('Weiser') ||
      cityName.includes('Fruitland') || cityName.includes('Ontario') ||
      cityName.includes('New Plymouth') || cityName.includes('Parma') ||
      cityName.includes('Notus') || cityName.includes('Greenleaf') ||
      cityName.includes('Homedale') || cityName.includes('Marsing') ||
      cityName.includes('Wilder') || cityName.includes('Middleton') ||
      cityName.includes('Eagle') || cityName.includes('Garden City') ||
      cityName.includes('Hidden Springs') || cityName.includes('Harris Ranch') ||
      cityName.includes('Avimor') || cityName.includes('Spring Valley') ||
      cityName.includes('Dry Creek') || cityName.includes('Hidden Springs') ||
      cityName.includes('Harris Ranch') || cityName.includes('Avimor') ||
      cityName.includes('Spring Valley') || cityName.includes('Dry Creek')) {
    return 'ID';
  }
  
  // Colorado cities
  if (cityName.includes('Denver') || cityName.includes('Colorado Springs') ||
      cityName.includes('Aurora') || cityName.includes('Fort Collins') ||
      cityName.includes('Lakewood') || cityName.includes('Thornton') ||
      cityName.includes('Westminster') || cityName.includes('Arvada') ||
      cityName.includes('Pueblo') || cityName.includes('Centennial') ||
      cityName.includes('Boulder') || cityName.includes('Greeley') ||
      cityName.includes('Longmont') || cityName.includes('Loveland') ||
      cityName.includes('Grand Junction') || cityName.includes('Broomfield') ||
      cityName.includes('Northglenn') || cityName.includes('Commerce City') ||
      cityName.includes('Wheat Ridge') || cityName.includes('Lafayette') ||
      cityName.includes('Louisville') || cityName.includes('Superior') ||
      cityName.includes('Erie') || cityName.includes('Frederick') ||
      cityName.includes('Firestone') || cityName.includes('Dacono') ||
      cityName.includes('Mead') || cityName.includes('Niwot') ||
      cityName.includes('Gunbarrel') || cityName.includes('Eldorado Springs') ||
      cityName.includes('Mountain View') || cityName.includes('Glendale') ||
      cityName.includes('Edgewater') || cityName.includes('Golden') ||
      cityName.includes('Wheat Ridge') || cityName.includes('Lakeside') ||
      cityName.includes('Mountain View') || cityName.includes('Glendale') ||
      cityName.includes('Edgewater') || cityName.includes('Golden') ||
      cityName.includes('Wheat Ridge') || cityName.includes('Lakeside')) {
    return 'CO';
  }
  
  // Wyoming cities
  if (cityName.includes('Cheyenne') || cityName.includes('Casper') ||
      cityName.includes('Laramie') || cityName.includes('Gillette') ||
      cityName.includes('Rock Springs') || cityName.includes('Sheridan') ||
      cityName.includes('Green River') || cityName.includes('Evanston') ||
      cityName.includes('Riverton') || cityName.includes('Jackson') ||
      cityName.includes('Cody') || cityName.includes('Rawlins') ||
      cityName.includes('Lander') || cityName.includes('Torrington') ||
      cityName.includes('Powell') || cityName.includes('Douglas') ||
      cityName.includes('Worland') || cityName.includes('Buffalo') ||
      cityName.includes('Kemmerer') || cityName.includes('Newcastle') ||
      cityName.includes('Afton') || cityName.includes('Pinedale') ||
      cityName.includes('Lusk') || cityName.includes('Wheatland') ||
      cityName.includes('Thermopolis') || cityName.includes('Lovell') ||
      cityName.includes('Glenrock') || cityName.includes('Mountain View') ||
      cityName.includes('Basin') || cityName.includes('Saratoga') ||
      cityName.includes('Encampment') || cityName.includes('Baggs') ||
      cityName.includes('Dixon') || cityName.includes('Savery') ||
      cityName.includes('Elk Mountain') || cityName.includes('Medicine Bow') ||
      cityName.includes('Hanna') || cityName.includes('Sinclair') ||
      cityName.includes('Wamsutter') || cityName.includes('Bairoil') ||
      cityName.includes('Jeffrey City') || cityName.includes('Lost Springs') ||
      cityName.includes('Manville') || cityName.includes('Lance Creek') ||
      cityName.includes('Jay Em') || cityName.includes('Keeline') ||
      cityName.includes('Node') || cityName.includes('Van Tassell') ||
      cityName.includes('Hawk Springs') || cityName.includes('Huntley') ||
      cityName.includes('Albin') || cityName.includes('Burns') ||
      cityName.includes('Carpenter') || cityName.includes('Egbert') ||
      cityName.includes('Granite Canon') || cityName.includes('Hillsdale') ||
      cityName.includes('Horse Creek') || cityName.includes('Meriden') ||
      cityName.includes('Pine Bluffs') || cityName.includes('Sunrise') ||
      cityName.includes('Veteran') || cityName.includes('Yoder')) {
    return 'WY';
  }
  
  // Default to Utah
  return 'UT';
};

// Main migration function
const migrateServiceAreas = async () => {
  console.log('🚀 Starting Utah Water Gardens Service Areas Migration...');
  console.log(`📁 Processing directory: ${SERVICE_AREAS_DIR}`);
  
  try {
    // Read all files in the ServiceAreas directory
    const files = fs.readdirSync(SERVICE_AREAS_DIR);
    const jsFiles = files.filter(file => file.endsWith('.js') && !file.includes('TemplateBased'));
    
    console.log(`📊 Found ${jsFiles.length} service area pages to migrate`);
    
    // Create city data object
    const cityData = {};
    const migrationLog = [];
    
    // Process each file
    for (const file of jsFiles) {
      try {
        const cityInfo = extractCityName(file);
        const state = determineState(cityInfo.originalName);
        const citySlug = cityInfo.slug;
        
        // Create city data
        cityData[citySlug] = createCityDataTemplate(cityInfo.displayName, citySlug, state);
        
        migrationLog.push({
          originalFile: file,
          cityName: cityInfo.displayName,
          citySlug: citySlug,
          state: state,
          status: 'processed'
        });
        
        if (migrationLog.length % 100 === 0) {
          console.log(`✅ Processed ${migrationLog.length}/${jsFiles.length} cities...`);
        }
        
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
        migrationLog.push({
          originalFile: file,
          status: 'error',
          error: error.message
        });
      }
    }
    
    // Generate cityData.js file
    console.log('📝 Generating cityData.js file...');
    const cityDataContent = `// City Data Configuration for Utah Water Gardens
// Auto-generated by migration script on ${new Date().toISOString()}
// Total cities: ${Object.keys(cityData).length}

export const cityData = ${JSON.stringify(cityData, null, 2)};

// Function to get city data by slug
export const getCityData = (citySlug) => {
  return cityData[citySlug] || null;
};

// Function to get all city slugs
export const getAllCitySlugs = () => {
  return Object.keys(cityData);
};

// Function to get all cities
export const getAllCities = () => {
  return Object.values(cityData);
};

// Function to search cities by name
export const searchCities = (query) => {
  const searchTerm = query.toLowerCase();
  return Object.values(cityData).filter(city => 
    city.cityName.toLowerCase().includes(searchTerm)
  );
};

// Function to get nearby cities (for related links)
export const getNearbyCities = (citySlug, limit = 8) => {
  const city = cityData[citySlug];
  if (!city || !city.nearbyAreas) return [];
  
  return city.nearbyAreas.slice(0, limit).map(areaName => {
    // Convert area name to slug format
    const slug = areaName.toLowerCase().replace(/\\s+/g, '-');
    return {
      name: areaName,
      slug: slug,
      url: \`/pond-services/\${slug}\`
    };
  });
};
`;

    // Write cityData.js file
    fs.writeFileSync(CITY_DATA_FILE, cityDataContent);
    console.log(`✅ Created cityData.js with ${Object.keys(cityData).length} cities`);
    
    // Create template-based directory
    if (!fs.existsSync(TEMPLATE_DIR)) {
      fs.mkdirSync(TEMPLATE_DIR, { recursive: true });
      console.log('📁 Created TemplateBased directory');
    }
    
    // Generate sample template-based pages
    console.log('📄 Generating sample template-based pages...');
    const sampleCities = Object.keys(cityData).slice(0, 10); // First 10 cities as samples
    
    for (const citySlug of sampleCities) {
      const cityName = cityData[citySlug].cityName;
      const pageContent = `import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const ${cityName.replace(/\s+/g, '')}Page = () => {
  const cityData = getCityData('${citySlug}');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default ${cityName.replace(/\s+/g, '')}Page;
`;

      const pageFileName = `${cityName.replace(/\s+/g, '')}Page.js`;
      fs.writeFileSync(path.join(TEMPLATE_DIR, pageFileName), pageContent);
    }
    
    console.log(`✅ Generated ${sampleCities.length} sample template-based pages`);
    
    // Generate migration report
    const reportContent = `# Utah Water Gardens Service Areas Migration Report

## Migration Summary
- **Date**: ${new Date().toISOString()}
- **Total Files Processed**: ${migrationLog.length}
- **Successful Migrations**: ${migrationLog.filter(log => log.status === 'processed').length}
- **Errors**: ${migrationLog.filter(log => log.status === 'error').length}
- **Cities in cityData.js**: ${Object.keys(cityData).length}

## Next Steps
1. Review the generated cityData.js file
2. Test the sample template-based pages
3. Update App.js routes to use new pages
4. Gradually migrate remaining pages
5. Remove old pages after testing

## Files Generated
- \`frontend/src/data/cityData.js\` - Centralized city data
- \`frontend/src/pages/ServiceAreas/TemplateBased/\` - Sample template-based pages

## Migration Log
${migrationLog.map(log => 
  `- ${log.originalFile}: ${log.status}${log.error ? ` (${log.error})` : ''}`
).join('\n')}
`;

    fs.writeFileSync(path.join(__dirname, 'migration-report.md'), reportContent);
    console.log('📊 Generated migration report: migration-report.md');
    
    console.log('🎉 Migration completed successfully!');
    console.log(`📈 Summary:`);
    console.log(`   - Processed: ${migrationLog.length} files`);
    console.log(`   - Cities: ${Object.keys(cityData).length}`);
    console.log(`   - Sample pages: ${sampleCities.length}`);
    console.log(`   - Report: migration-report.md`);
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
};

// Run migration if called directly
if (require.main === module) {
  migrateServiceAreas();
}

module.exports = { migrateServiceAreas };
