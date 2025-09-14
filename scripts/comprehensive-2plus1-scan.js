#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function findAllTwoPlusOneLayouts() {
  console.log('🔍 Comprehensive scan for ALL 2+1 layouts across the site...\n');
  
  const problematicGrids = [];
  
  // Find all CSS files
  const cssFiles = [];
  function findCSSFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        findCSSFiles(filePath);
      } else if (file.endsWith('.css')) {
        cssFiles.push(filePath);
      }
    });
  }
  
  findCSSFiles(path.join(__dirname, '..', 'frontend', 'src'));
  
  cssFiles.forEach(cssFile => {
    const content = fs.readFileSync(cssFile, 'utf8');
    const relativePath = path.relative(path.join(__dirname, '..'), cssFile);
    
    // Look for grids with 2 columns that might have 3 items
    const twoColumnGrids = content.match(/\.([\w-]+)\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*1fr\)[^}]*\}/g);
    
    if (twoColumnGrids) {
      twoColumnGrids.forEach(grid => {
        const className = grid.match(/\.([\w-]+)/)?.[1];
        if (className) {
          // Check if this might be a grid that could have 3 items
          if (className.includes('grid') || 
              className.includes('systems') || 
              className.includes('packages') ||
              className.includes('services') ||
              className.includes('benefits') ||
              className.includes('features') ||
              className.includes('products') ||
              className.includes('categories') ||
              className.includes('items') ||
              className.includes('cards') ||
              className.includes('sections') ||
              className.includes('options') ||
              className.includes('types') ||
              className.includes('methods') ||
              className.includes('solutions') ||
              className.includes('tools') ||
              className.includes('equipment') ||
              className.includes('accessories') ||
              className.includes('components') ||
              className.includes('elements')) {
            problematicGrids.push({
              file: relativePath,
              className: className,
              issue: '2-column grid that might have 3 items (2+1 layout)',
              suggestion: 'Change to repeat(3, 1fr) for balanced layout'
            });
          }
        }
      });
    }
  });
  
  if (problematicGrids.length > 0) {
    console.log('⚠️  POTENTIAL 2+1 LAYOUTS FOUND:\n');
    problematicGrids.forEach(grid => {
      console.log(`❌ ${grid.file}`);
      console.log(`   Class: .${grid.className}`);
      console.log(`   Issue: ${grid.issue}`);
      console.log(`   Fix: ${grid.suggestion}`);
      console.log('');
    });
    
    console.log(`🔢 Total potential 2+1 layouts: ${problematicGrids.length}`);
    console.log('\n🔧 RECOMMENDED ACTION:');
    console.log('- Review each grid to confirm it has 3 items');
    console.log('- Change confirmed 2+1 layouts to repeat(3, 1fr)');
    console.log('- This will create balanced 3-column layouts');
  } else {
    console.log('✅ No potential 2+1 layouts found!');
  }
  
  return problematicGrids;
}

if (require.main === module) {
  findAllTwoPlusOneLayouts();
}

module.exports = { findAllTwoPlusOneLayouts };
