#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function findProblematicGrids() {
  console.log('🔍 Scanning for problematic grid layouts...\n');
  
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
    
    // Look for grids with 3 columns that might have 4 items
    const threeColumnGrids = content.match(/\.([\w-]+)\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*1fr\)[^}]*\}/g);
    
    if (threeColumnGrids) {
      threeColumnGrids.forEach(grid => {
        const className = grid.match(/\.([\w-]+)/)?.[1];
        if (className) {
          // Check if this might be a stats or similar grid that could have 4 items
          if (className.includes('stats') || 
              className.includes('featured') || 
              className.includes('hero') ||
              className.includes('intro') ||
              className.includes('quick') ||
              className.includes('filters')) {
            problematicGrids.push({
              file: relativePath,
              className: className,
              issue: '3-column grid that might have 4 items (3+1 layout)',
              suggestion: 'Change to repeat(2, 1fr) for 2x2 layout'
            });
          }
        }
      });
    }
    
    // Look for grids with 2 columns that might have 3 items
    const twoColumnGrids = content.match(/\.([\w-]+)\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*1fr\)[^}]*\}/g);
    
    if (twoColumnGrids) {
      twoColumnGrids.forEach(grid => {
        const className = grid.match(/\.([\w-]+)/)?.[1];
        if (className) {
          // Check if this might be a grid that could have 3 items
          if (className.includes('stats') || 
              className.includes('featured') || 
              className.includes('hero') ||
              className.includes('intro') ||
              className.includes('quick') ||
              className.includes('filters') ||
              className.includes('benefits') ||
              className.includes('services')) {
            problematicGrids.push({
              file: relativePath,
              className: className,
              issue: '2-column grid that might have 3 items (2+1 layout)',
              suggestion: 'Consider if 3 items need different layout'
            });
          }
        }
      });
    }
  });
  
  if (problematicGrids.length > 0) {
    console.log('⚠️  POTENTIALLY PROBLEMATIC GRIDS FOUND:\n');
    problematicGrids.forEach(grid => {
      console.log(`❌ ${grid.file}`);
      console.log(`   Class: .${grid.className}`);
      console.log(`   Issue: ${grid.issue}`);
      console.log(`   Fix: ${grid.suggestion}`);
      console.log('');
    });
  } else {
    console.log('✅ No obviously problematic grid layouts found!');
  }
  
  return problematicGrids;
}

if (require.main === module) {
  findProblematicGrids();
}

module.exports = { findProblematicGrids };
