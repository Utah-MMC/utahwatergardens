#!/usr/bin/env node

/**
 * Service Page Randomization Implementation Script
 * 
 * This script helps implement the randomization system by:
 * 1. Analyzing existing service area pages
 * 2. Creating a migration plan
 * 3. Generating new dynamic routes
 * 4. Providing cleanup recommendations
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SERVICE_AREAS_DIR = 'frontend/src/pages/ServiceAreas';
const OUTPUT_DIR = 'randomization-analysis';

// Service types we're targeting
const SERVICE_TYPES = [
  'pond-cleaning',
  'pond-dredging', 
  'pond-construction',
  'harvesting'
];

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('🔍 Analyzing existing service area pages...');

// Analyze existing files
function analyzeExistingFiles() {
  const analysis = {
    totalFiles: 0,
    serviceTypes: {},
    duplicates: [],
    recommendations: []
  };

  try {
    const files = fs.readdirSync(SERVICE_AREAS_DIR);
    
    files.forEach(file => {
      if (file.endsWith('.js') && !file.includes('Template')) {
        analysis.totalFiles++;
        
        // Categorize by service type
        const serviceType = categorizeServiceType(file);
        if (serviceType) {
          if (!analysis.serviceTypes[serviceType]) {
            analysis.serviceTypes[serviceType] = [];
          }
          analysis.serviceTypes[serviceType].push(file);
        }
        
        // Check for duplicates (files with very similar names)
        const baseName = file.replace(/Page\.js$/, '');
        const similarFiles = files.filter(f => 
          f !== file && 
          f.replace(/Page\.js$/, '').includes(baseName.substring(0, 10))
        );
        
        if (similarFiles.length > 0) {
          analysis.duplicates.push({
            file,
            similarFiles
          });
        }
      }
    });
  } catch (error) {
    console.error('Error analyzing files:', error.message);
  }

  return analysis;
}

function categorizeServiceType(filename) {
  if (filename.includes('Harvesting')) return 'harvesting';
  if (filename.includes('Pond-dredging')) return 'pond-dredging';
  if (filename.includes('Pond-construction')) return 'pond-construction';
  if (filename.includes('Water-feature-design')) return 'pond-construction';
  if (filename.includes('Pond-cleaning')) return 'pond-cleaning';
  return 'general';
}

// Generate migration plan
function generateMigrationPlan(analysis) {
  const plan = {
    phases: [],
    estimatedTime: '',
    benefits: [],
    risks: []
  };

  // Phase 1: Setup
  plan.phases.push({
    name: 'Setup Randomization System',
    duration: '1-2 days',
    tasks: [
      'Install randomization utilities',
      'Create dynamic routing configuration',
      'Test randomization system with sample pages',
      'Update sitemap generation'
    ]
  });

  // Phase 2: Migration
  plan.phases.push({
    name: 'Migrate to Dynamic System',
    duration: '3-5 days',
    tasks: [
      'Implement dynamic routes in App.js',
      'Update navigation and internal links',
      'Test all service type combinations',
      'Verify SEO meta tags are unique'
    ]
  });

  // Phase 3: Cleanup
  plan.phases.push({
    name: 'Clean Up Duplicate Files',
    duration: '1-2 days',
    tasks: [
      'Backup existing service area files',
      'Remove duplicate service area pages',
      'Update build scripts',
      'Verify no broken links'
    ]
  });

  plan.estimatedTime = '1-2 weeks';
  
  plan.benefits = [
    'Eliminate ' + analysis.totalFiles + ' duplicate files',
    'Ensure unique content for every page',
    'Improve Ahrefs health score significantly',
    'Reduce maintenance overhead',
    'Better SEO performance',
    'More engaging user experience'
  ];

  plan.risks = [
    'Temporary SEO impact during migration',
    'Need to update internal links',
    'Testing required for all combinations'
  ];

  return plan;
}

// Generate sample URLs
function generateSampleUrls() {
  const cities = [
    'salt-lake-city',
    'west-jordan', 
    'sandy',
    'west-valley-city',
    'provo',
    'ogden',
    'layton',
    'taylorsville',
    'st-george',
    'orem'
  ];

  const sampleUrls = [];
  
  SERVICE_TYPES.forEach(serviceType => {
    cities.forEach(city => {
      sampleUrls.push(`/${serviceType}/${city}`);
    });
  });

  return sampleUrls;
}

// Generate routing configuration
function generateRoutingConfig() {
  return `
// Add this to your App.js or routing configuration
import RandomizedServiceAreaPage from './components/RandomizedServiceAreaPage';

// Dynamic service area routes
<Route path="/:serviceType/:citySlug" component={RandomizedServiceAreaPage} />

// Examples of URLs this will handle:
// /pond-cleaning/salt-lake-city
// /pond-dredging/west-jordan  
// /pond-construction/sandy
// /harvesting/provo
`;
}

// Generate cleanup script
function generateCleanupScript(analysis) {
  const script = `#!/bin/bash

# Service Area Cleanup Script
# This script removes duplicate service area files after migration

echo "🧹 Starting cleanup of duplicate service area files..."

# Create backup directory
mkdir -p backup/service-areas-$(date +%Y%m%d)

# Backup files before deletion
echo "📦 Creating backup..."
cp -r ${SERVICE_AREAS_DIR}/* backup/service-areas-$(date +%Y%m%d)/

# Count files to be removed
TOTAL_FILES=$(find ${SERVICE_AREAS_DIR} -name "*.js" -not -name "*Template*" | wc -l)
echo "📊 Found $TOTAL_FILES service area files to remove"

# Remove duplicate files (keep templates)
echo "🗑️  Removing duplicate files..."
find ${SERVICE_AREAS_DIR} -name "*.js" -not -name "*Template*" -delete

echo "✅ Cleanup complete!"
echo "📈 Expected improvements:"
echo "   - Eliminated $TOTAL_FILES duplicate files"
echo "   - Improved Ahrefs health score"
echo "   - Reduced maintenance overhead"
echo "   - Better SEO performance"
`;

  return script;
}

// Main execution
function main() {
  console.log('🚀 Service Page Randomization Implementation Script');
  console.log('================================================\n');

  // Analyze existing files
  const analysis = analyzeExistingFiles();
  
  console.log(`📊 Analysis Results:`);
  console.log(`   Total service area files: ${analysis.totalFiles}`);
  console.log(`   Service types found: ${Object.keys(analysis.serviceTypes).join(', ')}`);
  console.log(`   Duplicate groups: ${analysis.duplicates.length}\n`);

  // Generate migration plan
  const migrationPlan = generateMigrationPlan(analysis);
  
  console.log(`📋 Migration Plan:`);
  migrationPlan.phases.forEach((phase, index) => {
    console.log(`   Phase ${index + 1}: ${phase.name} (${phase.duration})`);
  });
  console.log(`   Total estimated time: ${migrationPlan.estimatedTime}\n`);

  // Generate outputs
  const outputs = {
    analysis: analysis,
    migrationPlan: migrationPlan,
    sampleUrls: generateSampleUrls(),
    routingConfig: generateRoutingConfig(),
    cleanupScript: generateCleanupScript(analysis)
  };

  // Write analysis report
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'analysis-report.json'),
    JSON.stringify(outputs, null, 2)
  );

  // Write migration plan
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'migration-plan.md'),
    `# Service Page Randomization Migration Plan

## Overview
This plan outlines the migration from ${analysis.totalFiles} duplicate service area files to a dynamic randomization system.

## Current State
- **Total Files**: ${analysis.totalFiles}
- **Service Types**: ${Object.keys(analysis.serviceTypes).join(', ')}
- **Duplicate Groups**: ${analysis.duplicates.length}

## Migration Phases

${migrationPlan.phases.map((phase, index) => `
### Phase ${index + 1}: ${phase.name}
**Duration**: ${phase.duration}

**Tasks**:
${phase.tasks.map(task => `- ${task}`).join('\n')}
`).join('\n')}

## Expected Benefits
${migrationPlan.benefits.map(benefit => `- ${benefit}`).join('\n')}

## Sample URLs
${outputs.sampleUrls.slice(0, 10).map(url => `- ${url}`).join('\n')}
... and ${outputs.sampleUrls.length - 10} more combinations

## Next Steps
1. Review the analysis report
2. Test the randomization system
3. Implement dynamic routing
4. Run the cleanup script
5. Monitor SEO improvements
`
  );

  // Write routing configuration
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'routing-config.js'),
    outputs.routingConfig
  );

  // Write cleanup script
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'cleanup.sh'),
    outputs.cleanupScript
  );

  console.log(`✅ Analysis complete!`);
  console.log(`📁 Output files created in: ${OUTPUT_DIR}/`);
  console.log(`   - analysis-report.json`);
  console.log(`   - migration-plan.md`);
  console.log(`   - routing-config.js`);
  console.log(`   - cleanup.sh\n`);

  console.log(`🎯 Key Benefits:`);
  migrationPlan.benefits.forEach(benefit => {
    console.log(`   ✅ ${benefit}`);
  });

  console.log(`\n🚀 Ready to implement randomization system!`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  analyzeExistingFiles,
  generateMigrationPlan,
  generateSampleUrls,
  generateRoutingConfig,
  generateCleanupScript
};
