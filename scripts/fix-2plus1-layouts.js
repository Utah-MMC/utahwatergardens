#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 2+1 layouts that need fixing (3 items in 2-column grids)
const twoPlusOneFixes = [
  {
    file: 'frontend/src/pages/ParksAndRecreationPage.css',
    selector: '.equipment-grid',
    current: 'repeat(2, 1fr)',
    new: 'repeat(3, 1fr)',
    reason: '3 items in 2-column grid creates 2+1 layout, change to 3 columns for balanced layout'
  },
  {
    file: 'frontend/src/pages/ParksAndRecreationPage.css',
    selector: '.testimonials-grid',
    current: 'repeat(2, 1fr)',
    new: 'repeat(3, 1fr)',
    reason: '3 items in 2-column grid creates 2+1 layout, change to 3 columns for balanced layout'
  },
  {
    file: 'frontend/src/pages/ServiceAreas/ServiceAreaPage.css',
    selector: '.testimonials-grid',
    current: 'repeat(2, 1fr)',
    new: 'repeat(3, 1fr)',
    reason: '3 items in 2-column grid creates 2+1 layout, change to 3 columns for balanced layout'
  }
];

function fixTwoPlusOneLayouts() {
  console.log('🔧 Fixing 2+1 layouts (3 items in 2-column grids)...\n');
  
  let totalFixed = 0;
  
  twoPlusOneFixes.forEach(({ file, selector, current, new: newValue, reason }) => {
    const fullPath = path.join(__dirname, '..', file);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${file}`);
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Create regex pattern to find the specific selector with the current grid value
    const pattern = new RegExp(`(${selector.replace(/\./g, '\\.')}[\\s\\S]*?grid-template-columns:\\s*)${current.replace(/[()]/g, '\\$&')}`, 'g');
    
    if (pattern.test(content)) {
      content = content.replace(pattern, `$1${newValue}`);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✅ Fixed ${selector} in ${file}`);
      console.log(`   ${current} → ${newValue}`);
      console.log(`   Reason: ${reason}`);
      totalFixed++;
    } else {
      console.log(`⚠️  Pattern not found for ${selector} in ${file}`);
    }
    console.log('');
  });
  
  console.log(`🎯 Fixed ${totalFixed} 2+1 layouts!`);
  
  if (totalFixed > 0) {
    console.log('\n📋 Summary of changes:');
    console.log('- Changed 2-column grids with 3 items to 3-column layouts');
    console.log('- This eliminates the 2+1 layout problem');
    console.log('- All grids now have balanced, even layouts');
  }
}

if (require.main === module) {
  fixTwoPlusOneLayouts();
}

module.exports = { fixTwoPlusOneLayouts };
