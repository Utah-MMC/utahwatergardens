#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Grid patterns that cause uneven layouts
const problematicPatterns = [
  'repeat(auto-fit, minmax(200px, 1fr))',
  'repeat(auto-fit, minmax(220px, 1fr))',
  'repeat(auto-fit, minmax(250px, 1fr))',
  'repeat(auto-fit, minmax(280px, 1fr))',
  'repeat(auto-fit, minmax(300px, 1fr))',
  'repeat(auto-fit, minmax(350px, 1fr))',
  'repeat(auto-fit, minmax(400px, 1fr))',
  'repeat(auto-fill, minmax(200px, 1fr))',
  'repeat(auto-fill, minmax(250px, 1fr))',
  'repeat(auto-fill, minmax(300px, 1fr))',
  'repeat(auto-fill, minmax(350px, 1fr))'
];

// Optimal column counts for different item counts
const optimalColumns = {
  // 2 items: 2 columns
  '2': 'repeat(2, 1fr)',
  
  // 3 items: 3 columns
  '3': 'repeat(3, 1fr)',
  
  // 4 items: 2 columns (2x2 grid)
  '4': 'repeat(2, 1fr)',
  
  // 5 items: 3 columns (2+3 layout)
  '5': 'repeat(3, 1fr)',
  
  // 6 items: 3 columns (2x3 grid)
  '6': 'repeat(3, 1fr)',
  
  // 7 items: 3 columns (3+3+1 layout)
  '7': 'repeat(3, 1fr)',
  
  // 8 items: 4 columns (2x4 grid)
  '8': 'repeat(4, 1fr)',
  
  // 9 items: 3 columns (3x3 grid)
  '9': 'repeat(3, 1fr)',
  
  // 10 items: 4 columns (3+3+4 layout)
  '10': 'repeat(4, 1fr)',
  
  // 12 items: 4 columns (3x4 grid)
  '12': 'repeat(4, 1fr)'
};

// CSS files to scan
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
  'frontend/src/components/PondDredgingTemplate.css',
  'frontend/src/pages/CareGuidesPage.css',
  'frontend/src/pages/PondDesignBuildPage.css',
  'frontend/src/pages/FiltrationSystemsPage.css',
  'frontend/src/pages/PondLinersPage.css',
  'frontend/src/pages/PumpsAerationPage.css',
  'frontend/src/pages/WaterQualityTestingPage.css'
];

// JS files to analyze for item counts
const jsFiles = [
  'frontend/src/pages/PondTipsTricksPage.js',
  'frontend/src/pages/SeasonalServicesPage.js',
  'frontend/src/pages/AquaticPlantsPage.js', 
  'frontend/src/pages/KoiGoldfishPage.js',
  'frontend/src/pages/WaterTreatmentsPage.js',
  'frontend/src/components/CityPageTemplate.js',
  'frontend/src/pages/EquipmentRepairPage.js',
  'frontend/src/pages/PondGalleryPage.js',
  'frontend/src/pages/PondSuppliesPage.js',
  'frontend/src/pages/PondCleaningPage.js',
  'frontend/src/pages/PondMaintenancePage.js',
  'frontend/src/components/PondHarvestingTemplate.js',
  'frontend/src/components/PondDredgingTemplate.js',
  'frontend/src/pages/CareGuidesPage.js',
  'frontend/src/pages/PondDesignBuildPage.js',
  'frontend/src/pages/FiltrationSystemsPage.js',
  'frontend/src/pages/PondLinersPage.js',
  'frontend/src/pages/PumpsAerationPage.js',
  'frontend/src/pages/WaterQualityTestingPage.js'
];

function analyzeItemCounts(jsFilePath) {
  if (!fs.existsSync(jsFilePath)) {
    return {};
  }
  
  const content = fs.readFileSync(jsFilePath, 'utf8');
  const itemCounts = {};
  
  // Common array patterns that represent grid items
  const arrayPatterns = [
    /const\s+(\w+)\s*=\s*\[/g,
    /(\w+)\s*=\s*\[/g,
    /\.map\(/g
  ];
  
  // Look for arrays that are likely grid items
  const arrayMatches = content.match(/const\s+(\w+)\s*=\s*\[[\s\S]*?\]/g);
  if (arrayMatches) {
    arrayMatches.forEach(match => {
      const lines = match.split('\n');
      const itemCount = lines.filter(line => 
        line.trim().startsWith('{') || 
        line.trim().startsWith('"') || 
        line.trim().startsWith("'") ||
        line.includes('name:') ||
        line.includes('title:') ||
        line.includes('season:')
      ).length;
      
      if (itemCount > 0) {
        const arrayName = match.match(/const\s+(\w+)\s*=/)?.[1];
        if (arrayName) {
          itemCounts[arrayName] = itemCount;
        }
      }
    });
  }
  
  return itemCounts;
}

function fixGridLayout(cssFilePath, jsFilePath) {
  console.log(`\n🔧 Processing ${cssFilePath}...`);
  
  if (!fs.existsSync(cssFilePath)) {
    console.log(`❌ CSS file not found: ${cssFilePath}`);
    return;
  }
  
  let cssContent = fs.readFileSync(cssFilePath, 'utf8');
  let changesMade = 0;
  
  // Analyze JS file for item counts
  const itemCounts = analyzeItemCounts(jsFilePath);
  console.log(`  📊 Found item counts:`, itemCounts);
  
  // Fix each problematic pattern
  problematicPatterns.forEach(pattern => {
    const regex = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = cssContent.match(regex);
    
    if (matches) {
      // Determine optimal column count based on context
      let optimalColumns = 'repeat(2, 1fr)'; // default
      
      // Try to find the best column count based on item counts
      const totalItems = Object.values(itemCounts).reduce((sum, count) => sum + count, 0);
      if (totalItems > 0) {
        const avgItems = totalItems / Object.keys(itemCounts).length;
        if (avgItems <= 2) optimalColumns = 'repeat(2, 1fr)';
        else if (avgItems <= 3) optimalColumns = 'repeat(3, 1fr)';
        else if (avgItems <= 4) optimalColumns = 'repeat(2, 1fr)';
        else if (avgItems <= 6) optimalColumns = 'repeat(3, 1fr)';
        else optimalColumns = 'repeat(4, 1fr)';
      }
      
      cssContent = cssContent.replace(regex, optimalColumns);
      changesMade += matches.length;
      console.log(`  ✅ Fixed ${matches.length} instances: ${pattern} → ${optimalColumns}`);
    }
  });
  
  // Add responsive breakpoints if they don't exist
  if (!cssContent.includes('@media (max-width: 1024px)')) {
    const responsiveBreakpoint = `
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
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

`;
    
    // Insert before existing mobile breakpoint
    const mobileBreakpointIndex = cssContent.indexOf('@media (max-width: 768px)');
    if (mobileBreakpointIndex !== -1) {
      cssContent = cssContent.substring(0, mobileBreakpointIndex) + 
                   responsiveBreakpoint + 
                   cssContent.substring(mobileBreakpointIndex);
      console.log(`  ✅ Added responsive breakpoints`);
    }
  }
  
  if (changesMade > 0) {
    fs.writeFileSync(cssFilePath, cssContent, 'utf8');
    console.log(`  📝 Updated file with ${changesMade} changes`);
  } else {
    console.log(`  ℹ️  No problematic patterns found`);
  }
}

function main() {
  console.log('🚀 Starting comprehensive card layout fix...\n');
  console.log('🎯 Targeting layouts: 3+1, 4+1, 5+1, 6+1, 6+2, etc.\n');
  
  let totalFiles = 0;
  let totalChanges = 0;
  
  cssFiles.forEach((cssFile, index) => {
    const cssPath = path.join(__dirname, '..', cssFile);
    const jsPath = path.join(__dirname, '..', jsFiles[index] || '');
    
    fixGridLayout(cssPath, jsPath);
    totalFiles++;
  });
  
  console.log(`\n🎉 Completed processing ${totalFiles} CSS files!`);
  console.log('\n📋 Summary:');
  console.log('- Fixed auto-fit/auto-fill patterns causing uneven layouts');
  console.log('- Applied optimal column counts based on content analysis');
  console.log('- Added responsive breakpoints for tablet view');
  console.log('- Eliminated dead space in card layouts');
  console.log('\n✨ All card layouts should now be properly balanced!');
}

if (require.main === module) {
  main();
}

module.exports = { fixGridLayout, analyzeItemCounts };
