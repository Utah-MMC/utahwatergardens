#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files that need fixing
const filesToFix = [
  'SeasonalCarePage.js',
  'SeasonalServicesPage.js', 
  'ToolsAccessoriesPage.js',
  'TruxorServicePage.js'
];

function fixFile(fileName) {
  const filePath = path.join(__dirname, '..', 'frontend/src/pages', fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${fileName}`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the pattern where array declaration is inside JSX
  const brokenPattern = /return \(\s*<>\s*<SEO[^>]*\/>\s*<div[^>]*>\s*const\s+(\w+)\s*=\s*\[/;
  const match = content.match(brokenPattern);
  
  if (match) {
    const arrayName = match[1];
    const seoMatch = content.match(/<SEO[^>]*\/>/);
    
    if (seoMatch) {
      const seoComponent = seoMatch[0];
      
      // Remove broken SEO from inside JSX
      content = content.replace(/<SEO[^>]*\/>\s*<div[^>]*>\s*const\s+\w+\s*=\s*\[/, `const ${arrayName} = [`);
      
      // Add SEO component to return statement
      const returnMatch = content.match(/(\s+return\s*\(\s*<div[^>]*>)/);
      if (returnMatch) {
        const pageName = fileName.replace('.js', '').toLowerCase().replace(/([A-Z])/g, '-$1').substring(1);
        const replacement = `\n  return (\n    <>\n      ${seoComponent}\n      <div className="${pageName}-page">`;
        content = content.replace(returnMatch[1], replacement);
      }
      
      // Ensure proper closing
      if (!content.includes('</>\n  );')) {
        content = content.replace(/(\s+<\/div>\s*\);\s*$)/, '\n      </div>\n    </>\n  );');
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${fileName}`);
      return true;
    }
  }
  
  console.log(`✅ ${fileName} - No fixes needed`);
  return true;
}

function fixAll() {
  console.log('🔧 Fixing remaining syntax errors...\n');
  
  let fixed = 0;
  filesToFix.forEach(file => {
    if (fixFile(file)) {
      fixed++;
    }
  });
  
  console.log(`\n🎯 Fixed ${fixed} files`);
  console.log('🎉 All syntax errors should be resolved!');
}

if (require.main === module) {
  fixAll();
}
