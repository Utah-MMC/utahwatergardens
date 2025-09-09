#!/usr/bin/env node

/**
 * Route Update Script for Utah Water Gardens
 * 
 * This script updates App.js to use the new template-based service area pages.
 * It generates routes for all cities in the cityData.js file.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const APP_JS_FILE = path.join(__dirname, '../frontend/src/App.js');
const CITY_DATA_FILE = path.join(__dirname, '../frontend/src/data/cityData.js');

// Generate route imports
const generateRouteImports = (cityData) => {
  const imports = [];
  const routes = [];
  
  // Group cities by first letter for better organization
  const groupedCities = {};
  
  Object.keys(cityData).forEach(citySlug => {
    const cityName = cityData[citySlug].cityName;
    const firstLetter = cityName.charAt(0).toUpperCase();
    
    if (!groupedCities[firstLetter]) {
      groupedCities[firstLetter] = [];
    }
    
    groupedCities[firstLetter].push({
      slug: citySlug,
      name: cityName,
      componentName: cityName.replace(/\s+/g, '') + 'Page'
    });
  });
  
  // Generate imports and routes
  Object.keys(groupedCities).sort().forEach(letter => {
    const cities = groupedCities[letter];
    
    // Add comment
    imports.push(`// ${letter} Cities`);
    
    cities.forEach(city => {
      const importPath = `./pages/ServiceAreas/TemplateBased/${city.componentName}`;
      imports.push(`const ${city.componentName} = lazy(() => import('${importPath}'));`);
      routes.push(`            <Route path="/pond-services/${city.slug}" element={<${city.componentName} />} />`);
    });
    
    imports.push(''); // Empty line for readability
  });
  
  return { imports, routes };
};

// Update App.js file
const updateAppJs = async () => {
  console.log('🔄 Updating App.js routes...');
  
  try {
    // Read current App.js
    const appJsContent = fs.readFileSync(APP_JS_FILE, 'utf8');
    
    // Read city data
    const cityDataContent = fs.readFileSync(CITY_DATA_FILE, 'utf8');
    
    // Extract city data (simple regex approach)
    const cityDataMatch = cityDataContent.match(/export const cityData = ({[\s\S]*?});/);
    if (!cityDataMatch) {
      throw new Error('Could not extract city data from cityData.js');
    }
    
    const cityData = eval(`(${cityDataMatch[1]})`);
    console.log(`📊 Found ${Object.keys(cityData).length} cities in cityData.js`);
    
    // Generate new imports and routes
    const { imports, routes } = generateRouteImports(cityData);
    
    // Find the section to replace
    const importStartMarker = '// Lazy load service area pages';
    const importEndMarker = '// Lazy load other pages';
    const routeStartMarker = '            {/* Service Area Routes */}';
    const routeEndMarker = '            {/* Other Routes */}';
    
    // Split content
    const importStartIndex = appJsContent.indexOf(importStartMarker);
    const importEndIndex = appJsContent.indexOf(importEndMarker);
    const routeStartIndex = appJsContent.indexOf(routeStartMarker);
    const routeEndIndex = appJsContent.indexOf(routeEndMarker);
    
    if (importStartIndex === -1 || importEndIndex === -1 || 
        routeStartIndex === -1 || routeEndIndex === -1) {
      throw new Error('Could not find markers in App.js');
    }
    
    // Build new content
    const beforeImports = appJsContent.substring(0, importStartIndex);
    const afterImports = appJsContent.substring(importEndIndex);
    const beforeRoutes = appJsContent.substring(0, routeStartIndex);
    const afterRoutes = appJsContent.substring(routeEndIndex);
    
    const newImports = [
      importStartMarker,
      ...imports,
      importEndMarker
    ].join('\n');
    
    const newRoutes = [
      routeStartMarker,
      ...routes,
      routeEndMarker
    ].join('\n');
    
    const newAppJsContent = beforeImports + newImports + afterImports.substring(importEndMarker.length);
    const finalAppJsContent = beforeRoutes + newRoutes + afterRoutes.substring(routeEndMarker.length);
    
    // Write updated App.js
    fs.writeFileSync(APP_JS_FILE, finalAppJsContent);
    
    console.log('✅ Updated App.js with new routes');
    console.log(`📈 Added ${routes.length} service area routes`);
    
    // Generate route summary
    const routeSummary = `# Route Update Summary

## Updated Routes
- **Total Routes**: ${routes.length}
- **Cities**: ${Object.keys(cityData).length}
- **Date**: ${new Date().toISOString()}

## Route Pattern
All routes follow the pattern: \`/pond-services/{city-slug}\`

## Sample Routes
${routes.slice(0, 10).join('\n')}
${routes.length > 10 ? `\n... and ${routes.length - 10} more routes` : ''}
`;

    fs.writeFileSync(path.join(__dirname, 'route-update-summary.md'), routeSummary);
    console.log('📊 Generated route update summary');
    
  } catch (error) {
    console.error('❌ Route update failed:', error);
    process.exit(1);
  }
};

// Run update if called directly
if (require.main === module) {
  updateAppJs();
}

module.exports = { updateAppJs };
