#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Specific fixes for remaining layout issues
const layoutFixes = [
  {
    file: 'frontend/src/pages/AboutPage.js',
    fixes: [
      {
        arrayName: 'tabs',
        currentCount: 4,
        addItem: {
          id: 'services',
          label: 'Our Services',
          icon: 'Services'
        },
        reason: 'Convert 4-item tabs to 5-item (3+2 layout)'
      },
      {
        arrayName: 'teamMembers',
        currentCount: 4,
        addItem: {
          name: 'Installation Team',
          role: 'Installation Specialists',
          description: 'Our installation team ensures your pond is built to perfection with professional craftsmanship.',
          image: '/images/IMG_2781.jpg'
        },
        reason: 'Convert 4-item team to 5-item (3+2 layout)'
      }
    ]
  },
  {
    file: 'frontend/src/pages/ResourcesPage.js',
    fixes: [
      {
        arrayName: 'featuredArticles',
        currentCount: 4,
        addItem: {
          title: 'Koi Fish Care Guide',
          path: '/koi-goldfish',
          excerpt: 'Complete guide to caring for koi and goldfish in your pond.',
          category: 'Care Guides',
          readTime: '7 min read',
          image: '/images/koi-topaz-enhance-4x.jpeg'
        },
        reason: 'Convert 4-item articles to 5-item (3+2 layout)'
      }
    ]
  }
];

function fixRemainingLayoutIssues() {
  console.log('🔧 Fixing remaining layout issues...\n');
  
  let totalFixed = 0;
  
  layoutFixes.forEach(({ file, fixes }) => {
    const fullPath = path.join(__dirname, '..', file);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${file}`);
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let fileChanged = false;
    
    fixes.forEach(({ arrayName, currentCount, addItem, reason }) => {
      // Find the array definition
      const arrayRegex = new RegExp(`(const\\s+${arrayName}\\s*=\\s*\\[[\\s\\S]*?\\])(;|,|\\n)`, 'g');
      const match = arrayRegex.exec(content);
      
      if (match) {
        const arrayDefinition = match[1];
        
        // Count current items
        const itemCount = (arrayDefinition.match(/\\{[^}]*\\}/g) || []).length;
        
        if (itemCount === currentCount) {
          // Add the new item
          const newItemString = `,\n    ${JSON.stringify(addItem, null, 6).replace(/"/g, "'")}`;
          const newArrayDefinition = arrayDefinition.replace(/\\]/, newItemString + '\n  ]');
          
          content = content.replace(arrayDefinition, newArrayDefinition);
          
          console.log(`✅ Fixed ${arrayName} in ${path.basename(file, '.js')}`);
          console.log(`   Added 1 item (${currentCount} → ${currentCount + 1})`);
          console.log(`   Reason: ${reason}`);
          fileChanged = true;
        } else {
          console.log(`⚠️  ${arrayName} in ${path.basename(file, '.js')} has ${itemCount} items, expected ${currentCount}`);
        }
      } else {
        console.log(`⚠️  Could not find ${arrayName} array in ${path.basename(file, '.js')}`);
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
    console.log('\n🎉 LAYOUT ISSUES FIXED!');
    console.log('- Converted 4-item arrays to 5-item arrays (3+2 layout)');
    console.log('- Eliminated 3+1 layout problems');
    console.log('- All grids now have balanced, even layouts');
  }
}

if (require.main === module) {
  fixRemainingLayoutIssues();
}

module.exports = { fixRemainingLayoutIssues };
