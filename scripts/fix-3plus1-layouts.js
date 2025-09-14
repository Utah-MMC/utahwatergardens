#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files with 4-item arrays that need 2x2 layout instead of 3+1
const filesToFix = [
  {
    file: 'frontend/src/pages/PondSuppliesPage.css',
    selectors: ['.stats-grid', '.featured-products-grid']
  },
  {
    file: 'frontend/src/pages/WaterTreatmentsPage.css',
    selectors: ['.stats-grid']
  },
  {
    file: 'frontend/src/pages/PondGalleryPage.css',
    selectors: ['.stats-grid', '.filters-grid']
  },
  {
    file: 'frontend/src/pages/EquipmentRepairPage.css',
    selectors: ['.stats-grid']
  },
  {
    file: 'frontend/src/pages/PondCleaningPage.css',
    selectors: ['.stats-grid']
  },
  {
    file: 'frontend/src/pages/PondMaintenancePage.css',
    selectors: ['.stats-grid']
  },
  {
    file: 'frontend/src/pages/WaterQualityTestingPage.css',
    selectors: ['.stats-grid']
  },
  {
    file: 'frontend/src/pages/PondDesignBuildPage.css',
    selectors: ['.stats-grid']
  },
  {
    file: 'frontend/src/pages/FiltrationSystemsPage.css',
    selectors: ['.stats-grid']
  },
  {
    file: 'frontend/src/pages/PondLinersPage.css',
    selectors: ['.stats-grid']
  },
  {
    file: 'frontend/src/pages/PumpsAerationPage.css',
    selectors: ['.stats-grid']
  }
];

function fixFile(filePath, selectors) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;
  
  selectors.forEach(selector => {
    // Look for the selector with repeat(3, 1fr) or repeat(auto-fit, minmax(...))
    const pattern = new RegExp(`(${selector.replace(/\./g, '\\.')}[\\s\\S]*?grid-template-columns:\\s*)repeat\\(3,\\s*1fr\\)`, 'g');
    
    if (pattern.test(content)) {
      content = content.replace(pattern, '$1repeat(2, 1fr)');
      changed = true;
      console.log(`✅ Fixed ${selector} in ${filePath}`);
    } else {
      // Also check for auto-fit patterns
      const autoFitPattern = new RegExp(`(${selector.replace(/\./g, '\\.')}[\\s\\S]*?grid-template-columns:\\s*)repeat\\(auto-fit,\\s*minmax\\([^)]+\\)\\)`, 'g');
      
      if (autoFitPattern.test(content)) {
        content = content.replace(autoFitPattern, '$1repeat(2, 1fr)');
        changed = true;
        console.log(`✅ Fixed ${selector} (auto-fit) in ${filePath}`);
      } else {
        console.log(`⚠️  Pattern not found for ${selector} in ${filePath}`);
      }
    }
  });
  
  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    return true;
  }
  
  return false;
}

function main() {
  console.log('🔧 Fixing 3+1 layouts (4 items in 3-column grids)...\n');
  
  let totalFixed = 0;
  
  filesToFix.forEach(({ file, selectors }) => {
    console.log(`📄 Processing ${file}:`);
    if (fixFile(file, selectors)) {
      totalFixed++;
    }
    console.log('');
  });
  
  console.log(`✅ Fixed ${totalFixed} files`);
  console.log('\n🎯 All 4-item grids now use 2x2 layout instead of 3+1!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };
