const fs = require('fs');
const path = require('path');

// Configuration for service area pages
const serviceTypes = ['pond-cleaning', 'pond-dredging', 'pond-construction', 'harvesting'];

// Cities data - you can expand this list
const cities = [
  'Wanship', 'Wapiti', 'Wells', 'Wellsville', 'Weiser', 'Shelley', 'Wendell', 'Sigurd',
  'Howell', 'Lovell', 'Elmo', 'Gooding', 'Eden', 'JayEm', 'Tooele', 'Bothwell', 'Hiko',
  'Surprise', 'Ucon', 'Willard', 'DeBeque', 'Silt', 'Reno', 'Dubois', 'Marsing', 'Meeteetse',
  'Wilson', 'Alpine', 'AmericanFork', 'Beaver', 'Bluffdale', 'Bountiful', 'CedarCity',
  'CedarHills', 'CedarValley', 'Centerville', 'Clearfield', 'Clinton', 'Coalville',
  'CottonwoodHeights', 'Delta', 'Draper', 'Dugway', 'EagleMountain', 'Enoch', 'Ephraim',
  'Erda', 'Farmington', 'Fillmore', 'Francis', 'Genola', 'Goshen', 'Grantsville'
];

// Function to create a service area page using the template
function createServiceAreaPage(serviceType, cityName) {
  const citySlug = cityName.toLowerCase();
  const componentName = `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}${cityName}Page`;
  
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

// Function to process all service area pages
function consolidateServiceAreas() {
  const serviceAreasDir = path.join(__dirname, '../frontend/src/pages/ServiceAreas');
  
  console.log('Starting service area consolidation...');
  
  // Create backup directory
  const backupDir = path.join(serviceAreasDir, 'backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  let processedCount = 0;
  let deletedCount = 0;
  
  // Process each service type and city combination
  serviceTypes.forEach(serviceType => {
    cities.forEach(cityName => {
      const fileName = `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}${cityName}Page.js`;
      const filePath = path.join(serviceAreasDir, fileName);
      
      if (fs.existsSync(filePath)) {
        // Create backup
        const backupPath = path.join(backupDir, fileName);
        fs.copyFileSync(filePath, backupPath);
        
        // Create new page using template
        const newContent = createServiceAreaPage(serviceType, cityName);
        fs.writeFileSync(filePath, newContent);
        
        processedCount++;
        console.log(`✓ Processed: ${fileName}`);
      }
    });
  });
  
  // Clean up any remaining duplicate files that don't match our pattern
  const files = fs.readdirSync(serviceAreasDir);
  files.forEach(file => {
    if (file.endsWith('.js') && file !== 'ServiceAreaTemplate.js') {
      const filePath = path.join(serviceAreasDir, file);
      const stats = fs.statSync(filePath);
      
      // Check if file is very similar to others (likely a duplicate)
      if (stats.size < 5000) { // Small files are likely duplicates
        const backupPath = path.join(backupDir, file);
        if (!fs.existsSync(backupPath)) {
          fs.copyFileSync(filePath, backupPath);
        }
        fs.unlinkSync(filePath);
        deletedCount++;
        console.log(`🗑️  Deleted duplicate: ${file}`);
      }
    }
  });
  
  console.log(`\n✅ Consolidation complete!`);
  console.log(`📊 Processed: ${processedCount} pages`);
  console.log(`🗑️  Deleted: ${deletedCount} duplicate files`);
  console.log(`💾 Backups saved to: ${backupDir}`);
  console.log(`\n📝 Next steps:`);
  console.log(`1. Update your routing to use the new template`);
  console.log(`2. Test a few pages to ensure they work correctly`);
  console.log(`3. Remove backup files once you're satisfied`);
}

// Run the consolidation
if (require.main === module) {
  consolidateServiceAreas();
}

module.exports = { consolidateServiceAreas, createServiceAreaPage };
