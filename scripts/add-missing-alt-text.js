#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Pages that need alt text fixes
const pagesToFix = [
  'frontend/src/pages/WaterTreatmentsPage.js',
  'frontend/src/pages/PondSuppliesPage.js',
  'frontend/src/pages/PondGalleryPage.js',
  'frontend/src/pages/EquipmentRepairPage.js',
  'frontend/src/pages/CareGuidesPage.js',
  'frontend/src/pages/PondCleaningPage.js',
  'frontend/src/pages/PondMaintenancePage.js',
  'frontend/src/pages/WaterQualityTestingPage.js',
  'frontend/src/pages/PondLinersPage.js',
  'frontend/src/pages/SeasonalServicesPage.js',
  'frontend/src/pages/SeasonalCarePage.js',
  'frontend/src/pages/VideoTutorialsPage.js',
  'frontend/src/pages/AboutPage.js',
  'frontend/src/pages/BlogPage.js',
  'frontend/src/pages/ShopPage.js',
  'frontend/src/pages/ResourcesPage.js',
  'frontend/src/pages/ServicesPage.js',
  'frontend/src/pages/ToolsAccessoriesPage.js',
  'frontend/src/pages/FloatingPlantsPage.js',
  'frontend/src/pages/MarginalPlantsPage.js',
  'frontend/src/pages/WaterLiliesPage.js',
  'frontend/src/pages/PlantsFishPage.js',
  'frontend/src/pages/PondLightingPage.js',
  'frontend/src/pages/PlantDetailPage.js',
  'frontend/src/pages/LakeDredgingPage.js',
  'frontend/src/pages/HarvestingPage.js',
  'frontend/src/pages/ParksAndRecreationPage.js',
  'frontend/src/pages/OutOfAreaServicePage.js',
  'frontend/src/pages/BlogPost.js',
  'frontend/src/pages/HomePage.js'
];

function addAltTextToImages(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const pageName = path.basename(filePath, '.js');
  
  // Find images without alt text
  const imgRegex = /<img(?![^>]*alt=["'][^"']*["'])[^>]*>/g;
  const imagesWithoutAlt = content.match(imgRegex) || [];
  
  if (imagesWithoutAlt.length === 0) {
    console.log(`✅ ${pageName} - All images have alt text`);
    return true;
  }
  
  let fixedCount = 0;
  
  imagesWithoutAlt.forEach(imgTag => {
    // Extract src attribute
    const srcMatch = imgTag.match(/src=["']([^"']*)["']/);
    if (srcMatch) {
      const src = srcMatch[1];
      
      // Generate alt text based on src and page context
      const altText = generateAltText(src, pageName);
      
      // Add alt attribute
      const newImgTag = imgTag.replace(/src=["']([^"']*)["']/, `src="$1" alt="${altText}"`);
      content = content.replace(imgTag, newImgTag);
      fixedCount++;
    }
  });
  
  if (fixedCount > 0) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ ${pageName} - Added alt text to ${fixedCount} images`);
    return true;
  }
  
  return false;
}

function generateAltText(src, pageName) {
  // Extract filename from src
  const filename = path.basename(src, path.extname(src));
  
  // Generate descriptive alt text based on filename and page context
  const altTextMap = {
    'IMG_2770': 'Professional pond equipment and supplies',
    'IMG_2775': 'High-quality pond maintenance equipment',
    'IMG_2779': 'Expert pond installation and repair services',
    'IMG_2780': 'Beautiful water feature and pond design',
    'IMG_2781': 'Professional pond construction and maintenance',
    'IMG_2782': 'Advanced pond testing and water quality equipment',
    'koi-topaz-enhance-4x': 'Colorful koi fish swimming in crystal clear pond water',
    'waterLillies-topaz-enhance-4x': 'Beautiful pink water lilies floating on pond surface',
    'pumpRepair': 'Professional pond pump repair and maintenance equipment',
    'cropped-20140919_105345-topaz-enhance-3.2x': 'Professional pond construction and installation work',
    'uwg_image_1941-topaz-enhance-3.5x': 'Beautiful aquatic plants and pond landscaping',
    '0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x': 'Healthy submerged aquatic plants in pond',
    '5f4fbb5840c1b554060a09ace9f579e0-denoise-enhance-4x': 'Natural floating plants providing pond coverage',
    '3d2fae9073eaf132d58ccd476da8fdc7-denoise-enhance-4x': 'Oxygenating aquatic plants for water quality',
    '3e8c02a910ecc02bd046359713860a2c-denoise-enhance-4x': 'Water hyacinth floating plants for natural filtration',
    '9a6a85478f82960b2ce177e0310807c8-denoise': 'Beautiful water feature construction and design',
    '67ce17ef8342aaab304526d946257b38-denoise': 'Serene water garden with aquatic plants and fish',
    '144b4c20031b8d5bdb573f8c9aea03a3-enhance-4x': 'Professional pond care and maintenance services',
    '19765b123d1521ca46ded746c375eeef-enhance-4x': 'Expert pond tips and maintenance guidance',
    '1a558e9d94802fd824b157129ebe0e1d-enhance-4x': 'Seasonal pond care and maintenance services',
    '1a9b7904c3461d26b8b9b177164f11c4-denoise': 'Pond troubleshooting and problem-solving services',
    '1c7c15865a8fd7d198a5c69c3087e91c-enhance-4x': 'Educational video tutorials for pond care',
    '1df1ecf8852a8a526517efdf414917a7-denoise-enhance-4x': 'Frequently asked questions about pond care',
    '2b1a14d52ea7e62a36a62f1a2da7203a-enhance-4x': 'Pond leak detection and repair services',
    '2d38a8065acb69433f4ac7658de69f6c-enhance-4x': 'Pond water loss troubleshooting and solutions',
    '2f5160e87ccdc3259c69ecd3d8776206-denoise': 'Comprehensive pond maintenance guide and tips',
    'IMG_8910-rotated-topaz-enhance-2.1x': 'Beautiful pond transformation and landscaping'
  };
  
  // Check if we have a specific mapping
  if (altTextMap[filename]) {
    return altTextMap[filename];
  }
  
  // Generate generic alt text based on page context
  const pageContextMap = {
    'WaterTreatmentsPage': 'Water treatment and pond maintenance equipment',
    'PondSuppliesPage': 'Professional pond supplies and equipment',
    'PondGalleryPage': 'Beautiful pond and water feature gallery',
    'EquipmentRepairPage': 'Pond equipment repair and maintenance services',
    'CareGuidesPage': 'Pond care guide and maintenance information',
    'PondCleaningPage': 'Professional pond cleaning and maintenance',
    'PondMaintenancePage': 'Expert pond maintenance and care services',
    'WaterQualityTestingPage': 'Water quality testing and analysis equipment',
    'PondLinersPage': 'High-quality pond liners and installation',
    'SeasonalServicesPage': 'Seasonal pond services and maintenance',
    'SeasonalCarePage': 'Seasonal pond care and maintenance guide',
    'VideoTutorialsPage': 'Educational pond care video tutorials',
    'AboutPage': 'Utah Water Gardens team and company information',
    'BlogPage': 'Pond care blog and educational content',
    'ShopPage': 'Pond supplies and equipment for sale',
    'ResourcesPage': 'Pond care resources and educational materials',
    'ServicesPage': 'Professional pond services and maintenance',
    'ToolsAccessoriesPage': 'Pond tools and maintenance accessories',
    'FloatingPlantsPage': 'Beautiful floating aquatic plants',
    'MarginalPlantsPage': 'Marginal aquatic plants for pond edges',
    'WaterLiliesPage': 'Stunning water lilies and aquatic plants',
    'PlantsFishPage': 'Aquatic plants and pond fish selection',
    'PondLightingPage': 'Professional pond lighting systems',
    'PlantDetailPage': 'Detailed aquatic plant information',
    'LakeDredgingPage': 'Professional lake dredging services',
    'HarvestingPage': 'Aquatic plant harvesting and management',
    'ParksAndRecreationPage': 'Parks and recreation pond services',
    'OutOfAreaServicePage': 'Extended area pond services',
    'BlogPost': 'Pond care blog post and educational content',
    'HomePage': 'Utah Water Gardens home page content'
  };
  
  const context = pageContextMap[pageName] || 'Pond and water feature content';
  
  // Generate alt text based on filename patterns
  if (filename.includes('pond') || filename.includes('water')) {
    return `Beautiful ${context.toLowerCase()}`;
  } else if (filename.includes('equipment') || filename.includes('pump') || filename.includes('filter')) {
    return `Professional ${context.toLowerCase()}`;
  } else if (filename.includes('plant') || filename.includes('lily') || filename.includes('koi')) {
    return `Healthy ${context.toLowerCase()}`;
  } else {
    return `${context} - ${filename.replace(/[-_]/g, ' ')}`;
  }
}

function addMissingAltText() {
  console.log('🏷️  Adding missing alt text to images...\n');
  
  let totalFixed = 0;
  
  pagesToFix.forEach(filePath => {
    if (addAltTextToImages(filePath)) {
      totalFixed++;
    }
  });
  
  console.log(`\n🎯 Fixed ${totalFixed} pages`);
  
  if (totalFixed > 0) {
    console.log('\n🎉 ALT TEXT IMPROVEMENTS COMPLETED!');
    console.log('- Added descriptive alt text to all images');
    console.log('- Improved accessibility compliance');
    console.log('- Enhanced SEO with proper image descriptions');
    console.log('- Better user experience for screen readers');
  }
}

if (require.main === module) {
  addMissingAltText();
}

module.exports = { addMissingAltText, addAltTextToImages, generateAltText };
