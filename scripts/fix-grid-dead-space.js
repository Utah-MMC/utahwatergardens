#!/usr/bin/env node

/**
 * Grid Dead Space Fixer Script
 * 
 * This script specifically fixes grid layouts that create dead space
 * by replacing auto-fit/auto-fill with fixed column counts.
 * 
 * Usage: node scripts/fix-grid-dead-space.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Known problematic grids and their fixes
const GRID_FIXES = [
  {
    file: 'frontend/src/pages/PondSuppliesPage.css',
    className: 'categories-grid',
    items: 6,
    columns: 3,
    description: 'Pond supply categories (6 items → 3 columns)'
  },
  {
    file: 'frontend/src/pages/CareGuidesPage.css',
    className: 'guides-grid',
    items: 6,
    columns: 3,
    description: 'Care guides (6 items → 3 columns)'
  },
  {
    file: 'frontend/src/pages/CareGuidesPage.css',
    className: 'tips-grid',
    items: 6,
    columns: 3,
    description: 'Quick tips (6 items → 3 columns)'
  },
  {
    file: 'frontend/src/pages/CareGuidesPage.css',
    className: 'seasonal-grid',
    items: 4,
    columns: 2,
    description: 'Seasonal guides (4 items → 2 columns)'
  },
  {
    file: 'frontend/src/pages/CareGuidesPage.css',
    className: 'advanced-grid',
    items: 4,
    columns: 2,
    description: 'Advanced topics (4 items → 2 columns)'
  },
  {
    file: 'frontend/src/pages/CareGuidesPage.css',
    className: 'troubleshooting-grid',
    items: 4,
    columns: 2,
    description: 'Troubleshooting guides (4 items → 2 columns)'
  },
  {
    file: 'frontend/src/pages/WaterTreatmentsPage.css',
    className: 'treatments-grid',
    items: 6,
    columns: 3,
    description: 'Water treatments (6 items → 3 columns)'
  }
];

class GridDeadSpaceFixer {
  constructor() {
    this.fixes = [];
    this.errors = [];
    this.stats = {
      filesProcessed: 0,
      gridsFixed: 0,
      responsiveRulesAdded: 0
    };
  }

  async run() {
    console.log('🔧 Grid Dead Space Fixer Starting...\n');
    
    try {
      for (const fix of GRID_FIXES) {
        await this.applyFix(fix);
      }
      
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Error during execution:', error.message);
      process.exit(1);
    }
  }

  async applyFix(fix) {
    const { file, className, columns, description } = fix;
    
    try {
      if (!fs.existsSync(file)) {
        console.log(`⚠️  File not found: ${file}`);
        return;
      }
      
      const content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Find the grid class rule
      const gridRuleRegex = new RegExp(`(\\.${className}\\s*\\{[^}]*grid-template-columns:\\s*)repeat\\(auto-[^)]+\\)([^}]*\\})`, 'g');
      
      let modifiedContent = content;
      let found = false;
      
      modifiedContent = modifiedContent.replace(gridRuleRegex, (match, prefix, suffix) => {
        found = true;
        return `${prefix}repeat(${columns}, 1fr)${suffix}`;
      });
      
      if (found) {
        // Add responsive breakpoints if not already present
        if (!modifiedContent.includes('@media (max-width: 1024px)')) {
          modifiedContent = this.addResponsiveBreakpoints(modifiedContent, className, columns);
          this.stats.responsiveRulesAdded++;
        }
        
        // Write the modified content
        fs.writeFileSync(file, modifiedContent, 'utf8');
        
        this.fixes.push({
          file,
          className,
          columns,
          description
        });
        
        this.stats.gridsFixed++;
        console.log(`✅ Fixed: ${description}`);
        console.log(`   File: ${file}`);
        console.log(`   Class: .${className} → ${columns} columns\n`);
        
      } else {
        console.log(`⏭️  No changes needed: ${description}\n`);
      }
      
      this.stats.filesProcessed++;
      
    } catch (error) {
      this.errors.push({
        file,
        error: error.message
      });
      console.error(`❌ Error fixing ${file}:`, error.message);
    }
  }

  addResponsiveBreakpoints(content, className, columns) {
    const tabletColumns = Math.min(columns, 2);
    
    const responsiveCSS = `
/* Responsive Design */
@media (max-width: 1024px) {
  .${className} {
    grid-template-columns: repeat(${tabletColumns}, 1fr);
  }
}

@media (max-width: 768px) {
  .${className} {
    grid-template-columns: 1fr;
  }
}`;

    // Find the end of the file and add responsive rules
    const lastBrace = content.lastIndexOf('}');
    if (lastBrace !== -1) {
      return content.slice(0, lastBrace + 1) + responsiveCSS;
    }
    
    return content + responsiveCSS;
  }

  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 GRID DEAD SPACE FIXER REPORT');
    console.log('='.repeat(60));
    
    console.log(`\n📈 Statistics:`);
    console.log(`   Files processed: ${this.stats.filesProcessed}`);
    console.log(`   Grids fixed: ${this.stats.gridsFixed}`);
    console.log(`   Responsive rules added: ${this.stats.responsiveRulesAdded}`);
    
    if (this.fixes.length > 0) {
      console.log(`\n✅ Fixes Applied:`);
      this.fixes.forEach((fix, index) => {
        console.log(`   ${index + 1}. ${fix.description}`);
        console.log(`      File: ${fix.file}`);
        console.log(`      Class: .${fix.className} → ${fix.columns} columns`);
      });
    }
    
    if (this.errors.length > 0) {
      console.log(`\n❌ Errors:`);
      this.errors.forEach((error, index) => {
        console.log(`   ${index + 1}. ${error.file}: ${error.error}`);
      });
    }
    
    console.log(`\n🎉 Grid dead space fixing complete!`);
    console.log('='.repeat(60));
  }
}

// Run the script
if (require.main === module) {
  const fixer = new GridDeadSpaceFixer();
  fixer.run().catch(console.error);
}

module.exports = GridDeadSpaceFixer;
