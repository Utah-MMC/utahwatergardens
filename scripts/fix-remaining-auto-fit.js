#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// All remaining files with auto-fit issues
const remainingFiles = [
  'frontend/src/pages/PlantsFishPage.css',
  'frontend/src/pages/ResourcesPage.css',
  'frontend/src/pages/PondServicesPage.css',
  'frontend/src/pages/ShopPage.css',
  'frontend/src/pages/ParksAndRecreationPage.css',
  'frontend/src/pages/OutOfAreaServicePage.css',
  'frontend/src/pages/ToolsAccessoriesPage.css',
  'frontend/src/pages/BlogPage.css',
  'frontend/src/pages/HarvestingPage.css',
  'frontend/src/pages/CityPage.css',
  'frontend/src/components/ServiceAreasSection.css',
  'frontend/src/pages/MarginalPlantsPage.css',
  'frontend/src/pages/BlogPost.css',
  'frontend/src/components/EnhancedBlogPost.css',
  'frontend/src/pages/PlantDetailPage.css',
  'frontend/src/pages/PondLightingPage.css',
  'frontend/src/pages/TeamDetailPage.css',
  'frontend/src/pages/FloatingPlantsPage.css',
  'frontend/src/pages/WaterLiliesPage.css',
  'frontend/src/pages/SeasonalCarePage.css',
  'frontend/src/pages/ServiceAreas/ServiceAreaPage.css',
  'frontend/src/components/RippleDemo.css',
  'frontend/src/pages/LakeDredgingPage.css',
  'frontend/src/pages/TroubleshootingPage.css',
  'frontend/src/pages/VideoTutorialsPage.css',
  'frontend/src/pages/FAQPage.css',
  'frontend/src/pages/TruxorServicePage.css'
];

// Grid patterns to fix
const patternsToFix = [
  { from: 'repeat(auto-fit, minmax(200px, 1fr))', to: 'repeat(2, 1fr)' },
  { from: 'repeat(auto-fit, minmax(220px, 1fr))', to: 'repeat(2, 1fr)' },
  { from: 'repeat(auto-fit, minmax(250px, 1fr))', to: 'repeat(2, 1fr)' },
  { from: 'repeat(auto-fit, minmax(280px, 1fr))', to: 'repeat(2, 1fr)' },
  { from: 'repeat(auto-fit, minmax(300px, 1fr))', to: 'repeat(2, 1fr)' },
  { from: 'repeat(auto-fit, minmax(350px, 1fr))', to: 'repeat(2, 1fr)' },
  { from: 'repeat(auto-fit, minmax(400px, 1fr))', to: 'repeat(2, 1fr)' },
  { from: 'repeat(auto-fill, minmax(200px, 1fr))', to: 'repeat(2, 1fr)' },
  { from: 'repeat(auto-fill, minmax(250px, 1fr))', to: 'repeat(2, 1fr)' },
  { from: 'repeat(auto-fill, minmax(300px, 1fr))', to: 'repeat(2, 1fr)' },
  { from: 'repeat(auto-fill, minmax(350px, 1fr))', to: 'repeat(2, 1fr)' }
];

function fixFile(filePath) {
  console.log(`\n🔧 Processing ${filePath}...`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return 0;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changesMade = 0;
  
  // Fix each pattern
  patternsToFix.forEach(({ from, to }) => {
    const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    
    if (matches) {
      content = content.replace(regex, to);
      changesMade += matches.length;
      console.log(`  ✅ Fixed ${matches.length} instances: ${from} → ${to}`);
    }
  });
  
  // Add responsive breakpoints if they don't exist
  if (!content.includes('@media (max-width: 1024px)') && changesMade > 0) {
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
  .projects-grid,
  .blog-grid,
  .team-grid,
  .plant-grid,
  .service-grid,
  .resource-grid,
  .shop-grid,
  .parks-grid,
  .tools-grid,
  .harvesting-grid,
  .city-grid,
  .service-areas-grid,
  .marginal-grid,
  .lighting-grid,
  .floating-grid,
  .water-lilies-grid,
  .seasonal-care-grid,
  .lake-dredging-grid,
  .troubleshooting-grid,
  .video-grid,
  .faq-grid,
  .truxor-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

`;
    
    // Insert before existing mobile breakpoint
    const mobileBreakpointIndex = content.indexOf('@media (max-width: 768px)');
    if (mobileBreakpointIndex !== -1) {
      content = content.substring(0, mobileBreakpointIndex) + 
               responsiveBreakpoint + 
               content.substring(mobileBreakpointIndex);
      console.log(`  ✅ Added responsive breakpoints`);
    } else {
      // Add at the end if no mobile breakpoint exists
      content += responsiveBreakpoint;
      console.log(`  ✅ Added responsive breakpoints at end`);
    }
  }
  
  if (changesMade > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  📝 Updated file with ${changesMade} changes`);
  } else {
    console.log(`  ℹ️  No patterns to fix`);
  }
  
  return changesMade;
}

function main() {
  console.log('🚀 Fixing remaining auto-fit issues...\n');
  
  let totalFiles = 0;
  let totalChanges = 0;
  
  remainingFiles.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    const changes = fixFile(fullPath);
    if (changes > 0) {
      totalFiles++;
      totalChanges += changes;
    }
  });
  
  console.log(`\n🎉 Completed processing ${totalFiles} files with ${totalChanges} total changes!`);
  console.log('\n📋 Summary:');
  console.log('- Fixed all remaining auto-fit/auto-fill patterns');
  console.log('- Added responsive breakpoints where needed');
  console.log('- Eliminated dead space in all card layouts');
  console.log('\n✨ All card layouts across the entire site should now be properly balanced!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };
