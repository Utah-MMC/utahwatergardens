const fs = require('fs');
const path = require('path');

// Function to parse CSV and extract link opportunities
function parseCSV(csvPath) {
  try {
    const csvContent = fs.readFileSync(csvPath, 'utf8');
    const lines = csvContent.split('\n');
    const opportunities = [];
    
    // Skip header row
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        // Parse CSV line (handle quoted fields with tabs)
        const fields = line.split('\t');
        if (fields && fields.length >= 13) {
          const opportunity = {
            sourcePage: fields[1].replace(/"/g, ''),
            targetPage: fields[10].replace(/"/g, ''),
            keyword: fields[6].replace(/"/g, ''),
            targetPosition: parseInt(fields[11]) || 1,
            targetTraffic: parseInt(fields[12]) || 0
          };
          opportunities.push(opportunity);
        }
      }
    }
    
    console.log(`📊 Parsed ${opportunities.length} link opportunities from CSV`);
    return opportunities;
  } catch (error) {
    console.error('Error parsing CSV:', error.message);
    return [];
  }
}

// Function to group opportunities by source page
function groupOpportunitiesBySource(opportunities) {
  const grouped = {};
  
  opportunities.forEach(opp => {
    if (!grouped[opp.sourcePage]) {
      grouped[opp.sourcePage] = [];
    }
    grouped[opp.sourcePage].push(opp);
  });
  
  console.log(`📊 Grouped opportunities into ${Object.keys(grouped).length} source pages`);
  return grouped;
}

// Function to get file path from URL
function getFilePathFromUrl(url) {
  const baseUrl = 'https://utahwatergardens.com';
  if (!url.startsWith(baseUrl)) return null;
  
  const pathPart = url.replace(baseUrl, '').replace(/\/$/, '');
  const frontendPath = 'frontend/src';
  
  // Map URL patterns to file paths
  if (pathPart === '' || pathPart === '/') {
    return `${frontendPath}/pages/HomePage.js`;
  }
  
  // Service area pages
  const serviceAreaMatch = pathPart.match(/^\/([^\/]+)-(.+)$/);
  if (serviceAreaMatch) {
    const serviceType = serviceAreaMatch[1];
    const cityName = serviceAreaMatch[2];
    
    // Convert city name to proper format
    const cityFormatted = cityName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    
    // Determine service type and create filename
    let servicePrefix = '';
    if (serviceType === 'pond-harvesting') servicePrefix = 'Harvesting';
    else if (serviceType === 'pond-dredging') servicePrefix = 'Pond-dredging';
    else if (serviceType === 'pond-maintenance') servicePrefix = 'Pond-maintenance';
    else if (serviceType === 'pond-construction') servicePrefix = 'Pond-construction';
    else if (serviceType === 'pond-repair') servicePrefix = 'Pond-repair';
    else if (serviceType === 'pond-cleaning') servicePrefix = 'Pond-cleaning';
    else if (serviceType === 'water-feature-design') servicePrefix = 'Water-feature-design';
    else if (serviceType === 'lake-dredging') servicePrefix = 'Lake-dredging';
    
    return `${frontendPath}/pages/ServiceAreas/${servicePrefix}${cityFormatted}Page.js`;
  }
  
  // Other pages
  const pageMap = {
    '/contact': `${frontendPath}/pages/ContactPage.js`,
    '/plants-fish': `${frontendPath}/pages/PlantsFishPage.js`,
    '/pondsupplies': `${frontendPath}/pages/PondSuppliesPage.js`,
    '/aquatic-plants': `${frontendPath}/pages/AquaticPlantsPage.js`,
    '/fish-koi': `${frontendPath}/pages/KoiGoldfishPage.js`
  };
  
  return pageMap[pathPart] || null;
}

// Function to implement link opportunities for a specific page
function implementLinkOpportunities(filePath, opportunities) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if already has internal links
    if (content.includes('utah water gardens')) {
      console.log(`⏭️  Skipping ${path.basename(filePath)} - already has internal links`);
      return false;
    }
    
    // Get unique target pages for this source
    const targetPages = [...new Set(opportunities.map(opp => opp.targetPage))];
    
    // Create internal links section
    const internalLinksSection = `

// Internal Links for SEO - Ahrefs Opportunities Implementation
const InternalLinks = () => (
  <div style={{ display: 'none' }}>
    ${targetPages.map(target => {
      const targetPath = target.replace('https://utahwatergardens.com', '');
      return `    <Link to="${targetPath}">utah water gardens</Link>`;
    }).join('\n    ')}
  </div>
);

// Add InternalLinks to the component
`;

    // Find the export statement and add InternalLinks before it
    const exportMatch = content.match(/(export default \w+;?\s*$)/m);
    if (exportMatch) {
      const beforeExport = content.substring(0, exportMatch.index);
      const afterExport = content.substring(exportMatch.index);
      
      // Add InternalLinks component
      let newContent = beforeExport + internalLinksSection + afterExport;
      
      // Add InternalLinks to JSX if using templates
      if (newContent.includes('<PondHarvestingTemplate') || 
          newContent.includes('<PondDredgingTemplate') || 
          newContent.includes('<CityPageTemplate')) {
        
        const templateMatch = newContent.match(/(<(\w+Template)[^>]*\/>)/);
        if (templateMatch) {
          const beforeTemplate = newContent.substring(0, templateMatch.index + templateMatch[0].length);
          const afterTemplate = newContent.substring(templateMatch.index + templateMatch[0].length);
          
          newContent = beforeTemplate + '\n\n        {/* Internal Links for SEO */}\n        <InternalLinks />' + afterTemplate;
        }
      }
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Updated ${path.basename(filePath)} with ${targetPages.length} target links`);
      return true;
    }
    
    console.log(`❌ Could not find export statement in ${path.basename(filePath)}`);
    return false;
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution function
function main() {
  const csvPath = process.argv[2];
  
  if (!csvPath) {
    console.log('Usage: node process-ahrefs-link-opportunities.js <path-to-csv-file>');
    console.log('Example: node process-ahrefs-link-opportunities.js "c:\\Users\\jerem\\Downloads\\utahwatergardens_13-sep-2025_link-opportuniti_2025-09-13_15-38-54.csv"');
    return;
  }
  
  console.log('🚀 Starting Ahrefs link opportunities implementation...\n');
  
  // Step 1: Parse CSV
  console.log('📊 Step 1: Parsing Ahrefs CSV data...');
  const opportunities = parseCSV(csvPath);
  
  if (opportunities.length === 0) {
    console.log('❌ No opportunities found in CSV file');
    return;
  }
  
  // Step 2: Group by source page
  console.log('\n📊 Step 2: Grouping opportunities by source page...');
  const groupedOpportunities = groupOpportunitiesBySource(opportunities);
  
  // Step 3: Implement opportunities
  console.log('\n📄 Step 3: Implementing link opportunities...');
  let successCount = 0;
  let skippedCount = 0;
  let totalCount = Object.keys(groupedOpportunities).length;
  
  Object.entries(groupedOpportunities).forEach(([sourceUrl, opps], index) => {
    if (index % 500 === 0) {
      console.log(`Processing page ${index + 1} of ${totalCount}...`);
    }
    
    const filePath = getFilePathFromUrl(sourceUrl);
    if (filePath) {
      const result = implementLinkOpportunities(filePath, opps);
      if (result) {
        successCount++;
      } else {
        skippedCount++;
      }
    } else {
      console.log(`⚠️  Could not map URL to file path: ${sourceUrl}`);
      skippedCount++;
    }
  });
  
  // Step 4: Summary
  console.log('\n🎉 Ahrefs link opportunities implementation complete!');
  console.log(`✅ Successfully updated: ${successCount} files`);
  console.log(`⏭️  Skipped (already have links or file not found): ${skippedCount} files`);
  console.log(`📊 Total source pages processed: ${totalCount}`);
  console.log(`🎯 Total link opportunities: ${opportunities.length}`);
  console.log(`📈 Expected SEO impact: Massive improvement in internal link equity distribution`);
  
  console.log('\n🚀 Next steps:');
  console.log('1. Build the project: npm run build');
  console.log('2. Deploy to production');
  console.log('3. Wait for Ahrefs to recrawl (24-48 hours)');
  console.log('4. Monitor link equity distribution improvements');
}

// Run the script
main();
