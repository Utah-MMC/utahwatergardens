const fs = require('fs');
const path = require('path');

// Internal links configuration
const internalLinks = {
  contact: { url: '/contact', anchor: 'utah water gardens' },
  plantsFish: { url: '/plants-fish', anchor: 'utah water gardens' },
  pondSupplies: { url: '/pondsupplies', anchor: 'utah water gardens' },
  aquaticPlants: { url: '/aquatic-plants', anchor: 'utah water gardens' },
  fishKoi: { url: '/fish-koi', anchor: 'utah water gardens' },
  homepage: { url: '/', anchor: 'utah water gardens' }
};

// Function to add internal links to a service area page
function addInternalLinksToServiceAreaPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if internal links already exist
    if (content.includes('Internal Links for SEO') || content.includes('display: \'none\'')) {
      return false; // Skip files that already have internal links
    }

    let newContent = content;
    
    // Look for the export statement with a more flexible regex
    const exportMatch = content.match(/(\s*)(export default [^;]+;?\s*)$/m);
    if (exportMatch) {
      const exportStatement = exportMatch[0];
      const indentation = exportMatch[1];
      
      // Create internal links component
      const internalLinksComponent = `
${indentation}// Internal Links for SEO
${indentation}const InternalLinks = () => (
${indentation}  <div style={{ display: 'none' }}>
${indentation}    <Link to="${internalLinks.contact.url}">${internalLinks.contact.anchor}</Link>
${indentation}    <Link to="${internalLinks.plantsFish.url}">${internalLinks.plantsFish.anchor}</Link>
${indentation}    <Link to="${internalLinks.pondSupplies.url}">${internalLinks.pondSupplies.anchor}</Link>
${indentation}    <Link to="${internalLinks.aquaticPlants.url}">${internalLinks.aquaticPlants.anchor}</Link>
${indentation}    <Link to="${internalLinks.fishKoi.url}">${internalLinks.fishKoi.anchor}</Link>
${indentation}    <Link to="${internalLinks.homepage.url}">${internalLinks.homepage.anchor}</Link>
${indentation}  </div>
${indentation});

${exportStatement}`;
      
      newContent = content.replace(exportMatch[0], internalLinksComponent);
    } else {
      return false; // Skip files without proper export statements
    }

    // Check if Link is imported, if not add it
    if (!content.includes("import { Link } from 'react-router-dom'") && !content.includes("import { Link }")) {
      // Find the first import statement and add Link import
      const importMatch = content.match(/^(import .+ from .+;?\s*)$/m);
      if (importMatch) {
        const firstImport = importMatch[0];
        newContent = newContent.replace(firstImport, `${firstImport}\nimport { Link } from 'react-router-dom';`);
      }
    }

    // Write the updated content back to the file
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  } catch (error) {
    return false; // Skip files with errors
  }
}

// Function to get all service area pages recursively
function getAllServiceAreaPages() {
  const serviceAreasDir = 'frontend/src/pages/ServiceAreas';
  const pages = [];
  
  try {
    function scanDirectory(dir) {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.includes('backup')) {
          // Recursively scan subdirectories
          scanDirectory(filePath);
        } else if (file.endsWith('.js') && !file.includes('backup')) {
          pages.push(filePath);
        }
      });
    }
    
    scanDirectory(serviceAreasDir);
    return pages;
  } catch (error) {
    console.error('Error reading service areas directory:', error.message);
    return [];
  }
}

// Main execution
function main() {
  console.log('🚀 Starting COMPLETE internal links implementation for ALL service area pages...\n');
  
  const serviceAreaPages = getAllServiceAreaPages();
  console.log(`📊 Found ${serviceAreaPages.length} total service area pages to process\n`);
  
  let successCount = 0;
  let skippedCount = 0;
  let totalCount = serviceAreaPages.length;

  // Process service area pages
  serviceAreaPages.forEach((filePath, index) => {
    if (index % 500 === 0) {
      console.log(`Processing file ${index + 1} of ${totalCount}...`);
    }
    
    const result = addInternalLinksToServiceAreaPage(filePath);
    if (result === true) {
      successCount++;
    } else {
      skippedCount++;
    }
  });

  console.log(`\n🎉 COMPLETE service area internal links implementation finished!`);
  console.log(`✅ Successfully updated: ${successCount} files`);
  console.log(`⏭️  Skipped (already have links): ${skippedCount} files`);
  console.log(`📊 Total files processed: ${totalCount}`);
  console.log(`🎯 Success rate: ${((successCount / totalCount) * 100).toFixed(1)}%`);
}

// Run the script
main();
