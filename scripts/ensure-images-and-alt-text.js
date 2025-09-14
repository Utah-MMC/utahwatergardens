#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Pages that need image and alt text verification
const pagesToCheck = [
  'frontend/src/pages/PumpsAerationPage.js',
  'frontend/src/pages/WaterTreatmentsPage.js',
  'frontend/src/pages/PondSuppliesPage.js',
  'frontend/src/pages/PondGalleryPage.js',
  'frontend/src/pages/EquipmentRepairPage.js',
  'frontend/src/pages/CareGuidesPage.js',
  'frontend/src/pages/PondCleaningPage.js',
  'frontend/src/pages/PondMaintenancePage.js',
  'frontend/src/pages/WaterQualityTestingPage.js',
  'frontend/src/pages/PondDesignBuildPage.js',
  'frontend/src/pages/FiltrationSystemsPage.js',
  'frontend/src/pages/PondLinersPage.js',
  'frontend/src/pages/SeasonalServicesPage.js',
  'frontend/src/pages/SeasonalCarePage.js',
  'frontend/src/pages/TroubleshootingPage.js',
  'frontend/src/pages/VideoTutorialsPage.js',
  'frontend/src/pages/FAQPage.js',
  'frontend/src/pages/ContactPage.js',
  'frontend/src/pages/CityPage.js',
  'frontend/src/pages/AboutPage.js',
  'frontend/src/pages/BlogPage.js',
  'frontend/src/pages/ShopPage.js',
  'frontend/src/pages/ResourcesPage.js',
  'frontend/src/pages/ServicesPage.js',
  'frontend/src/pages/TeamDetailPage.js',
  'frontend/src/pages/ToolsAccessoriesPage.js',
  'frontend/src/pages/TruxorServicePage.js',
  'frontend/src/pages/AquaticPlantsPage.js',
  'frontend/src/pages/FloatingPlantsPage.js',
  'frontend/src/pages/MarginalPlantsPage.js',
  'frontend/src/pages/WaterLiliesPage.js',
  'frontend/src/pages/PlantsFishPage.js',
  'frontend/src/pages/KoiGoldfishPage.js',
  'frontend/src/pages/PondLightingPage.js',
  'frontend/src/pages/PlantDetailPage.js',
  'frontend/src/pages/LakeDredgingPage.js',
  'frontend/src/pages/HarvestingPage.js',
  'frontend/src/pages/ParksAndRecreationPage.js',
  'frontend/src/pages/OutOfAreaServicePage.js',
  'frontend/src/pages/BlogPost.js',
  'frontend/src/pages/HomePage.js'
];

function checkImagesAndAltText() {
  console.log('🖼️  Checking images and alt text across all pages...\n');
  
  const results = [];
  
  pagesToCheck.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${filePath}`);
      return;
    }
    
    const content = fs.readFileSync(fullPath, 'utf8');
    const pageName = path.basename(filePath, '.js');
    
    // Count images with alt text
    const imgWithAlt = (content.match(/<img[^>]*alt=["'][^"']*["'][^>]*>/g) || []).length;
    const imgWithoutAlt = (content.match(/<img(?![^>]*alt=["'][^"']*["'])[^>]*>/g) || []).length;
    const totalImages = imgWithAlt + imgWithoutAlt;
    
    // Count image references in arrays/objects
    const imageRefs = (content.match(/image:\s*['"][^'"]*['"]/g) || []).length;
    const srcRefs = (content.match(/src:\s*['"][^'"]*['"]/g) || []).length;
    
    const totalImageReferences = imageRefs + srcRefs;
    
    results.push({
      page: pageName,
      totalImages: totalImages,
      imagesWithAlt: imgWithAlt,
      imagesWithoutAlt: imgWithoutAlt,
      imageReferences: totalImageReferences,
      needsMoreImages: totalImages < 4,
      needsAltText: imgWithoutAlt > 0
    });
  });
  
  // Display results
  console.log('📊 IMAGE ANALYSIS RESULTS:\n');
  
  let pagesNeedingWork = 0;
  let totalPages = results.length;
  
  results.forEach(result => {
    const status = result.needsMoreImages || result.needsAltText ? '❌' : '✅';
    console.log(`${status} ${result.page}:`);
    console.log(`   Total Images: ${result.totalImages}`);
    console.log(`   With Alt Text: ${result.imagesWithAlt}`);
    console.log(`   Without Alt Text: ${result.imagesWithoutAlt}`);
    console.log(`   Image References: ${result.imageReferences}`);
    
    if (result.needsMoreImages) {
      console.log(`   ⚠️  Needs more images (minimum 4)`);
    }
    if (result.needsAltText) {
      console.log(`   ⚠️  Needs alt text for images`);
    }
    console.log('');
    
    if (result.needsMoreImages || result.needsAltText) {
      pagesNeedingWork++;
    }
  });
  
  console.log(`📈 SUMMARY:`);
  console.log(`✅ Pages with adequate images and alt text: ${totalPages - pagesNeedingWork}`);
  console.log(`❌ Pages needing work: ${pagesNeedingWork}`);
  console.log(`📊 Total pages analyzed: ${totalPages}`);
  
  if (pagesNeedingWork > 0) {
    console.log('\n🔧 RECOMMENDATIONS:');
    console.log('- Add more images to pages with fewer than 4 images');
    console.log('- Add alt text to all images for accessibility');
    console.log('- Ensure all images have descriptive alt text');
  } else {
    console.log('\n🎉 ALL PAGES HAVE ADEQUATE IMAGES AND ALT TEXT!');
  }
  
  return results;
}

if (require.main === module) {
  checkImagesAndAltText();
}

module.exports = { checkImagesAndAltText };
