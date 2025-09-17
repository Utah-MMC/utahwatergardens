#!/usr/bin/env node

/**
 * Script to fix duplicate page titles across all pages
 * This addresses the Bing Webmaster Tools issue: "Too many pages with identical titles"
 */

const fs = require('fs');
const path = require('path');

// Common duplicate titles that need to be fixed
const DUPLICATE_TITLES = {
  "Pond Services Near Salt Lake City, UT | Utah Water Gardens | Utah Water Gardens": "city-page",
  "Utah Water Gardens - Complete Pond & Water Feature Solutions": "services",
  "Pond Services - Professional Pond Care & Maintenance | Utah Water Gardens | Utah Water Gardens": "pond-services",
  "Aquatic Plants: The Benefits and Uses. | Utah Water Gardens": "aquatic-plants",
  "Pond Services | Utah Water Gardens": "pond-services",
  "Plants & Fish | Utah Water Gardens": "plants-fish",
  "Pond Construction | Utah Water Gardens": "pond-construction",
  "Contact Utah Water Gardens | Utah Water Gardens": "contact",
  "Pond Gallery | Utah Water Gardens": "pond-gallery",
  "Filters To Clean Your Pond | Utah Water Gardens": "pond-filters",
  "Pond Consultations | Utah Water Gardens": "pond-consultations",
  "Schedule a Pond Service | Utah Water Gardens": "schedule",
  "The Importance of Pond Pumps | Utah Water Gardens": "pumps",
  "Resources | Utah Water Gardens": "resources",
  "Company Resources | Utah Water Gardens": "company-resources",
  "Dredging a Pond in Utah | Utah Water Gardens": "dredging",
  "Pond Supplies | Utah Water Gardens": "pond-supplies",
  "Pond Maintenance | Utah Water Gardens": "pond-maintenance",
  "Finding A Leak In Your Pond | Utah Water Gardens": "finding-a-leak-in-your-pond",
  "Pond Cleanings: The Key to a Healthy and Vibrant Water Feature | Utah Water Gardens": "pond-cleanings"
};

// Service-specific titles
const SERVICE_TITLES = {
  'pond-construction': 'Pond Construction & Design Services in Utah | Utah Water Gardens',
  'pond-maintenance': 'Pond Maintenance & Care Services in Utah | Utah Water Gardens',
  'pond-cleaning': 'Professional Pond Cleaning Services in Utah | Utah Water Gardens',
  'pond-repair': 'Pond Repair & Restoration Services in Utah | Utah Water Gardens',
  'aquatic-plants': 'Aquatic Plants for Utah Ponds | Water Lilies & Pond Plants | Utah Water Gardens',
  'koi-fish': 'Koi & Goldfish for Utah Ponds | Pond Fish Selection | Utah Water Gardens',
  'pond-supplies': 'Pond Supplies & Equipment in Utah | Pumps, Filters & Accessories | Utah Water Gardens',
  'pond-filters': 'Pond Filtration Systems in Utah | Professional Pond Filters | Utah Water Gardens',
  'pond-pumps': 'Pond Pumps & Aeration Systems in Utah | Energy Efficient Pumps | Utah Water Gardens',
  'pond-liners': 'Pond Liners & Underlayment in Utah | EPDM & PVC Liners | Utah Water Gardens',
  'water-treatments': 'Pond Water Treatments in Utah | Algae Control & Water Quality | Utah Water Gardens',
  'pond-lighting': 'Pond Lighting Systems in Utah | LED Pond Lights | Utah Water Gardens',
  'pond-consultations': 'Pond Consultations in Utah | Expert Pond Advice | Utah Water Gardens',
  'pond-gallery': 'Pond Gallery | Beautiful Water Features in Utah | Utah Water Gardens',
  'dredging': 'Pond Dredging Services in Utah | Professional Pond Restoration | Utah Water Gardens',
  'harvesting': 'Pond Harvesting Services in Utah | Fish & Plant Management | Utah Water Gardens',
  'plants-fish': 'Plants & Fish for Utah Ponds | Aquatic Plants & Koi | Utah Water Gardens',
  'pond-services': 'Pond Services in Utah | Professional Pond Care & Maintenance | Utah Water Gardens',
  'contact': 'Contact Utah Water Gardens | Expert Pond Consultation & Store Visit',
  'schedule': 'Schedule Pond Services | Professional Service Booking | Utah Water Gardens',
  'pumps': 'Pond Pumps & Aeration Systems in Utah | Energy Efficient Pumps | Utah Water Gardens',
  'resources': 'Pond Care Resources & Guides | Expert Advice | Utah Water Gardens',
  'company-resources': 'Company Resources | Utah Water Gardens Partners & Services',
  'pond-cleanings': 'Pond Cleanings | Professional Pond Cleaning Services in Utah | Utah Water Gardens',
  'finding-a-leak-in-your-pond': 'Finding a Leak in Your Pond | Expert Troubleshooting Guide | Utah Water Gardens'
};

// Function to update a file with new title
function updateFileTitle(filePath, newTitle) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Look for existing title patterns
    const titlePatterns = [
      /title\s*=\s*["']([^"']+)["']/g,
      /title:\s*["']([^"']+)["']/g,
      /<title>([^<]+)<\/title>/g
    ];
    
    let updated = false;
    
    titlePatterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, (match, oldTitle) => {
          if (DUPLICATE_TITLES[oldTitle]) {
            updated = true;
            return match.replace(oldTitle, newTitle);
          }
          return match;
        });
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

// Function to determine page type from file path
function getPageTypeFromPath(filePath) {
  const fileName = path.basename(filePath, '.js');
  
  // Service pages
  if (fileName.includes('pond-construction') || fileName.includes('PondDesignBuild')) return 'pond-construction';
  if (fileName.includes('pond-maintenance') || fileName.includes('PondMaintenance')) return 'pond-maintenance';
  if (fileName.includes('pond-cleaning') || fileName.includes('PondCleaning')) return 'pond-cleaning';
  if (fileName.includes('pond-repair') || fileName.includes('EquipmentRepair')) return 'pond-repair';
  if (fileName.includes('aquatic-plants') || fileName.includes('AquaticPlants')) return 'aquatic-plants';
  if (fileName.includes('koi') || fileName.includes('Koi') || fileName.includes('fish')) return 'koi-fish';
  if (fileName.includes('pond-supplies') || fileName.includes('PondSupplies')) return 'pond-supplies';
  if (fileName.includes('pond-filters') || fileName.includes('FiltrationSystems')) return 'pond-filters';
  if (fileName.includes('pond-pumps') || fileName.includes('PumpsAeration')) return 'pond-pumps';
  if (fileName.includes('pond-liners') || fileName.includes('PondLiners')) return 'pond-liners';
  if (fileName.includes('water-treatments') || fileName.includes('WaterTreatments')) return 'water-treatments';
  if (fileName.includes('pond-lighting') || fileName.includes('PondLighting')) return 'pond-lighting';
  if (fileName.includes('pond-consultations') || fileName.includes('FreeEstimate')) return 'pond-consultations';
  if (fileName.includes('pond-gallery') || fileName.includes('PondGallery')) return 'pond-gallery';
  if (fileName.includes('dredging') || fileName.includes('Dredging')) return 'dredging';
  if (fileName.includes('harvesting') || fileName.includes('Harvesting')) return 'harvesting';
  if (fileName.includes('plants-fish') || fileName.includes('PlantsFish')) return 'plants-fish';
  if (fileName.includes('pond-services') || fileName.includes('PondServices')) return 'pond-services';
  if (fileName.includes('pond-cleanings') || fileName.includes('PondCleanings')) return 'pond-cleanings';
  if (fileName.includes('finding-a-leak') || fileName.includes('FindingLeak')) return 'finding-a-leak-in-your-pond';
  
  // Other pages
  if (fileName.includes('contact') || fileName.includes('Contact')) return 'contact';
  if (fileName.includes('about') || fileName.includes('About')) return 'about';
  if (fileName.includes('resources') || fileName.includes('Resources')) return 'resources';
  if (fileName.includes('schedule') || fileName.includes('Schedule')) return 'schedule';
  if (fileName.includes('services') || fileName.includes('Services')) return 'services';
  if (fileName.includes('shop') || fileName.includes('Shop')) return 'shop';
  if (fileName.includes('blog') || fileName.includes('Blog')) return 'blog';
  if (fileName.includes('company-resources') || fileName.includes('CompanyResources')) return 'company-resources';
  
  return null;
}

// Main function to fix all pages
function fixAllDuplicateTitles() {
  const pagesDir = path.join(__dirname, '../src/pages');
  const serviceAreasDir = path.join(pagesDir, 'ServiceAreas');
  
  let totalUpdated = 0;
  let totalSkipped = 0;
  
  console.log('🔍 Scanning for pages with duplicate titles...\n');
  
  // Fix main pages
  const mainPages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.js') && !file.includes('.backup'));
  
  mainPages.forEach(file => {
    const filePath = path.join(pagesDir, file);
    const pageType = getPageTypeFromPath(filePath);
    
    if (pageType && SERVICE_TITLES[pageType]) {
      const newTitle = SERVICE_TITLES[pageType];
      if (updateFileTitle(filePath, newTitle)) {
        totalUpdated++;
      } else {
        totalSkipped++;
      }
    } else {
      totalSkipped++;
    }
  });
  
  // Fix service area pages (city pages)
  if (fs.existsSync(serviceAreasDir)) {
    const cityPages = fs.readdirSync(serviceAreasDir).filter(file => file.endsWith('.js'));
    
    cityPages.forEach(file => {
      const filePath = path.join(serviceAreasDir, file);
      const cityName = file.replace('Page.js', '').replace(/([A-Z])/g, ' $1').trim();
      const newTitle = `Pond Services in ${cityName}, Utah | Utah Water Gardens`;
      
      if (updateFileTitle(filePath, newTitle)) {
        totalUpdated++;
      } else {
        totalSkipped++;
      }
    });
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Updated: ${totalUpdated} files`);
  console.log(`⏭️  Skipped: ${totalSkipped} files`);
  console.log(`\n🎉 Duplicate title fix complete!`);
  console.log(`\n📝 Next steps:`);
  console.log(`1. Test the updated pages`);
  console.log(`2. Submit updated sitemap to Bing Webmaster Tools`);
  console.log(`3. Monitor for duplicate title warnings`);
}

// Run the script
if (require.main === module) {
  fixAllDuplicateTitles();
}

module.exports = { fixAllDuplicateTitles, updateFileTitle };
