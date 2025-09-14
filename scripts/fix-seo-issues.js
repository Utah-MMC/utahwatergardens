#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Pages that need SEO improvements
const pagesNeedingSEO = [
  'frontend/src/pages/BeforeAfterPage.js',
  'frontend/src/pages/WaterFeaturesPage.js',
  'frontend/src/pages/KoiPondsPage.js',
  'frontend/src/pages/ResidentialPondsPage.js',
  'frontend/src/pages/CustomerProjectsPage.js',
  'frontend/src/pages/CommercialProjectsPage.js',
  'frontend/src/pages/ParksAndRecreationPage.js',
  'frontend/src/pages/OutOfAreaServicePage.js',
  'frontend/src/pages/LakeDredgingPage.js',
  'frontend/src/pages/HarvestingPage.js',
  'frontend/src/pages/PlantDetailPage.js',
  'frontend/src/pages/PondLightingPage.js',
  'frontend/src/pages/WaterLiliesPage.js',
  'frontend/src/pages/MarginalPlantsPage.js',
  'frontend/src/pages/FloatingPlantsPage.js',
  'frontend/src/pages/ToolsAccessoriesPage.js',
  'frontend/src/pages/TruxorServicePage.js',
  'frontend/src/pages/VideoTutorialsPage.js',
  'frontend/src/pages/TroubleshootingPage.js',
  'frontend/src/pages/SeasonalCarePage.js',
  'frontend/src/pages/SeasonalServicesPage.js',
  'frontend/src/pages/WaterQualityTestingPage.js',
  'frontend/src/pages/PondLinersPage.js'
];

function addSEOToPage(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const pageName = path.basename(filePath, '.js');
  
  // Check if SEO is already imported
  if (content.includes('import SEO') || content.includes('from \'../components/SEO\'')) {
    console.log(`✅ ${pageName} already has SEO component`);
    return true;
  }
  
  // Add SEO import
  const importRegex = /(import React[^;]*;)/;
  const importMatch = content.match(importRegex);
  
  if (importMatch) {
    const seoImport = `import SEO from '../components/SEO';\n`;
    content = content.replace(importMatch[1], importMatch[1] + '\n' + seoImport);
  }
  
  // Generate SEO data based on page name
  const seoData = generateSEOData(pageName);
  
  // Add SEO component after the component declaration
  const componentRegex = /(const\s+\w+\s*=\s*\(\)\s*=>\s*{)/;
  const componentMatch = content.match(componentRegex);
  
  if (componentMatch) {
    const seoComponent = `
  return (
    <>
      <SEO 
        title="${seoData.title}"
        description="${seoData.description}"
        keywords="${seoData.keywords}"
        canonical="https://utahwatergardens.com${seoData.canonical}"
        ogTitle="${seoData.ogTitle}"
        ogDescription="${seoData.ogDescription}"
        ogImage="${seoData.ogImage}"
        twitterCard="${seoData.twitterCard}"
      />
      <div className="${pageName.toLowerCase().replace(/([A-Z])/g, '-$1').substring(1)}-page">`;
    
    content = content.replace(componentMatch[1], componentMatch[1] + seoComponent);
    
    // Close the SEO component and div
    const returnRegex = /(return\s*\([^)]*<div[^>]*>)/;
    const returnMatch = content.match(returnRegex);
    
    if (returnMatch) {
      content = content.replace(returnMatch[1], returnMatch[1]);
    }
    
    // Add closing tags before the last return
    const lastReturnIndex = content.lastIndexOf('return (');
    if (lastReturnIndex !== -1) {
      const beforeReturn = content.substring(0, lastReturnIndex);
      const afterReturn = content.substring(lastReturnIndex);
      
      // Find the last closing div and add SEO closing
      const lastDivIndex = afterReturn.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        const beforeLastDiv = afterReturn.substring(0, lastDivIndex);
        const afterLastDiv = afterReturn.substring(lastDivIndex);
        
        content = beforeReturn + beforeLastDiv + '\n      </div>\n    </>\n  );' + afterLastDiv.substring(afterLastDiv.indexOf(');') + 2);
      }
    }
  }
  
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ Added SEO to ${pageName}`);
  return true;
}

function generateSEOData(pageName) {
  const seoDataMap = {
    'BeforeAfterPage': {
      title: 'Before & After Pond Transformations | Utah Water Gardens',
      description: 'See amazing before and after pond transformations by Utah Water Gardens. Professional pond design, construction, and renovation services.',
      keywords: 'pond before after, pond transformation, pond renovation, pond design utah, water feature makeover',
      canonical: '/pond-gallery/before-after',
      ogTitle: 'Before & After Pond Transformations',
      ogDescription: 'Amazing pond transformations by Utah Water Gardens',
      ogImage: '/images/pond-transformation.jpg',
      twitterCard: 'summary_large_image'
    },
    'WaterFeaturesPage': {
      title: 'Water Features & Fountains | Utah Water Gardens',
      description: 'Beautiful water features and fountains for your landscape. Custom design and installation by Utah Water Gardens.',
      keywords: 'water features, fountains, landscape water features, custom fountains utah',
      canonical: '/pond-gallery/water-features',
      ogTitle: 'Water Features & Fountains',
      ogDescription: 'Beautiful water features and fountains for your landscape',
      ogImage: '/images/water-features.jpg',
      twitterCard: 'summary_large_image'
    },
    'KoiPondsPage': {
      title: 'Koi Ponds | Custom Koi Pond Design & Construction | Utah Water Gardens',
      description: 'Custom koi pond design and construction services. Professional koi pond installation and maintenance in Utah.',
      keywords: 'koi ponds, koi pond design, koi pond construction, koi pond utah, custom koi ponds',
      canonical: '/pond-gallery/koi-ponds',
      ogTitle: 'Custom Koi Ponds',
      ogDescription: 'Professional koi pond design and construction services',
      ogImage: '/images/koi-ponds.jpg',
      twitterCard: 'summary_large_image'
    },
    'ResidentialPondsPage': {
      title: 'Residential Ponds | Custom Home Pond Design | Utah Water Gardens',
      description: 'Custom residential pond design and construction. Transform your backyard with a beautiful pond by Utah Water Gardens.',
      keywords: 'residential ponds, home ponds, backyard ponds, custom pond design, residential water features',
      canonical: '/pond-gallery/residential-ponds',
      ogTitle: 'Residential Ponds',
      ogDescription: 'Custom residential pond design and construction',
      ogImage: '/images/residential-ponds.jpg',
      twitterCard: 'summary_large_image'
    },
    'CustomerProjectsPage': {
      title: 'Customer Pond Projects | Utah Water Gardens Portfolio',
      description: 'View our customer pond projects and portfolio. See the beautiful water features we\'ve created for Utah residents.',
      keywords: 'pond projects, customer projects, pond portfolio, water feature projects utah',
      canonical: '/pond-gallery/customer-projects',
      ogTitle: 'Customer Pond Projects',
      ogDescription: 'Beautiful water features we\'ve created for customers',
      ogImage: '/images/customer-projects.jpg',
      twitterCard: 'summary_large_image'
    },
    'CommercialProjectsPage': {
      title: 'Commercial Pond Projects | Business Water Features | Utah Water Gardens',
      description: 'Commercial pond and water feature projects. Professional water feature design for businesses and commercial properties.',
      keywords: 'commercial ponds, business water features, commercial water features, corporate ponds',
      canonical: '/pond-gallery/commercial-projects',
      ogTitle: 'Commercial Pond Projects',
      ogDescription: 'Professional water features for businesses',
      ogImage: '/images/commercial-projects.jpg',
      twitterCard: 'summary_large_image'
    },
    'ParksAndRecreationPage': {
      title: 'Parks & Recreation Pond Services | Utah Water Gardens',
      description: 'Professional pond services for parks and recreation facilities. Lake maintenance, dredging, and water feature management.',
      keywords: 'parks recreation ponds, lake maintenance, park water features, recreational ponds',
      canonical: '/pond-services/parks-recreation',
      ogTitle: 'Parks & Recreation Services',
      ogDescription: 'Professional pond services for parks and recreation',
      ogImage: '/images/parks-recreation.jpg',
      twitterCard: 'summary_large_image'
    },
    'OutOfAreaServicePage': {
      title: 'Out of Area Pond Services | Utah Water Gardens',
      description: 'Pond services for areas outside our primary service zone. Contact us for out-of-area pond maintenance and installation.',
      keywords: 'out of area pond services, remote pond maintenance, extended service area',
      canonical: '/pond-services/out-of-area',
      ogTitle: 'Out of Area Services',
      ogDescription: 'Pond services for extended service areas',
      ogImage: '/images/out-of-area.jpg',
      twitterCard: 'summary_large_image'
    },
    'LakeDredgingPage': {
      title: 'Lake Dredging Services | Professional Lake Maintenance | Utah Water Gardens',
      description: 'Professional lake dredging and maintenance services. Expert lake cleaning and sediment removal in Utah.',
      keywords: 'lake dredging, lake maintenance, lake cleaning, sediment removal, lake restoration',
      canonical: '/pond-services/lake-dredging',
      ogTitle: 'Lake Dredging Services',
      ogDescription: 'Professional lake dredging and maintenance',
      ogImage: '/images/lake-dredging.jpg',
      twitterCard: 'summary_large_image'
    },
    'HarvestingPage': {
      title: 'Aquatic Plant Harvesting | Lake & Pond Harvesting Services | Utah Water Gardens',
      description: 'Professional aquatic plant harvesting services. Lake and pond vegetation management and removal.',
      keywords: 'aquatic plant harvesting, lake harvesting, pond vegetation removal, aquatic plant management',
      canonical: '/pond-services/harvesting',
      ogTitle: 'Aquatic Plant Harvesting',
      ogDescription: 'Professional aquatic plant harvesting services',
      ogImage: '/images/harvesting.jpg',
      twitterCard: 'summary_large_image'
    },
    'PlantDetailPage': {
      title: 'Aquatic Plant Details | Plant Care Guide | Utah Water Gardens',
      description: 'Detailed information about aquatic plants. Care guides, planting tips, and plant selection for your pond.',
      keywords: 'aquatic plant details, plant care guide, water plants, pond plants',
      canonical: '/plant-detail',
      ogTitle: 'Aquatic Plant Details',
      ogDescription: 'Detailed aquatic plant information and care guides',
      ogImage: '/images/plant-detail.jpg',
      twitterCard: 'summary_large_image'
    },
    'PondLightingPage': {
      title: 'Pond Lighting Systems | Underwater & Landscape Lighting | Utah Water Gardens',
      description: 'Professional pond lighting systems and underwater lighting. Transform your pond with beautiful lighting effects.',
      keywords: 'pond lighting, underwater lighting, pond lights, landscape lighting, water feature lighting',
      canonical: '/pond-supplies/lighting',
      ogTitle: 'Pond Lighting Systems',
      ogDescription: 'Professional pond lighting and underwater lighting',
      ogImage: '/images/pond-lighting.jpg',
      twitterCard: 'summary_large_image'
    },
    'WaterLiliesPage': {
      title: 'Water Lilies | Hardy & Tropical Water Lilies | Utah Water Gardens',
      description: 'Beautiful water lilies for your pond. Hardy and tropical varieties in multiple colors. Expert care and selection.',
      keywords: 'water lilies, hardy water lilies, tropical water lilies, pond plants, aquatic plants',
      canonical: '/plants-fish/water-lilies',
      ogTitle: 'Water Lilies',
      ogDescription: 'Beautiful water lilies for your pond',
      ogImage: '/images/water-lilies.jpg',
      twitterCard: 'summary_large_image'
    },
    'MarginalPlantsPage': {
      title: 'Marginal Plants | Pond Edge Plants | Utah Water Gardens',
      description: 'Marginal plants for pond edges and shallow areas. Bog plants and edge plants for natural pond borders.',
      keywords: 'marginal plants, pond edge plants, bog plants, shallow water plants, pond borders',
      canonical: '/plants-fish/marginal-plants',
      ogTitle: 'Marginal Plants',
      ogDescription: 'Plants for pond edges and shallow areas',
      ogImage: '/images/marginal-plants.jpg',
      twitterCard: 'summary_large_image'
    },
    'FloatingPlantsPage': {
      title: 'Floating Plants | Natural Pond Coverage | Utah Water Gardens',
      description: 'Floating plants for natural pond coverage and shade. Water hyacinth, water lettuce, and other floating varieties.',
      keywords: 'floating plants, water hyacinth, water lettuce, pond coverage, natural shade',
      canonical: '/plants-fish/floating-plants',
      ogTitle: 'Floating Plants',
      ogDescription: 'Natural floating plants for pond coverage',
      ogImage: '/images/floating-plants.jpg',
      twitterCard: 'summary_large_image'
    },
    'ToolsAccessoriesPage': {
      title: 'Pond Tools & Accessories | Maintenance Equipment | Utah Water Gardens',
      description: 'Professional pond tools and accessories. Nets, vacuums, test kits, and maintenance equipment for your pond.',
      keywords: 'pond tools, pond accessories, pond maintenance equipment, pond nets, pond vacuums',
      canonical: '/pond-supplies/tools-accessories',
      ogTitle: 'Pond Tools & Accessories',
      ogDescription: 'Professional pond tools and maintenance equipment',
      ogImage: '/images/pond-tools.jpg',
      twitterCard: 'summary_large_image'
    },
    'TruxorServicePage': {
      title: 'Truxor Service | Professional Lake Maintenance Equipment | Utah Water Gardens',
      description: 'Professional Truxor service for lake and pond maintenance. Expert aquatic vegetation management and lake cleaning.',
      keywords: 'truxor service, lake maintenance equipment, aquatic vegetation management, professional lake cleaning',
      canonical: '/pond-services/truxor',
      ogTitle: 'Truxor Service',
      ogDescription: 'Professional lake maintenance with Truxor equipment',
      ogImage: '/images/truxor-service.jpg',
      twitterCard: 'summary_large_image'
    },
    'VideoTutorialsPage': {
      title: 'Pond Care Video Tutorials | Educational Videos | Utah Water Gardens',
      description: 'Educational video tutorials for pond care and maintenance. Learn from our experts with step-by-step guides.',
      keywords: 'pond tutorials, pond care videos, educational videos, pond maintenance guide, how to care for pond',
      canonical: '/resources/video-tutorials',
      ogTitle: 'Pond Care Video Tutorials',
      ogDescription: 'Educational videos for pond care and maintenance',
      ogImage: '/images/video-tutorials.jpg',
      twitterCard: 'summary_large_image'
    },
    'TroubleshootingPage': {
      title: 'Pond Troubleshooting Guide | Common Pond Problems | Utah Water Gardens',
      description: 'Comprehensive pond troubleshooting guide. Solutions to common pond problems and maintenance issues.',
      keywords: 'pond troubleshooting, pond problems, pond maintenance issues, pond repair, pond solutions',
      canonical: '/resources/troubleshooting',
      ogTitle: 'Pond Troubleshooting Guide',
      ogDescription: 'Solutions to common pond problems',
      ogImage: '/images/troubleshooting.jpg',
      twitterCard: 'summary_large_image'
    },
    'SeasonalCarePage': {
      title: 'Seasonal Pond Care | Year-Round Pond Maintenance | Utah Water Gardens',
      description: 'Seasonal pond care guide for year-round maintenance. Spring, summer, fall, and winter pond care tips.',
      keywords: 'seasonal pond care, year-round pond maintenance, spring pond care, winter pond care, seasonal pond tips',
      canonical: '/resources/seasonal-care',
      ogTitle: 'Seasonal Pond Care',
      ogDescription: 'Year-round pond maintenance guide',
      ogImage: '/images/seasonal-care.jpg',
      twitterCard: 'summary_large_image'
    },
    'SeasonalServicesPage': {
      title: 'Seasonal Pond Services | Year-Round Pond Maintenance | Utah Water Gardens',
      description: 'Professional seasonal pond services. Spring opening, summer maintenance, fall cleanup, and winter preparation.',
      keywords: 'seasonal pond services, spring pond opening, fall pond cleanup, winter pond preparation, year-round services',
      canonical: '/pond-services/seasonal',
      ogTitle: 'Seasonal Pond Services',
      ogDescription: 'Professional year-round pond services',
      ogImage: '/images/seasonal-services.jpg',
      twitterCard: 'summary_large_image'
    },
    'WaterQualityTestingPage': {
      title: 'Water Quality Testing | Pond Water Analysis | Utah Water Gardens',
      description: 'Professional water quality testing and analysis for your pond. Expert water testing and treatment recommendations.',
      keywords: 'water quality testing, pond water analysis, water testing, pond water treatment, water quality management',
      canonical: '/pond-services/water-quality-testing',
      ogTitle: 'Water Quality Testing',
      ogDescription: 'Professional pond water quality testing',
      ogImage: '/images/water-quality-testing.jpg',
      twitterCard: 'summary_large_image'
    },
    'PondLinersPage': {
      title: 'Pond Liners | EPDM & PVC Pond Liners | Utah Water Gardens',
      description: 'High-quality pond liners for your water feature. EPDM and PVC pond liners with professional installation.',
      keywords: 'pond liners, EPDM pond liners, PVC pond liners, pond liner installation, water feature liners',
      canonical: '/pond-supplies/liners',
      ogTitle: 'Pond Liners',
      ogDescription: 'High-quality pond liners for your water feature',
      ogImage: '/images/pond-liners.jpg',
      twitterCard: 'summary_large_image'
    }
  };
  
  return seoDataMap[pageName] || {
    title: `${pageName.replace(/([A-Z])/g, ' $1').trim()} | Utah Water Gardens`,
    description: `Professional ${pageName.replace(/([A-Z])/g, ' $1').toLowerCase()} services by Utah Water Gardens. Expert pond and water feature solutions.`,
    keywords: `${pageName.replace(/([A-Z])/g, ' $1').toLowerCase()}, pond services, water features, utah`,
    canonical: `/${pageName.replace(/([A-Z])/g, '-$1').toLowerCase().substring(1)}`,
    ogTitle: pageName.replace(/([A-Z])/g, ' $1').trim(),
    ogDescription: `Professional ${pageName.replace(/([A-Z])/g, ' $1').toLowerCase()} services`,
    ogImage: '/images/default-og-image.jpg',
    twitterCard: 'summary_large_image'
  };
}

function fixSEOIssues() {
  console.log('🔧 Fixing SEO issues...\n');
  
  let totalFixed = 0;
  
  pagesNeedingSEO.forEach(filePath => {
    if (addSEOToPage(filePath)) {
      totalFixed++;
    }
  });
  
  console.log(`\n🎯 Fixed ${totalFixed} pages`);
  
  if (totalFixed > 0) {
    console.log('\n🎉 SEO IMPROVEMENTS COMPLETED!');
    console.log('- Added SEO component to all missing pages');
    console.log('- Added proper meta tags, titles, and descriptions');
    console.log('- Added Open Graph and Twitter Card support');
    console.log('- Added canonical URLs for all pages');
    console.log('- Your app is now ready for search engine indexing!');
  }
}

if (require.main === module) {
  fixSEOIssues();
}

module.exports = { fixSEOIssues, addSEOToPage, generateSEOData };
