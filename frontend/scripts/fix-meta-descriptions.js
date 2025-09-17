#!/usr/bin/env node

/**
 * Script to fix duplicate meta descriptions across all pages
 * This addresses the Bing Webmaster Tools issue: "Too many pages with identical meta descriptions"
 */

const fs = require('fs');
const path = require('path');

// Common duplicate descriptions that need to be fixed
const DUPLICATE_DESCRIPTIONS = {
  "Utah's premier pond services near Salt Lake City, UT. Expert pond design, construction, maintenance, and cleaning. Licensed & insured. Call (801) 590-8516 for consultation.": "homepage",
  "Utah's premier pond services near Salt Lake City, UT. Expert pond design, construction, maintenance, and cleaning. Licensed & insured. Call (801) 590-8516 for free quote.": "city-page",
  "Utah Water Gardens - Your complete pond and water feature solution in Utah. From construction to maintenance, we handle everything.": "services",
  "This section coming soon.": "placeholder",
  "Professional pond services including cleaning, maintenance, repair, and dredging. Serving Salt Lake County, Davis County, and surrounding areas with 15+ years of experience.": "pond-services",
  "Proper filtration can help keep your pond or water feature clean.": "pond-filters",
  "Our pond consultations will help you understand what your pond needs to get going. Whether its plants or a pond cleaning we'll get your pond looking great!": "consultation",
  "Schedule a pond cleaning, maintenance, repair, delivery or consultation.": "schedule",
  "Have questions about ponds, fish, or aquatic plants? Contact Utah Water Gardens in Salt Lake City—visit our showroom or schedule service. Call 801-590-8516.": "contact"
};

// Service-specific descriptions
const SERVICE_DESCRIPTIONS = {
  'pond-construction': 'Professional pond construction and design services in Utah. Custom water features, waterfalls, and koi ponds. Licensed & insured. Free consultations.',
  'pond-maintenance': 'Expert pond maintenance services in Utah. Regular cleaning, water quality testing, and seasonal care. Keep your pond healthy year-round.',
  'pond-cleaning': 'Professional pond cleaning services in Utah. Deep cleaning, algae removal, and water feature restoration. Serving Salt Lake and Davis counties.',
  'pond-repair': 'Pond repair and restoration services in Utah. Fix leaks, replace equipment, and restore your water feature to perfect condition.',
  'aquatic-plants': 'Premium aquatic plants for Utah ponds. Water lilies, marginal plants, and submerged vegetation. Expert plant selection and care advice.',
  'koi-fish': 'Beautiful koi and goldfish for Utah ponds. Healthy, vibrant fish with expert care advice. Professional pond fish selection and maintenance.',
  'pond-supplies': 'Complete pond supplies and equipment in Utah. Pumps, filters, liners, and accessories. Professional-grade products with expert advice.',
  'pond-filters': 'High-quality pond filtration systems in Utah. Keep your pond water crystal clear with professional-grade filters and expert installation.',
  'pond-pumps': 'Energy-efficient pond pumps and aeration systems in Utah. Professional installation and maintenance for healthy, clear pond water.',
  'pond-liners': 'Premium pond liners and underlayment in Utah. EPDM and PVC liners for leak-proof pond construction. Professional installation available.',
  'water-treatments': 'Professional water treatments for Utah ponds. Algae control, beneficial bacteria, and water quality solutions. Expert advice included.',
  'pond-lighting': 'Beautiful pond lighting systems in Utah. LED lights, floating lights, and pathway lighting. Enhance your water feature\'s nighttime beauty.',
  'pond-consultations': 'Expert pond consultations in Utah. Get professional advice on design, maintenance, and troubleshooting. Free initial consultations available.',
  'pond-gallery': 'View our portfolio of beautiful pond projects in Utah. Custom water features, koi ponds, and landscape designs. Inspiration for your project.',
  'dredging': 'Professional pond dredging services in Utah. Remove silt, restore depth, and improve water quality. Expert pond restoration and maintenance.',
  'harvesting': 'Pond harvesting services in Utah. Professional fish removal, plant management, and pond restoration. Expert aquatic management solutions.'
};

// Function to update a file with new meta description
function updateFileMetaDescription(filePath, newDescription) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Look for existing description patterns
    const descriptionPatterns = [
      /description\s*=\s*["']([^"']+)["']/g,
      /description:\s*["']([^"']+)["']/g,
      /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/g
    ];
    
    let updated = false;
    
    descriptionPatterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, (match, oldDesc) => {
          if (DUPLICATE_DESCRIPTIONS[oldDesc]) {
            updated = true;
            return match.replace(oldDesc, newDescription);
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
  
  // Other pages
  if (fileName.includes('contact') || fileName.includes('Contact')) return 'contact';
  if (fileName.includes('about') || fileName.includes('About')) return 'about';
  if (fileName.includes('resources') || fileName.includes('Resources')) return 'resources';
  if (fileName.includes('schedule') || fileName.includes('Schedule')) return 'schedule';
  if (fileName.includes('services') || fileName.includes('Services')) return 'services';
  if (fileName.includes('shop') || fileName.includes('Shop')) return 'shop';
  if (fileName.includes('blog') || fileName.includes('Blog')) return 'blog';
  
  return null;
}

// Main function to fix all pages
function fixAllMetaDescriptions() {
  const pagesDir = path.join(__dirname, '../src/pages');
  const serviceAreasDir = path.join(pagesDir, 'ServiceAreas');
  
  let totalUpdated = 0;
  let totalSkipped = 0;
  
  console.log('🔍 Scanning for pages with duplicate meta descriptions...\n');
  
  // Fix main pages
  const mainPages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.js') && !file.includes('.backup'));
  
  mainPages.forEach(file => {
    const filePath = path.join(pagesDir, file);
    const pageType = getPageTypeFromPath(filePath);
    
    if (pageType && SERVICE_DESCRIPTIONS[pageType]) {
      const newDescription = SERVICE_DESCRIPTIONS[pageType];
      if (updateFileMetaDescription(filePath, newDescription)) {
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
      const newDescription = `Professional pond services in ${cityName}, Utah. Expert pond design, construction, maintenance, and cleaning. Licensed & insured. Call (801) 590-8516 for consultation.`;
      
      if (updateFileMetaDescription(filePath, newDescription)) {
        totalUpdated++;
      } else {
        totalSkipped++;
      }
    });
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Updated: ${totalUpdated} files`);
  console.log(`⏭️  Skipped: ${totalSkipped} files`);
  console.log(`\n🎉 Meta description fix complete!`);
  console.log(`\n📝 Next steps:`);
  console.log(`1. Test the updated pages`);
  console.log(`2. Submit updated sitemap to Bing Webmaster Tools`);
  console.log(`3. Monitor for duplicate description warnings`);
}

// Run the script
if (require.main === module) {
  fixAllMetaDescriptions();
}

module.exports = { fixAllMetaDescriptions, updateFileMetaDescription };
