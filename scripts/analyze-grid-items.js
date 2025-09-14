#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to analyze
const jsFiles = [
  'frontend/src/pages/PondSuppliesPage.js',
  'frontend/src/pages/WaterTreatmentsPage.js',
  'frontend/src/pages/PondGalleryPage.js',
  'frontend/src/pages/EquipmentRepairPage.js',
  'frontend/src/pages/CareGuidesPage.js',
  'frontend/src/pages/PondCleaningPage.js',
  'frontend/src/pages/PondMaintenancePage.js',
  'frontend/src/pages/WaterQualityTestingPage.js',
  'frontend/src/pages/PondDesignBuildPage.js',
  'frontend/src/pages/FiltrationSystemsPage.js',
  'frontend/src/pages/PondLinersPage.js',
  'frontend/src/pages/PumpsAerationPage.js',
  'frontend/src/components/CityPageTemplate.js',
  'frontend/src/components/PondDredgingTemplate.js',
  'frontend/src/components/PondHarvestingTemplate.js'
];

function analyzeArrayItems(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const arrays = {};
  
  // Find const arrays
  const constMatches = content.match(/const\s+(\w+)\s*=\s*\[[\s\S]*?\]/g);
  if (constMatches) {
    constMatches.forEach(match => {
      const arrayName = match.match(/const\s+(\w+)\s*=/)?.[1];
      if (arrayName) {
        // Count items by looking for object patterns
        const itemCount = (match.match(/\{[^}]*\}/g) || []).length;
        if (itemCount > 0) {
          arrays[arrayName] = itemCount;
        }
      }
    });
  }
  
  return arrays;
}

function main() {
  console.log('🔍 Analyzing grid item counts...\n');
  
  const problematicGrids = [];
  
  jsFiles.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    const arrays = analyzeArrayItems(fullPath);
    
    if (Object.keys(arrays).length > 0) {
      console.log(`📄 ${filePath}:`);
      Object.entries(arrays).forEach(([name, count]) => {
        console.log(`  ${name}: ${count} items`);
        
        // Check for problematic counts
        if (count === 4) {
          problematicGrids.push({
            file: filePath,
            array: name,
            count: count,
            issue: '4 items in 3-column grid = 3+1 layout'
          });
        } else if (count === 5) {
          problematicGrids.push({
            file: filePath,
            array: name,
            count: count,
            issue: '5 items in 3-column grid = 3+2 layout'
          });
        } else if (count === 7) {
          problematicGrids.push({
            file: filePath,
            array: name,
            count: count,
            issue: '7 items in 3-column grid = 3+3+1 layout'
          });
        }
      });
      console.log('');
    }
  });
  
  if (problematicGrids.length > 0) {
    console.log('⚠️  PROBLEMATIC GRIDS FOUND:\n');
    problematicGrids.forEach(grid => {
      console.log(`❌ ${grid.file}`);
      console.log(`   Array: ${grid.array} (${grid.count} items)`);
      console.log(`   Issue: ${grid.issue}`);
      console.log('');
    });
    
    console.log('🔧 RECOMMENDED FIXES:');
    console.log('- 4 items: Change to repeat(2, 1fr) for 2x2 layout');
    console.log('- 5 items: Change to repeat(3, 1fr) for 3+2 layout (acceptable)');
    console.log('- 7 items: Change to repeat(3, 1fr) for 3+3+1 layout (acceptable)');
  } else {
    console.log('✅ No problematic grid layouts found!');
  }
}

if (require.main === module) {
  main();
}

module.exports = { analyzeArrayItems };
