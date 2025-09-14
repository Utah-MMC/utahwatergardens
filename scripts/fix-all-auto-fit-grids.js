#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Grid patterns and their optimal column counts based on typical content
const gridOptimizations = {
  // 2-column grids (for 2-4 items)
  'repeat(auto-fit, minmax(200px, 1fr))': 'repeat(2, 1fr)',
  'repeat(auto-fit, minmax(220px, 1fr))': 'repeat(2, 1fr)',
  'repeat(auto-fit, minmax(250px, 1fr))': 'repeat(2, 1fr)',
  'repeat(auto-fit, minmax(300px, 1fr))': 'repeat(2, 1fr)',
  'repeat(auto-fit, minmax(350px, 1fr))': 'repeat(2, 1fr)',
  'repeat(auto-fit, minmax(400px, 1fr))': 'repeat(2, 1fr)',
  
  // 3-column grids (for 3-6 items)
  'repeat(auto-fit, minmax(180px, 1fr))': 'repeat(3, 1fr)',
  'repeat(auto-fit, minmax(150px, 1fr))': 'repeat(3, 1fr)',
  
  // Auto-fill patterns
  'repeat(auto-fill, minmax(200px, 1fr))': 'repeat(2, 1fr)',
  'repeat(auto-fill, minmax(250px, 1fr))': 'repeat(2, 1fr)',
  'repeat(auto-fill, minmax(300px, 1fr))': 'repeat(2, 1fr)',
  'repeat(auto-fill, minmax(350px, 1fr))': 'repeat(2, 1fr)',
};

// Files to process
const cssFiles = [
  'frontend/src/pages/PondTipsTricksPage.css',
  'frontend/src/pages/SeasonalServicesPage.css',
  'frontend/src/pages/AquaticPlantsPage.css',
  'frontend/src/pages/KoiGoldfishPage.css',
  'frontend/src/pages/WaterTreatmentsPage.css',
  'frontend/src/components/CityPageTemplate.css',
  'frontend/src/pages/EquipmentRepairPage.css',
  'frontend/src/pages/PondGalleryPage.css',
  'frontend/src/pages/PondSuppliesPage.css',
  'frontend/src/pages/PondCleaningPage.css',
  'frontend/src/pages/PondMaintenancePage.css',
  'frontend/src/components/PondHarvestingTemplate.css',
  'frontend/src/components/PondDredgingTemplate.css'
];

function fixAutoFitInFile(filePath) {
  console.log(`\n🔧 Processing ${filePath}...`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changesMade = 0;
  
  // Fix each auto-fit/auto-fill pattern
  Object.entries(gridOptimizations).forEach(([oldPattern, newPattern]) => {
    const regex = new RegExp(oldPattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    
    if (matches) {
      content = content.replace(regex, newPattern);
      changesMade += matches.length;
      console.log(`  ✅ Fixed ${matches.length} instances of: ${oldPattern} → ${newPattern}`);
    }
  });
  
  if (changesMade > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  📝 Updated file with ${changesMade} changes`);
  } else {
    console.log(`  ℹ️  No auto-fit patterns found`);
  }
}

function addResponsiveBreakpoints(filePath) {
  console.log(`\n📱 Adding responsive breakpoints to ${filePath}...`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if responsive breakpoints already exist
  if (content.includes('@media (max-width: 1024px)')) {
    console.log(`  ℹ️  Responsive breakpoints already exist`);
    return;
  }
  
  // Find the main responsive section
  const responsiveMatch = content.match(/(@media \(max-width: 768px\))/);
  if (responsiveMatch) {
    const beforeResponsive = content.substring(0, responsiveMatch.index);
    const afterResponsive = content.substring(responsiveMatch.index);
    
    // Add tablet breakpoint
    const tabletBreakpoint = `
/* Responsive Design */
@media (max-width: 1024px) {
  .tips-grid,
  .tricks-grid,
  .secrets-grid,
  .diy-grid,
  .troubleshooting-grid,
  .seasonal-grid,
  .seasons-grid,
  .categories-grid,
  .products-grid,
  .varieties-grid,
  .requirements-grid,
  .testing-grid,
  .maintenance-grid,
  .packages-grid,
  .services-grid,
  .benefits-grid,
  .local-content,
  .service-details-grid,
  .faq-grid,
  .process-steps,
  .equipment-grid,
  .seasonal-info,
  .environmental-features,
  .regulations-info,
  .why-choose-grid,
  .contact-methods,
  .methods-grid,
  .attachments-grid,
  .tech-features,
  .testimonials-carousel,
  .plant-problems-grid,
  .mitigation-grid,
  .cleaning-services-grid,
  .cleaning-packages-grid,
  .cleaning-process-steps,
  .why-clean-grid,
  .plans-grid,
  .selection-steps,
  .projects-grid,
  .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

`;
    
    content = beforeResponsive + tabletBreakpoint + afterResponsive;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ Added responsive breakpoints`);
  } else {
    console.log(`  ⚠️  No existing responsive section found`);
  }
}

function main() {
  console.log('🚀 Starting comprehensive auto-fit grid fix...\n');
  
  let totalFiles = 0;
  let totalChanges = 0;
  
  cssFiles.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    fixAutoFitInFile(fullPath);
    addResponsiveBreakpoints(fullPath);
    totalFiles++;
  });
  
  console.log(`\n🎉 Completed processing ${totalFiles} CSS files!`);
  console.log('\n📋 Summary:');
  console.log('- Converted auto-fit/auto-fill to fixed column counts');
  console.log('- Added responsive breakpoints for tablet view');
  console.log('- Maintained existing mobile breakpoints');
  console.log('\n✨ All grid layouts should now be properly balanced!');
}

if (require.main === module) {
  main();
}

module.exports = { fixAutoFitInFile, addResponsiveBreakpoints };
