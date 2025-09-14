#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files that need hero filter/overlay removal
const filesToFix = [
  {
    file: 'frontend/src/components/PageHero.css',
    changes: [
      {
        selector: '.page-hero-overlay',
        current: 'background: rgba(0, 0, 0, 0.6);',
        new: 'background: transparent;',
        reason: 'Remove dark overlay from hero images'
      },
      {
        selector: '.page-hero-content',
        current: 'background: rgba(0, 0, 0, 0.3);',
        new: 'background: rgba(255, 255, 255, 0.1);',
        reason: 'Make content background lighter and more transparent'
      }
    ]
  },
  {
    file: 'frontend/src/pages/BlogPost.css',
    changes: [
      {
        selector: '.hero-overlay',
        current: 'background: rgba(0, 0, 0, 0.6);',
        new: 'background: transparent;',
        reason: 'Remove dark overlay from hero images'
      }
    ]
  },
  {
    file: 'frontend/src/pages/TeamDetailPage.css',
    changes: [
      {
        selector: '.hero-overlay',
        current: 'background: rgba(0, 0, 0, 0.6);',
        new: 'background: transparent;',
        reason: 'Remove dark overlay from hero images'
      }
    ]
  },
  {
    file: 'frontend/src/pages/BlogPage.css',
    changes: [
      {
        selector: '.blog-hero-overlay',
        current: 'background: rgba(0, 0, 0, 0.6);',
        new: 'background: transparent;',
        reason: 'Remove dark overlay from hero images'
      },
      {
        selector: '.hero-overlay',
        current: 'background: rgba(0, 0, 0, 0.6);',
        new: 'background: transparent;',
        reason: 'Remove dark overlay from hero images'
      }
    ]
  }
];

function removeHeroFilters() {
  console.log('🎨 Removing hero image filters and overlays...\n');
  
  let totalFixed = 0;
  
  filesToFix.forEach(({ file, changes }) => {
    const fullPath = path.join(__dirname, '..', file);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${file}`);
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let fileChanged = false;
    
    changes.forEach(({ selector, current, new: newValue, reason }) => {
      // Create regex pattern to find the specific selector with the current value
      const pattern = new RegExp(`(${selector.replace(/\./g, '\\.')}[\\s\\S]*?)${current.replace(/[()]/g, '\\$&')}`, 'g');
      
      if (pattern.test(content)) {
        content = content.replace(pattern, `$1${newValue}`);
        console.log(`✅ Fixed ${selector} in ${file}`);
        console.log(`   ${current} → ${newValue}`);
        console.log(`   Reason: ${reason}`);
        fileChanged = true;
      } else {
        console.log(`⚠️  Pattern not found for ${selector} in ${file}`);
      }
    });
    
    if (fileChanged) {
      fs.writeFileSync(fullPath, content, 'utf8');
      totalFixed++;
    }
    console.log('');
  });
  
  console.log(`🎯 Fixed ${totalFixed} files`);
  
  if (totalFixed > 0) {
    console.log('\n🎉 HERO IMAGES NOW DISPLAY CLEARLY!');
    console.log('- Removed dark overlays from all hero images');
    console.log('- Made content backgrounds more transparent');
    console.log('- Your beautiful hero images are now fully visible!');
  }
}

if (require.main === module) {
  removeHeroFilters();
}

module.exports = { removeHeroFilters };
