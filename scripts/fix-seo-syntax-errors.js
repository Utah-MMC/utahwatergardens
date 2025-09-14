#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files that need syntax fixes
const filesToFix = [
  'frontend/src/pages/LakeDredgingPage.js',
  'frontend/src/pages/PlantDetailPage.js',
  'frontend/src/pages/PondLightingPage.js',
  'frontend/src/pages/SeasonalCarePage.js',
  'frontend/src/pages/SeasonalServicesPage.js',
  'frontend/src/pages/ToolsAccessoriesPage.js',
  'frontend/src/pages/TroubleshootingPage.js',
  'frontend/src/pages/TruxorServicePage.js',
  'frontend/src/pages/VideoTutorialsPage.js'
];

function fixFileSyntax(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const pageName = path.basename(filePath, '.js');
  
  // Check if the file has the broken syntax pattern
  if (!content.includes('const ') && content.includes('return (')) {
    console.log(`✅ ${pageName} - No syntax errors found`);
    return true;
  }
  
  // Find the broken pattern where array declaration is inside JSX
  const brokenPattern = /return \(\s*<>\s*<SEO[^>]*\/>\s*<div[^>]*>\s*const\s+(\w+)\s*=\s*\[/;
  const match = content.match(brokenPattern);
  
  if (!match) {
    console.log(`✅ ${pageName} - No broken pattern found`);
    return true;
  }
  
  const arrayName = match[1];
  
  // Extract the SEO component
  const seoMatch = content.match(/<SEO[^>]*\/>/);
  if (!seoMatch) {
    console.log(`❌ ${pageName} - Could not find SEO component`);
    return false;
  }
  
  const seoComponent = seoMatch[0];
  
  // Remove the broken SEO component from inside JSX
  content = content.replace(/<SEO[^>]*\/>\s*<div[^>]*>\s*const\s+\w+\s*=\s*\[/, `const ${arrayName} = [`);
  
  // Find the return statement and add SEO component properly
  const returnMatch = content.match(/(\s+return\s*\(\s*<div[^>]*>)/);
  if (returnMatch) {
    const replacement = `\n  return (\n    <>\n      ${seoComponent}\n      <div className="${pageName.toLowerCase().replace(/([A-Z])/g, '-$1').substring(1)}-page">`;
    content = content.replace(returnMatch[1], replacement);
  }
  
  // Ensure the fragment is closed at the end
  if (!content.includes('</>\n  );')) {
    content = content.replace(/(\s+<\/div>\s*\);\s*$)/, '\n      </div>\n    </>\n  );');
  }
  
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ ${pageName} - Fixed syntax errors`);
  return true;
}

function fixAllSyntaxErrors() {
  console.log('🔧 Fixing SEO syntax errors...\n');
  
  let totalFixed = 0;
  
  filesToFix.forEach(filePath => {
    if (fixFileSyntax(filePath)) {
      totalFixed++;
    }
  });
  
  console.log(`\n🎯 Fixed ${totalFixed} files`);
  
  if (totalFixed > 0) {
    console.log('\n🎉 SYNTAX ERRORS FIXED!');
    console.log('- Moved array declarations outside JSX');
    console.log('- Properly placed SEO components');
    console.log('- Fixed React fragment syntax');
    console.log('- Your app should now compile successfully!');
  }
}

if (require.main === module) {
  fixAllSyntaxErrors();
}

module.exports = { fixAllSyntaxErrors, fixFileSyntax };
