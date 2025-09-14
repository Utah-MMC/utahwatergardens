#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Critical 3+1 layouts that need immediate fixing
const criticalFixes = [
  {
    file: 'frontend/src/components/CityPageTemplate.css',
    selector: '.intro-images',
    current: 'repeat(3, 1fr)',
    new: 'repeat(2, 1fr)',
    reason: '4 items in 3-column grid creates 3+1 layout'
  },
  {
    file: 'frontend/src/pages/ContactPage.css',
    selector: '.hero-contact-methods',
    current: 'repeat(3, 1fr)',
    new: 'repeat(2, 1fr)',
    reason: '4 items in 3-column grid creates 3+1 layout'
  },
  {
    file: 'frontend/src/pages/PlantsFishPage.css',
    selector: '.intro-images',
    current: 'repeat(3, 1fr)',
    new: 'repeat(2, 1fr)',
    reason: '4 items in 3-column grid creates 3+1 layout'
  },
  {
    file: 'frontend/src/pages/ShopPage.css',
    selector: '.intro-images',
    current: 'repeat(3, 1fr)',
    new: 'repeat(2, 1fr)',
    reason: '4 items in 3-column grid creates 3+1 layout'
  }
];

function fixCriticalLayouts() {
  console.log('🔧 Fixing critical 3+1 layouts...\n');
  
  let totalFixed = 0;
  
  criticalFixes.forEach(({ file, selector, current, new: newValue, reason }) => {
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
  
  console.log(`🎯 Fixed ${totalFixed} critical 3+1 layouts!`);
  
  if (totalFixed > 0) {
    console.log('\n📋 Summary of changes:');
    console.log('- Changed 3-column grids with 4 items to 2x2 layouts');
    console.log('- This eliminates the 3+1 layout problem');
    console.log('- All grids now have balanced, even layouts');
  }
}

if (require.main === module) {
  fixCriticalLayouts();
}

module.exports = { fixCriticalLayouts };
