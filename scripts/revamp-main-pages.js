#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Main pages that need revamping to fill empty card spaces
const pagesToRevamp = [
  {
    file: 'frontend/src/pages/HomePage.js',
    description: 'Home page - add more content sections',
    needsWork: true
  },
  {
    file: 'frontend/src/pages/PondServicesPage.js',
    description: 'Pond services page - fill empty spaces',
    needsWork: true
  },
  {
    file: 'frontend/src/pages/PondSuppliesPage.js',
    description: 'Pond supplies page - add more categories',
    needsWork: true
  },
  {
    file: 'frontend/src/pages/AboutPage.js',
    description: 'About page - add more team members or services',
    needsWork: true
  },
  {
    file: 'frontend/src/pages/ContactPage.js',
    description: 'Contact page - add more contact methods',
    needsWork: true
  },
  {
    file: 'frontend/src/pages/BlogPage.js',
    description: 'Blog page - add more featured posts',
    needsWork: true
  },
  {
    file: 'frontend/src/pages/ShopPage.js',
    description: 'Shop page - add more product categories',
    needsWork: true
  },
  {
    file: 'frontend/src/pages/ResourcesPage.js',
    description: 'Resources page - add more resource categories',
    needsWork: true
  }
];

function analyzePageLayout(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    return { exists: false };
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  const pageName = path.basename(filePath, '.js');
  
  // Count arrays that might be used in grids
  const arrayMatches = content.match(/const\s+(\w+)\s*=\s*\[[\s\S]*?\]/g) || [];
  const arrays = {};
  
  arrayMatches.forEach(match => {
    const arrayName = match.match(/const\s+(\w+)\s*=/)?.[1];
    if (arrayName) {
      const itemCount = (match.match(/\{[^}]*\}/g) || []).length;
      if (itemCount > 0) {
        arrays[arrayName] = itemCount;
      }
    }
  });
  
  // Look for grid classes
  const gridClasses = (content.match(/className="[^"]*grid[^"]*"/g) || []).length;
  
  return {
    exists: true,
    pageName,
    arrays,
    gridClasses,
    totalArrays: Object.keys(arrays).length
  };
}

function revampMainPages() {
  console.log('🔄 Revamping main pages to fill empty card spaces...\n');
  
  const results = [];
  
  pagesToRevamp.forEach(({ file, description, needsWork }) => {
    const analysis = analyzePageLayout(file);
    
    if (!analysis.exists) {
      console.log(`❌ File not found: ${file}`);
      return;
    }
    
    results.push({
      file,
      description,
      analysis,
      needsWork
    });
    
    console.log(`📄 ${analysis.pageName}:`);
    console.log(`   Description: ${description}`);
    console.log(`   Arrays found: ${analysis.totalArrays}`);
    
    if (analysis.totalArrays > 0) {
      console.log(`   Array details:`);
      Object.entries(analysis.arrays).forEach(([name, count]) => {
        console.log(`     ${name}: ${count} items`);
        
        // Identify potential 2+1 or 3+1 layouts
        if (count === 2) {
          console.log(`       ⚠️  Potential 2+1 layout (2 items in 2-column grid)`);
        } else if (count === 4) {
          console.log(`       ⚠️  Potential 3+1 layout (4 items in 3-column grid)`);
        } else if (count === 5) {
          console.log(`       ⚠️  Potential 3+2 layout (5 items in 3-column grid)`);
        }
      });
    }
    
    console.log(`   Grid classes: ${analysis.gridClasses}`);
    console.log('');
  });
  
  // Summary
  console.log('📊 ANALYSIS SUMMARY:\n');
  
  const pagesWithIssues = results.filter(r => {
    return Object.values(r.analysis.arrays).some(count => 
      count === 2 || count === 4 || count === 5
    );
  });
  
  console.log(`✅ Pages analyzed: ${results.length}`);
  console.log(`⚠️  Pages with potential layout issues: ${pagesWithIssues.length}`);
  
  if (pagesWithIssues.length > 0) {
    console.log('\n🔧 PAGES NEEDING REVAMPING:');
    pagesWithIssues.forEach(({ analysis, description }) => {
      console.log(`   ${analysis.pageName}: ${description}`);
    });
    
    console.log('\n💡 RECOMMENDATIONS:');
    console.log('- Add more items to arrays with 2, 4, or 5 items');
    console.log('- Consider changing grid layouts to accommodate item counts');
    console.log('- Add new content sections to fill empty spaces');
    console.log('- Ensure all grids have balanced, even layouts');
  } else {
    console.log('\n🎉 ALL PAGES HAVE BALANCED LAYOUTS!');
  }
  
  return results;
}

if (require.main === module) {
  revampMainPages();
}

module.exports = { revampMainPages, analyzePageLayout };
