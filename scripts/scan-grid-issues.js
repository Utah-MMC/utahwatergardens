#!/usr/bin/env node

/**
 * Grid Issues Scanner Script
 * 
 * This script scans the entire codebase for potential grid layout issues
 * that could cause dead space on desktop devices.
 * 
 * Usage: node scripts/scan-grid-issues.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class GridIssuesScanner {
  constructor() {
    this.issues = [];
    this.stats = {
      filesScanned: 0,
      gridsFound: 0,
      potentialIssues: 0
    };
  }

  async run() {
    console.log('🔍 Grid Issues Scanner Starting...\n');
    
    try {
      // Find all CSS files
      const cssFiles = await this.findCssFiles();
      console.log(`📁 Found ${cssFiles.length} CSS files to scan\n`);
      
      // Process each file
      for (const file of cssFiles) {
        await this.scanFile(file);
      }
      
      // Generate report
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Error during execution:', error.message);
      process.exit(1);
    }
  }

  async findCssFiles() {
    const patterns = [
      'frontend/src/pages/**/*.css',
      'frontend/src/components/**/*.css'
    ];
    
    const files = [];
    for (const pattern of patterns) {
      const matches = glob.sync(pattern, { cwd: process.cwd() });
      files.push(...matches);
    }
    
    return files;
  }

  async scanFile(filePath) {
    this.stats.filesScanned++;
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Find all grid classes
      const gridClasses = this.findGridClasses(content);
      
      if (gridClasses.length === 0) {
        return;
      }
      
      console.log(`📄 Scanning: ${filePath}`);
      console.log(`   Found ${gridClasses.length} grid classes`);
      
      // Analyze each grid class
      for (const gridClass of gridClasses) {
        const analysis = await this.analyzeGridClass(gridClass, filePath);
        if (analysis.hasIssues) {
          this.issues.push(analysis);
          this.stats.potentialIssues++;
        }
      }
      
      this.stats.gridsFound += gridClasses.length;
      console.log(`   ✅ Analysis complete\n`);
      
    } catch (error) {
      console.error(`   ❌ Error scanning ${filePath}:`, error.message);
    }
  }

  findGridClasses(content) {
    const gridClasses = [];
    
    // Find CSS rules that contain grid-template-columns
    const gridRuleRegex = /\.([\w-]+)\s*\{[^}]*grid-template-columns[^}]*\}/gs;
    let match;
    
    while ((match = gridRuleRegex.exec(content)) !== null) {
      const className = match[1];
      const ruleContent = match[0];
      
      gridClasses.push({
        className,
        ruleContent,
        fullMatch: match[0]
      });
    }
    
    return gridClasses;
  }

  async analyzeGridClass(gridClass, filePath) {
    const { className, ruleContent } = gridClass;
    
    const analysis = {
      file: filePath,
      className,
      hasIssues: false,
      issues: [],
      recommendations: []
    };
    
    // Check for auto-fit/auto-fill (potential dead space issue)
    if (ruleContent.includes('auto-fit') || ruleContent.includes('auto-fill')) {
      analysis.hasIssues = true;
      analysis.issues.push('Uses auto-fit/auto-fill which can create uneven rows');
      
      // Try to estimate item count
      const itemCount = await this.estimateItemCount(className, filePath);
      if (itemCount) {
        analysis.itemCount = itemCount;
        
        // Determine if this could cause dead space
        if (this.couldCauseDeadSpace(itemCount)) {
          analysis.issues.push(`Could create dead space with ${itemCount} items`);
          analysis.recommendations.push(this.getRecommendation(itemCount));
        }
      }
    }
    
    // Check for missing responsive breakpoints
    if (!this.hasResponsiveBreakpoints(filePath, className)) {
      analysis.hasIssues = true;
      analysis.issues.push('Missing responsive breakpoints');
      analysis.recommendations.push('Add @media queries for tablet and mobile');
    }
    
    return analysis;
  }

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

  couldCauseDeadSpace(itemCount) {
    // These item counts commonly cause dead space with auto-fit
    const problematicCounts = [4, 5, 6, 7, 8, 9, 10, 11, 12];
    return problematicCounts.includes(itemCount);
  }

  getRecommendation(itemCount) {
    const recommendations = {
      4: 'Use 2 columns (2x2 grid)',
      5: 'Use 3 columns (2 rows: 3+2)',
      6: 'Use 3 columns (2 rows: 3+3)',
      7: 'Use 3 columns (3 rows: 3+3+1)',
      8: 'Use 4 columns (2 rows: 4+4)',
      9: 'Use 3 columns (3 rows: 3+3+3)',
      10: 'Use 4 columns (3 rows: 4+4+2)',
      11: 'Use 4 columns (3 rows: 4+4+3)',
      12: 'Use 4 columns (3 rows: 4+4+4)'
    };
    
    return recommendations[itemCount] || 'Use fixed column count instead of auto-fit';
  }

  hasResponsiveBreakpoints(filePath, className) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return content.includes('@media (max-width: 768px)') && 
             content.includes('@media (max-width: 1024px)');
    } catch (error) {
      return false;
    }
  }

  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 GRID ISSUES SCANNER REPORT');
    console.log('='.repeat(60));
    
    console.log(`\n📈 Statistics:`);
    console.log(`   Files scanned: ${this.stats.filesScanned}`);
    console.log(`   Grids found: ${this.stats.gridsFound}`);
    console.log(`   Potential issues: ${this.stats.potentialIssues}`);
    
    if (this.issues.length > 0) {
      console.log(`\n⚠️  Issues Found:`);
      this.issues.forEach((issue, index) => {
        console.log(`\n   ${index + 1}. ${issue.file}`);
        console.log(`      Class: .${issue.className}`);
        if (issue.itemCount) {
          console.log(`      Items: ${issue.itemCount}`);
        }
        console.log(`      Issues:`);
        issue.issues.forEach(problem => {
          console.log(`         • ${problem}`);
        });
        if (issue.recommendations.length > 0) {
          console.log(`      Recommendations:`);
          issue.recommendations.forEach(rec => {
            console.log(`         • ${rec}`);
          });
        }
      });
      
      console.log(`\n💡 Next Steps:`);
      console.log(`   1. Run: node scripts/fix-grid-dead-space.js`);
      console.log(`   2. Or manually fix the issues listed above`);
      console.log(`   3. Test the layouts on different screen sizes`);
      
    } else {
      console.log(`\n✅ No grid issues found! All grids look good.`);
    }
    
    console.log('\n' + '='.repeat(60));
  }
}

// Run the script
if (require.main === module) {
  const scanner = new GridIssuesScanner();
  scanner.run().catch(console.error);
}

module.exports = GridIssuesScanner;
