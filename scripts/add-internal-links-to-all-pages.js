const fs = require('fs');
const path = require('path');

// Internal links configuration based on the CSV analysis
const internalLinks = {
  // High-priority target pages from the CSV
  contact: { url: '/contact', anchor: 'utah water gardens' },
  plantsFish: { url: '/plants-fish', anchor: 'utah water gardens' },
  pondSupplies: { url: '/pondsupplies', anchor: 'utah water gardens' },
  aquaticPlants: { url: '/aquatic-plants', anchor: 'utah water gardens' },
  fishKoi: { url: '/fish-koi', anchor: 'utah water gardens' },
  homepage: { url: '/', anchor: 'utah water gardens' }
};

// Pages that need internal links added
const pagesToUpdate = [
  // Main pages
  'frontend/src/pages/HomePage.js',
  'frontend/src/pages/ContactPage.js', 
  'frontend/src/pages/PlantsFishPage.js',
  'frontend/src/pages/PondSuppliesPage.js',
  'frontend/src/pages/AquaticPlantsPage.js',
  'frontend/src/pages/KoiGoldfishPage.js',
  'frontend/src/pages/PondServicesPage.js',
  'frontend/src/pages/PondCleaningPage.js',
  'frontend/src/pages/PondMaintenancePage.js',
  'frontend/src/pages/PondDesignBuildPage.js',
  'frontend/src/pages/WaterQualityTestingPage.js',
  'frontend/src/pages/SeasonalCarePage.js',
  'frontend/src/pages/ResourcesPage.js',
  'frontend/src/pages/AboutPage.js',
  'frontend/src/pages/PondGalleryPage.js',
  'frontend/src/pages/FreeEstimatePage.js',
  'frontend/src/pages/FAQPage.js',
  'frontend/src/pages/BlogPage.js',
  'frontend/src/pages/ShopPage.js',
  'frontend/src/pages/ServicesPage.js',
  'frontend/src/pages/HarvestingPage.js',
  'frontend/src/pages/PondDredgingPage.js',
  'frontend/src/pages/LakeDredgingPage.js',
  'frontend/src/pages/TruxorServicePage.js',
  'frontend/src/pages/EquipmentRepairPage.js',
  'frontend/src/pages/FiltrationSystemsPage.js',
  'frontend/src/pages/PumpsAerationPage.js',
  'frontend/src/pages/PondLinersPage.js',
  'frontend/src/pages/PondLightingPage.js',
  'frontend/src/pages/ToolsAccessoriesPage.js',
  'frontend/src/pages/WaterTreatmentsPage.js',
  'frontend/src/pages/FloatingPlantsPage.js',
  'frontend/src/pages/MarginalPlantsPage.js',
  'frontend/src/pages/WaterLiliesPage.js',
  'frontend/src/pages/CareGuidesPage.js',
  'frontend/src/pages/PondTipsTricksPage.js',
  'frontend/src/pages/VideoTutorialsPage.js',
  'frontend/src/pages/TroubleshootingPage.js',
  'frontend/src/pages/SeasonalServicesPage.js',
  'frontend/src/pages/CommercialProjectsPage.js',
  'frontend/src/pages/CustomerProjectsPage.js',
  'frontend/src/pages/ResidentialPondsPage.js',
  'frontend/src/pages/KoiPondsPage.js',
  'frontend/src/pages/WaterFeaturesPage.js',
  'frontend/src/pages/ParksAndRecreationPage.js',
  'frontend/src/pages/OutOfAreaServicePage.js',
  'frontend/src/pages/ExpertTeamPage.js',
  'frontend/src/pages/PlantExpertsPage.js',
  'frontend/src/pages/MaintenanceCrewPage.js',
  'frontend/src/pages/BeforeAfterPage.js',
  'frontend/src/pages/PlantDetailPage.js',
  'frontend/src/pages/TeamDetailPage.js',
  'frontend/src/pages/BlogPost.js',
  'frontend/src/pages/SimpleCityPage.js',
  'frontend/src/pages/TestCityPage.js'
];

// Templates that need internal links added
const templatesToUpdate = [
  'frontend/src/components/CityPageTemplate.js',
  'frontend/src/components/PondDredgingTemplate.js',
  'frontend/src/components/PondHarvestingTemplate.js'
];

// Function to add internal links to a file
function addInternalLinksToFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if internal links already exist
    if (content.includes('Internal Links for SEO') || content.includes('display: \'none\'')) {
      console.log(`⏭️  Internal links already exist in: ${filePath}`);
      return false;
    }

    // Find the end of the component to add internal links
    let newContent = content;
    
    // Look for the export statement and add internal links before it
    const exportMatch = content.match(/(\s*)(export default \w+;?\s*)$/m);
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
      console.log(`❌ Could not find export statement in: ${filePath}`);
      return false;
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
    console.log(`✅ Added internal links to: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

// Function to add internal links to templates (different approach)
function addInternalLinksToTemplate(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if internal links already exist
    if (content.includes('Internal Links for SEO') || content.includes('display: \'none\'')) {
      console.log(`⏭️  Internal links already exist in: ${filePath}`);
      return false;
    }

    let newContent = content;
    
    // For templates, look for the CTA component and add internal links after it
    const ctaMatch = content.match(/(\s*)(<CTA \/>)/);
    if (ctaMatch) {
      const ctaComponent = ctaMatch[0];
      const indentation = ctaMatch[1];
      
      // Create internal links component
      const internalLinksComponent = `
${indentation}        {/* Internal Links for SEO */}
${indentation}        <div style={{ display: 'none' }}>
${indentation}          <Link to="${internalLinks.contact.url}">${internalLinks.contact.anchor}</Link>
${indentation}          <Link to="${internalLinks.plantsFish.url}">${internalLinks.plantsFish.anchor}</Link>
${indentation}          <Link to="${internalLinks.pondSupplies.url}">${internalLinks.pondSupplies.anchor}</Link>
${indentation}          <Link to="${internalLinks.aquaticPlants.url}">${internalLinks.aquaticPlants.anchor}</Link>
${indentation}          <Link to="${internalLinks.fishKoi.url}">${internalLinks.fishKoi.anchor}</Link>
${indentation}          <Link to="${internalLinks.homepage.url}">${internalLinks.homepage.anchor}</Link>
${indentation}        </div>`;
      
      newContent = content.replace(ctaMatch[0], `${ctaComponent}${internalLinksComponent}`);
    } else {
      console.log(`❌ Could not find CTA component in: ${filePath}`);
      return false;
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
    console.log(`✅ Added internal links to template: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error updating template ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🚀 Starting internal links implementation across all pages...\n');
  
  let successCount = 0;
  let totalCount = 0;

  // Process regular pages
  console.log('📄 Processing regular pages...');
  pagesToUpdate.forEach(filePath => {
    totalCount++;
    if (addInternalLinksToFile(filePath)) {
      successCount++;
    }
  });

  // Process templates
  console.log('\n📋 Processing templates...');
  templatesToUpdate.forEach(filePath => {
    totalCount++;
    if (addInternalLinksToTemplate(filePath)) {
      successCount++;
    }
  });

  console.log(`\n🎉 Internal links implementation complete!`);
  console.log(`✅ Successfully updated: ${successCount} files`);
  console.log(`❌ Failed to update: ${totalCount - successCount} files`);
  console.log(`📊 Total files processed: ${totalCount}`);
}

// Run the script
main();
