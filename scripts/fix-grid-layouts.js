#!/usr/bin/env node

/**
 * Grid Layout Fixer Script
 * 
 * This script automatically scans all CSS files for grid layouts that use
 * `auto-fit` or `auto-fill` and can create uneven rows, then fixes them
 * by setting appropriate column counts based on the number of items.
 * 
 * Usage: node scripts/fix-grid-layouts.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const CONFIG = {
  // Directories to scan
  scanDirs: ['frontend/src/pages', 'frontend/src/components'],
  
  // File patterns to include
  filePattern: '**/*.css',
  
  // Grid patterns to fix
  gridPatterns: [
    {
      // Pattern for auto-fit grids
      regex: /grid-template-columns:\s*repeat\(auto-fit,\s*minmax\([^)]+\)\)/g,
      replacement: 'grid-template-columns: repeat(COLUMNS, 1fr)',
      description: 'auto-fit grids'
    },
    {
      // Pattern for auto-fill grids  
      regex: /grid-template-columns:\s*repeat\(auto-fill,\s*minmax\([^)]+\)\)/g,
      replacement: 'grid-template-columns: repeat(COLUMNS, 1fr)',
      description: 'auto-fill grids'
    }
  ],
  
  // Default column counts for different item counts
  defaultColumns: {
    1: 1,
    2: 2,
    3: 3,
    4: 2,  // 2x2 grid
    5: 3,  // 2 rows: 3 + 2
    6: 3,  // 2 rows: 3 + 3
    7: 3,  // 3 rows: 3 + 3 + 1
    8: 4,  // 2 rows: 4 + 4
    9: 3,  // 3 rows: 3 + 3 + 3
    10: 4, // 3 rows: 4 + 4 + 2
    12: 4  // 3 rows: 4 + 4 + 4
  },
  
  // Responsive breakpoints to add
  responsiveBreakpoints: {
    tablet: {
      maxWidth: '1024px',
      columns: {
        1: 1,
        2: 2,
        3: 2,
        4: 2,
        5: 2,
        6: 2,
        7: 2,
        8: 2,
        9: 2,
        10: 2,
        12: 2
      }
    },
    mobile: {
      maxWidth: '768px',
      columns: 1 // All grids become single column on mobile
    }
  }
};

class GridLayoutFixer {
  constructor() {
    this.fixes = [];
    this.errors = [];
    this.stats = {
      filesScanned: 0,
      filesModified: 0,
      gridsFixed: 0,
      responsiveRulesAdded: 0
    };
  }

  /**
   * Main execution method
   */
  async run() {
    console.log('🔍 Grid Layout Fixer Starting...\n');
    
    try {
      // Find all CSS files
      const cssFiles = await this.findCssFiles();
      console.log(`📁 Found ${cssFiles.length} CSS files to scan\n`);
      
      // Process each file
      for (const file of cssFiles) {
        await this.processFile(file);
      }
      
      // Generate report
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Error during execution:', error.message);
      process.exit(1);
    }
  }

  /**
   * Find all CSS files in the specified directories
   */
  async findCssFiles() {
    const files = [];
    
    for (const dir of CONFIG.scanDirs) {
      const pattern = path.join(dir, CONFIG.filePattern);
      const matches = glob.sync(pattern, { cwd: process.cwd() });
      files.push(...matches);
    }
    
    return files;
  }

  /**
   * Process a single CSS file
   */
  async processFile(filePath) {
    this.stats.filesScanned++;
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      let modifiedContent = content;
      let fileModified = false;
      
      // Find all grid classes in the file
      const gridClasses = this.findGridClasses(content);
      
      if (gridClasses.length === 0) {
        return; // No grids to fix
      }
      
      console.log(`📄 Processing: ${filePath}`);
      console.log(`   Found ${gridClasses.length} grid classes`);
      
      // Process each grid class
      for (const gridClass of gridClasses) {
        const fix = await this.fixGridClass(gridClass, filePath);
        if (fix) {
          this.fixes.push(fix);
          modifiedContent = this.applyFix(modifiedContent, fix);
          fileModified = true;
          this.stats.gridsFixed++;
        }
      }
      
      // Add responsive breakpoints if file was modified
      if (fileModified) {
        modifiedContent = this.addResponsiveBreakpoints(modifiedContent, gridClasses);
        this.stats.responsiveRulesAdded += gridClasses.length;
      }
      
      // Write file if modified
      if (modifiedContent !== originalContent) {
        fs.writeFileSync(filePath, modifiedContent, 'utf8');
        this.stats.filesModified++;
        console.log(`   ✅ Fixed ${gridClasses.length} grids\n`);
      } else {
        console.log(`   ⏭️  No changes needed\n`);
      }
      
    } catch (error) {
      this.errors.push({
        file: filePath,
        error: error.message
      });
      console.error(`   ❌ Error processing ${filePath}:`, error.message);
    }
  }

  /**
   * Find all grid classes in CSS content
   */
  findGridClasses(content) {
    const gridClasses = [];
    
    // Find CSS rules that contain grid-template-columns
    const gridRuleRegex = /\.([\w-]+)\s*\{[^}]*grid-template-columns[^}]*\}/gs;
    let match;
    
    while ((match = gridRuleRegex.exec(content)) !== null) {
      const className = match[1];
      const ruleContent = match[0];
      
      // Check if this rule uses auto-fit or auto-fill
      if (ruleContent.includes('auto-fit') || ruleContent.includes('auto-fill')) {
        gridClasses.push({
          className,
          ruleContent,
          fullMatch: match[0]
        });
      }
    }
    
    return gridClasses;
  }

  /**
   * Fix a single grid class
   */
  async fixGridClass(gridClass, filePath) {
    const { className, ruleContent } = gridClass;
    
    // Try to determine the number of items from the corresponding JS file
    const itemCount = await this.estimateItemCount(className, filePath);
    
    if (!itemCount) {
      console.log(`   ⚠️  Could not determine item count for ${className}, using default`);
      return null;
    }
    
    const columns = CONFIG.defaultColumns[itemCount] || 3;
    
    // Apply the fix
    let fixedRule = ruleContent;
    for (const pattern of CONFIG.gridPatterns) {
      if (pattern.regex.test(fixedRule)) {
        fixedRule = fixedRule.replace(
          pattern.regex,
          pattern.replacement.replace('COLUMNS', columns)
        );
        break;
      }
    }
    
    return {
      file: filePath,
      className,
      itemCount,
      columns,
      originalRule: ruleContent,
      fixedRule
    };
  }

  /**
   * Estimate the number of items in a grid by looking at the corresponding JS file
   */
  async estimateItemCount(className, cssFilePath) {
    try {
      // Convert CSS file path to JS file path
      const jsFilePath = cssFilePath.replace('.css', '.js');
      
      if (!fs.existsSync(jsFilePath)) {
        return null;
      }
      
      const jsContent = fs.readFileSync(jsFilePath, 'utf8');
      
      // Look for arrays that might correspond to the grid
      const arrayPatterns = [
        // Look for arrays with the grid class name
        new RegExp(`const\\s+\\w*${className.replace('-', '')}\\w*\\s*=\\s*\\[([^\\]]+)\\]`, 'i'),
        // Look for arrays with common names
        /const\s+(\w+)\s*=\s*\[([^\]]+)\]/g,
        // Look for .map() calls that might indicate the array
        new RegExp(`\\{${className}[^}]*\\.map\\([^)]*\\)`, 'i')
      ];
      
      for (const pattern of arrayPatterns) {
        const match = jsContent.match(pattern);
        if (match) {
          // Count items in the array
          const arrayContent = match[2] || match[0];
          const itemCount = (arrayContent.match(/\{[^}]*\}/g) || []).length;
          
          if (itemCount > 0) {
            return itemCount;
          }
        }
      }
      
      return null;
      
    } catch (error) {
      return null;
    }
  }

  /**
   * Apply a fix to CSS content
   */
  applyFix(content, fix) {
    return content.replace(fix.originalRule, fix.fixedRule);
  }

  /**
   * Add responsive breakpoints to CSS content
   */
  addResponsiveBreakpoints(content, gridClasses) {
    // Check if responsive breakpoints already exist
    if (content.includes('@media (max-width: 1024px)')) {
      return content; // Already has responsive rules
    }
    
    // Generate responsive CSS
    const responsiveCSS = this.generateResponsiveCSS(gridClasses);
    
    // Find the end of the file and add responsive rules
    const lastBrace = content.lastIndexOf('}');
    if (lastBrace !== -1) {
      return content.slice(0, lastBrace + 1) + '\n\n' + responsiveCSS + '\n';
    }
    
    return content + '\n\n' + responsiveCSS;
  }

  /**
   * Generate responsive CSS rules
   */
  generateResponsiveCSS(gridClasses) {
    const tabletRules = [];
    const mobileRules = [];
    
    for (const gridClass of gridClasses) {
      const className = gridClass.className;
      const itemCount = this.estimateItemCount(className, '') || 6; // Default fallback
      const tabletColumns = CONFIG.responsiveBreakpoints.tablet.columns[itemCount] || 2;
      
      tabletRules.push(`  .${className} {\n    grid-template-columns: repeat(${tabletColumns}, 1fr);\n  }`);
      mobileRules.push(`  .${className} {\n    grid-template-columns: 1fr;\n  }`);
    }
    
    return `/* Responsive Design */
@media (max-width: 1024px) {
${tabletRules.join('\n\n')}
}

@media (max-width: 768px) {
${mobileRules.join('\n\n')}
}`;
  }

  /**
   * Generate execution report
   */
  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 GRID LAYOUT FIXER REPORT');
    console.log('='.repeat(60));
    
    console.log(`\n📈 Statistics:`);
    console.log(`   Files scanned: ${this.stats.filesScanned}`);
    console.log(`   Files modified: ${this.stats.filesModified}`);
    console.log(`   Grids fixed: ${this.stats.gridsFixed}`);
    console.log(`   Responsive rules added: ${this.stats.responsiveRulesAdded}`);
    
    if (this.fixes.length > 0) {
      console.log(`\n✅ Fixes Applied:`);
      this.fixes.forEach((fix, index) => {
        console.log(`   ${index + 1}. ${fix.file}`);
        console.log(`      Class: .${fix.className}`);
        console.log(`      Items: ${fix.itemCount} → Columns: ${fix.columns}`);
      });
    }
    
    if (this.errors.length > 0) {
      console.log(`\n❌ Errors:`);
      this.errors.forEach((error, index) => {
        console.log(`   ${index + 1}. ${error.file}: ${error.error}`);
      });
    }
    
    console.log(`\n🎉 Grid layout fixing complete!`);
    console.log('='.repeat(60));
  }
}

// Run the script
if (require.main === module) {
  const fixer = new GridLayoutFixer();
  fixer.run().catch(console.error);
}

module.exports = GridLayoutFixer;
