#!/usr/bin/env node

/**
 * Generate routing entries for all city pages
 * This script reads the cityData.js file and generates route entries for App.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CITY_DATA_PATH = path.join(__dirname, '../frontend/src/data/cityData.js');
const OUTPUT_PATH = path.join(__dirname, 'generated-city-routes.js');

// Function to extract city data from the large cityData.js file
function extractCityData() {
  console.log('📖 Reading city data...');
  
  try {
    // Read the cityData.js file
    const content = fs.readFileSync(CITY_DATA_PATH, 'utf8');
    
    // Extract the cityData object (this is a simplified approach)
    // In a real scenario, you might want to use a proper JavaScript parser
    const cityDataMatch = content.match(/export const cityData = \{([\s\S]*?)\};/);
    
    if (!cityDataMatch) {
      throw new Error('Could not find cityData object in file');
    }
    
    // Extract city slugs from the content
    const citySlugMatches = content.match(/"([^"]+)":\s*\{/g);
    
    if (!citySlugMatches) {
      throw new Error('Could not find city slugs in file');
    }
    
    const citySlugs = citySlugMatches.map(match => {
      return match.replace(/"/g, '').replace(':', '').replace('{', '').trim();
    });
    
    console.log(`Found ${citySlugs.length} cities`);
    return citySlugs;
    
  } catch (error) {
    console.error('Error reading city data:', error.message);
    return [];
  }
}

// Function to convert city slug to component name
function slugToComponentName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
}

// Function to generate route entries
function generateRoutes(citySlugs) {
  console.log('🔗 Generating route entries...');
  
  const routes = citySlugs.map(slug => {
    const componentName = slugToComponentName(slug);
    return `            <Route path="/${slug}" element={<${componentName} />} />`;
  });
  
  return routes.join('\n');
}

// Function to generate import statements
function generateImports(citySlugs) {
  console.log('📦 Generating import statements...');
  
  const imports = citySlugs.map(slug => {
    const componentName = slugToComponentName(slug);
    return `const ${componentName} = lazy(() => import('./pages/ServiceAreas/${componentName}'));`;
  });
  
  return imports.join('\n');
}

// Function to generate the complete routing file
function generateRoutingFile() {
  console.log('🚀 Generating city routes...\n');
  
  const citySlugs = extractCityData();
  
  if (citySlugs.length === 0) {
    console.error('❌ No city data found. Cannot generate routes.');
    return;
  }
  
  const imports = generateImports(citySlugs);
  const routes = generateRoutes(citySlugs);
  
  const routingContent = `// Auto-generated city routes
// Generated on: ${new Date().toISOString()}
// Total cities: ${citySlugs.length}

// Add these imports to your App.js imports section:
${imports}

// Add these routes to your App.js Routes section (before the catch-all route):
${routes}

// Note: Make sure to add these routes before the catch-all route:
// <Route path="*" element={<HomePage />} />
`;

  // Write the routing file
  fs.writeFileSync(OUTPUT_PATH, routingContent, 'utf8');
  
  console.log(`✅ Generated routing file: ${OUTPUT_PATH}`);
  console.log(`📊 Total routes generated: ${citySlugs.length}`);
  
  // Also create a summary file
  const summaryPath = path.join(__dirname, 'city-routes-summary.txt');
  const summaryContent = `City Routes Generation Summary
Generated on: ${new Date().toISOString()}
Total cities: ${citySlugs.length}

First 10 cities:
${citySlugs.slice(0, 10).map(slug => `- ${slug}`).join('\n')}

Last 10 cities:
${citySlugs.slice(-10).map(slug => `- ${slug}`).join('\n')}

All cities are now ready for routing in App.js
`;

  fs.writeFileSync(summaryPath, summaryContent, 'utf8');
  console.log(`📋 Summary saved to: ${summaryPath}`);
}

// Function to create a more manageable routing approach
function generateDynamicRouting() {
  console.log('\n🔄 Generating dynamic routing approach...');
  
  const dynamicRoutingContent = `// Alternative: Dynamic routing approach
// This approach uses a single dynamic route instead of thousands of individual routes

// In App.js, replace all individual city routes with:
<Route path="/:citySlug" element={<CityPage />} />

// Create a new CityPage component that handles all cities dynamically:
import React from 'react';
import { useParams } from 'react-router-dom';
import CityPageTemplate from './components/CityPageTemplate';
import { getCityData } from './data/cityData';

const CityPage = () => {
  const { citySlug } = useParams();
  const cityData = getCityData(citySlug);
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default CityPage;

// This approach is more maintainable and doesn't require thousands of route entries
`;

  const dynamicPath = path.join(__dirname, 'dynamic-routing-approach.js');
  fs.writeFileSync(dynamicPath, dynamicRoutingContent, 'utf8');
  console.log(`🔄 Dynamic routing approach saved to: ${dynamicPath}`);
}

// Main execution
if (require.main === module) {
  try {
    generateRoutingFile();
    generateDynamicRouting();
    
    console.log('\n🎉 Route generation completed!');
    console.log('\nChoose your approach:');
    console.log('1. Individual routes (see generated-city-routes.js)');
    console.log('2. Dynamic routing (see dynamic-routing-approach.js) - RECOMMENDED');
    console.log('\nThe dynamic approach is recommended for better performance and maintainability.');
    
  } catch (error) {
    console.error('❌ Route generation failed:', error);
    process.exit(1);
  }
}

module.exports = {
  generateRoutingFile,
  generateDynamicRouting,
  extractCityData
};
