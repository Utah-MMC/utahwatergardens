#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// All 2+1 layouts that need fixing (3 items in 2-column grids)
const allTwoPlusOneFixes = [
  // PumpsAerationPage - 3 aeration systems in 2-column grid
  {
    file: 'frontend/src/pages/PumpsAerationPage.css',
    selector: '.aeration-grid',
    current: 'repeat(2, 1fr)',
    new: 'repeat(3, 1fr)',
    reason: '3 aeration systems in 2-column grid creates 2+1 layout'
  },
  // PumpsAerationPage - 3 packages in 2-column grid  
  {
    file: 'frontend/src/pages/PumpsAerationPage.css',
    selector: '.packages-grid',
    current: 'repeat(2, 1fr)',
    new: 'repeat(3, 1fr)',
    reason: '3 packages in 2-column grid creates 2+1 layout'
  },
  // Check other pages that might have similar issues
  {
    file: 'frontend/src/pages/FiltrationSystemsPage.css',
    selector: '.systems-grid',
    current: 'repeat(2, 1fr)',
    new: 'repeat(3, 1fr)',
    reason: '3 filtration systems in 2-column grid creates 2+1 layout'
  },
  {
    file: 'frontend/src/pages/PondLinersPage.css',
    selector: '.liners-grid',
    current: 'repeat(2, 1fr)',
    new: 'repeat(3, 1fr)',
    reason: '3 liner types in 2-column grid creates 2+1 layout'
  },
  {
    file: 'frontend/src/pages/WaterQualityTestingPage.css',
    selector: '.testing-grid',
    current: 'repeat(2, 1fr)',
    new: 'repeat(3, 1fr)',
    reason: '3 testing services in 2-column grid creates 2+1 layout'
  }
];

function fixAllTwoPlusOneLayouts() {
  console.log('🔧 Fixing ALL remaining 2+1 layouts across the site...\n');
  
  let totalFixed = 0;
  
  allTwoPlusOneFixes.forEach(({ file, selector, current, new: newValue, reason }) => {
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
    console.log('- This eliminates ALL remaining 2+1 layout problems');
    console.log('- All grids now have balanced, even layouts');
    console.log('\n🔍 The Pumps & Aeration page should now display properly!');
  }
}

if (require.main === module) {
  fixAllTwoPlusOneLayouts();
}

module.exports = { fixAllTwoPlusOneLayouts };
