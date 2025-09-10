const fs = require('fs');
const path = require('path');

// Function to extract city name from filename
function extractCityFromFilename(filename) {
  // Remove .js extension
  const nameWithoutExt = filename.replace('.js', '');
  
  // Handle different patterns
  if (nameWithoutExt.startsWith('Harvesting')) {
    return nameWithoutExt.replace('Harvesting', '');
  } else if (nameWithoutExt.includes('Page')) {
    return nameWithoutExt.replace('Page', '');
  }
  
  return nameWithoutExt;
}

// Function to create a service area page using the template
function createServiceAreaPage(filename) {
  const cityName = extractCityFromFilename(filename);
  const citySlug = cityName.toLowerCase();
  
  // Determine service type based on filename
  let serviceType = 'pond-cleaning'; // default
  if (filename.startsWith('Harvesting')) {
    serviceType = 'harvesting';
  }
  
  const componentName = cityName + 'Page';
  
  const pageContent = `import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const ${componentName} = () => {
  return (
    <ServiceAreaTemplate
      serviceType="${serviceType}"
      cityName="${cityName}"
      citySlug="${citySlug}"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default ${componentName};`;

  return pageContent;
}

// Function to process remaining service area pages
function updateRemainingServiceAreas() {
  const serviceAreasDir = path.join(__dirname, '../frontend/src/pages/ServiceAreas');
  
  console.log('Updating remaining service area pages...');
  
  // Create backup directory if it doesn't exist
  const backupDir = path.join(serviceAreasDir, 'backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  let processedCount = 0;
  
  // Get all JS files in the directory
  const files = fs.readdirSync(serviceAreasDir);
  const jsFiles = files.filter(file => file.endsWith('.js') && file !== 'ServiceAreaTemplate.js');
  
  jsFiles.forEach(filename => {
    const filePath = path.join(serviceAreasDir, filename);
    
    // Skip if it's already using the template
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('ServiceAreaTemplate')) {
      console.log(`⏭️  Skipping (already updated): ${filename}`);
      return;
    }
    
    // Create backup
    const backupPath = path.join(backupDir, filename);
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }
    
    // Create new page using template
    const newContent = createServiceAreaPage(filename);
    fs.writeFileSync(filePath, newContent);
    
    processedCount++;
    console.log(`✓ Updated: ${filename}`);
  });
  
  console.log(`\n✅ Update complete!`);
  console.log(`📊 Processed: ${processedCount} pages`);
  console.log(`💾 Backups saved to: ${backupDir}`);
}

// Run the update
if (require.main === module) {
  updateRemainingServiceAreas();
}

module.exports = { updateRemainingServiceAreas, createServiceAreaPage };
