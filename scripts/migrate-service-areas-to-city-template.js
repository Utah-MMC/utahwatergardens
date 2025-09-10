#!/usr/bin/env node

/**
 * Migration Script: Convert all service area pages to use CityPageTemplate
 * This script will:
 * 1. Scan all service area pages
 * 2. Convert them to use CityPageTemplate instead of ServiceAreaTemplate
 * 3. Ensure proper city data integration
 * 4. Maintain all existing functionality
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SERVICE_AREAS_DIR = path.join(__dirname, '../frontend/src/pages/ServiceAreas');
const CITY_DATA_PATH = path.join(__dirname, '../frontend/src/data/cityData.js');
const BACKUP_DIR = path.join(SERVICE_AREAS_DIR, 'backup-migration-' + new Date().toISOString().split('T')[0]);

// Template for CityPageTemplate-based pages
const CITY_PAGE_TEMPLATE = `import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const {COMPONENT_NAME} = () => {
  const cityData = getCityData('{CITY_SLUG}');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default {COMPONENT_NAME};`;

// Service type mappings for better city data integration
const SERVICE_TYPE_MAPPINGS = {
  'harvesting': 'harvesting',
  'pond-cleaning': 'pond-cleaning', 
  'pond-dredging': 'pond-dredging',
  'pond-construction': 'pond-construction'
};

// Function to extract city information from filename
function extractCityInfo(filename) {
  // Remove .js extension
  const nameWithoutExt = filename.replace('.js', '');
  
  // Handle different naming patterns
  let serviceType = 'pond-cleaning'; // default
  let cityName = nameWithoutExt;
  let citySlug = nameWithoutExt.toLowerCase().replace(/\s+/g, '-');
  
  // Check for service type prefixes
  for (const [service, prefix] of Object.entries(SERVICE_TYPE_MAPPINGS)) {
    if (nameWithoutExt.toLowerCase().startsWith(prefix)) {
      serviceType = service;
      cityName = nameWithoutExt.substring(prefix.length);
      citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
      break;
    }
  }
  
  // Handle "Page" suffix (like "BoulderPage")
  if (cityName.endsWith('Page')) {
    cityName = cityName.substring(0, cityName.length - 4);
    citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
  }
  
  return {
    serviceType,
    cityName: cityName.replace(/([A-Z])/g, ' $1').trim(), // Convert CamelCase to "Camel Case"
    citySlug,
    componentName: nameWithoutExt
  };
}

// Function to create backup directory
function createBackupDir() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log(`Created backup directory: ${BACKUP_DIR}`);
  }
}

// Function to backup existing file
function backupFile(filePath) {
  const relativePath = path.relative(SERVICE_AREAS_DIR, filePath);
  const backupPath = path.join(BACKUP_DIR, relativePath);
  const backupDir = path.dirname(backupPath);
  
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  fs.copyFileSync(filePath, backupPath);
  console.log(`Backed up: ${relativePath}`);
}

// Function to check if file already uses CityPageTemplate
function usesCityPageTemplate(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes('CityPageTemplate') && content.includes('getCityData');
  } catch (error) {
    return false;
  }
}

// Function to migrate a single file
function migrateFile(filePath) {
  const filename = path.basename(filePath);
  const cityInfo = extractCityInfo(filename);
  
  console.log(`Migrating: ${filename}`);
  console.log(`  City: ${cityInfo.cityName}`);
  console.log(`  Slug: ${cityInfo.citySlug}`);
  console.log(`  Service: ${cityInfo.serviceType}`);
  
  // Create the new content
  const newContent = CITY_PAGE_TEMPLATE
    .replace(/{COMPONENT_NAME}/g, cityInfo.componentName)
    .replace(/{CITY_SLUG}/g, cityInfo.citySlug);
  
  // Write the new file
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`  ✅ Migrated successfully`);
}

// Function to scan and migrate all files
function migrateAllFiles() {
  console.log('🚀 Starting migration of service area pages to CityPageTemplate...\n');
  
  // Create backup directory
  createBackupDir();
  
  let totalFiles = 0;
  let migratedFiles = 0;
  let skippedFiles = 0;
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
          // Check if already using CityPageTemplate
          if (usesCityPageTemplate(itemPath)) {
            console.log(`⏭️  Skipping (already migrated): ${path.relative(SERVICE_AREAS_DIR, itemPath)}`);
            skippedFiles++;
            continue;
          }
          
          // Backup the original file
          backupFile(itemPath);
          
          // Migrate the file
          migrateFile(itemPath);
          migratedFiles++;
          
        } catch (error) {
          console.error(`❌ Error migrating ${itemPath}:`, error.message);
          errorFiles++;
        }
      }
    }
  }
  
  // Start scanning from the ServiceAreas directory
  scanDirectory(SERVICE_AREAS_DIR);
  
  // Print summary
  console.log('\n📊 Migration Summary:');
  console.log(`  Total files processed: ${totalFiles}`);
  console.log(`  Successfully migrated: ${migratedFiles}`);
  console.log(`  Already migrated (skipped): ${skippedFiles}`);
  console.log(`  Errors: ${errorFiles}`);
  console.log(`  Backup location: ${BACKUP_DIR}`);
  
  if (errorFiles > 0) {
    console.log('\n⚠️  Some files had errors. Check the logs above.');
  } else {
    console.log('\n✅ Migration completed successfully!');
  }
}

// Function to generate routing updates
function generateRoutingUpdates() {
  console.log('\n🔗 Generating routing updates...');
  
  const routingUpdate = `
// Auto-generated routing updates for migrated service area pages
// Generated on: ${new Date().toISOString()}

// Add these routes to your App.js Routes section:

{/* Service Area Routes - Auto-generated */}
{/* Note: These routes should be added before the catch-all route */}

{/* Example routes - you'll need to add all city routes */}
{/* <Route path="/{city-slug}" element={<{ComponentName} />} /> */}

// To add all routes automatically, you can use a script to generate them
// from the cityData.js file using getAllCitySlugs() function.
`;

  const routingPath = path.join(__dirname, 'routing-updates.txt');
  fs.writeFileSync(routingPath, routingUpdate, 'utf8');
  console.log(`Routing updates saved to: ${routingPath}`);
}

// Main execution
if (require.main === module) {
  try {
    migrateAllFiles();
    generateRoutingUpdates();
    
    console.log('\n🎉 Migration process completed!');
    console.log('\nNext steps:');
    console.log('1. Review the migrated files');
    console.log('2. Update App.js routing (see routing-updates.txt)');
    console.log('3. Test the application');
    console.log('4. Remove backup directory if everything works correctly');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

module.exports = {
  migrateAllFiles,
  extractCityInfo,
  usesCityPageTemplate
};
