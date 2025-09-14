#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to check for 2+1 layouts (3 items in 2-column grids)
const filesToCheck = [
  'frontend/src/pages/ParksAndRecreationPage.js',
  'frontend/src/pages/ResourcesPage.js',
  'frontend/src/pages/FAQPage.js',
  'frontend/src/pages/PondServicesPage.js',
  'frontend/src/pages/ContactPage.js',
  'frontend/src/pages/AboutPage.js'
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
  console.log('🔍 Analyzing 2+1 layouts (3 items in 2-column grids)...\n');
  
  const problematicGrids = [];
  
  filesToCheck.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    const arrays = analyzeArrayItems(fullPath);
    
    if (Object.keys(arrays).length > 0) {
      console.log(`📄 ${filePath}:`);
      Object.entries(arrays).forEach(([name, count]) => {
        console.log(`  ${name}: ${count} items`);
        
        // Check for 3 items (2+1 layout)
        if (count === 3) {
          problematicGrids.push({
            file: filePath,
            array: name,
            count: count,
            issue: '3 items in 2-column grid = 2+1 layout'
          });
        }
      });
      console.log('');
    }
  });
  
  if (problematicGrids.length > 0) {
    console.log('⚠️  POTENTIAL 2+1 LAYOUTS FOUND:\n');
    problematicGrids.forEach(grid => {
      console.log(`❌ ${grid.file}`);
      console.log(`   Array: ${grid.array} (${grid.count} items)`);
      console.log(`   Issue: ${grid.issue}`);
      console.log('');
    });
    
    console.log('🔧 RECOMMENDATIONS:');
    console.log('- 3 items in 2-column grid creates 2+1 layout');
    console.log('- Consider if this is intentional or needs fixing');
    console.log('- Options: Keep as-is, change to 1 column, or add 4th item');
  } else {
    console.log('✅ No obvious 2+1 layout issues found!');
  }
}

if (require.main === module) {
  main();
}

module.exports = { analyzeArrayItems };
