const fs = require('fs');
const path = require('path');

// Read the recommendations from the previous script
function loadRecommendations() {
    try {
        const recommendationsData = JSON.parse(fs.readFileSync('internal-linking-recommendations.json', 'utf8'));
        return recommendationsData.recommendations;
    } catch (error) {
        console.error('Error loading recommendations:', error);
        return null;
    }
}

// Map URL paths to actual file paths
function getFilePathFromUrl(url) {
    const baseUrl = 'https://utahwatergardens.com';
    if (!url.startsWith(baseUrl)) {
        return null;
    }
    
    const path = url.replace(baseUrl, '');
    const frontendPath = 'frontend/src';
    
    // Handle different page types
    if (path === '/' || path === '') {
        return `${frontendPath}/pages/HomePage.js`;
    } else if (path === '/contact/' || path === '/contact') {
        return `${frontendPath}/pages/ContactPage.js`;
    } else if (path === '/plants-fish/' || path === '/plants-fish') {
        return `${frontendPath}/pages/PlantsFishPage.js`;
    } else if (path === '/pondsupplies/' || path === '/pond-supplies') {
        return `${frontendPath}/pages/PondSuppliesPage.js`;
    } else if (path === '/fish-koi/' || path === '/fish-koi') {
        return `${frontendPath}/pages/PlantsFishPage.js`; // Koi page redirects to plants-fish
    } else if (path === '/aquatic-plants/' || path === '/aquatic-plants') {
        return `${frontendPath}/pages/PlantsFishPage.js`; // Aquatic plants redirects to plants-fish
    } else if (path.startsWith('/service-areas/')) {
        // Check if there's a specific service area page file
        const citySlug = path.replace('/service-areas/', '').replace('/', '');
        const serviceAreaFile = `${frontendPath}/pages/ServiceAreas/${citySlug}.js`;
        if (fs.existsSync(serviceAreaFile)) {
            return serviceAreaFile;
        }
        // Fallback to SimpleCityPage for dynamic routing
        return `${frontendPath}/pages/SimpleCityPage.js`;
    } else if (path.startsWith('/pond-construction-') || 
               path.startsWith('/pond-cleaning-') || 
               path.startsWith('/pond-repair-') || 
               path.startsWith('/pond-dredging-') || 
               path.startsWith('/pond-maintenance-') || 
               path.startsWith('/pond-harvesting-') || 
               path.startsWith('/water-feature-design-') || 
               path.startsWith('/lake-dredging-')) {
        // These are city-specific service pages, use SimpleCityPage
        return `${frontendPath}/pages/SimpleCityPage.js`;
    } else if (path === '/pond-services' || path === '/pond-services/') {
        return `${frontendPath}/pages/PondServicesPage.js`;
    } else if (path === '/free-estimate' || path === '/free-estimate/') {
        return `${frontendPath}/pages/FreeEstimatePage.js`;
    } else if (path === '/resources' || path === '/resources/') {
        return `${frontendPath}/pages/ResourcesPage.js`;
    } else if (path === '/blog' || path === '/blog/') {
        return `${frontendPath}/pages/BlogPage.js`;
    } else if (path === '/about' || path === '/about/') {
        return `${frontendPath}/pages/AboutPage.js`;
    } else if (path === '/pond-gallery' || path === '/pond-gallery/') {
        return `${frontendPath}/pages/PondGalleryPage.js`;
    } else if (path === '/pond-supplies' || path === '/pond-supplies/') {
        return `${frontendPath}/pages/PondSuppliesPage.js`;
    } else if (path === '/services' || path === '/services/') {
        return `${frontendPath}/pages/ServicesPage.js`;
    } else if (path === '/shop' || path === '/shop/') {
        return `${frontendPath}/pages/ShopPage.js`;
    }
    
    return null;
}

// Generate internal link JSX
function generateInternalLink(keyword, targetUrl) {
    const baseUrl = 'https://utahwatergardens.com';
    let linkPath = targetUrl.replace(baseUrl, '');
    
    // Handle trailing slashes
    if (linkPath.endsWith('/') && linkPath !== '/') {
        linkPath = linkPath.slice(0, -1);
    }
    
    return `<Link to="${linkPath}" className="internal-link">${keyword}</Link>`;
}

// Add internal links to a page
function addInternalLinksToPage(filePath, links) {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return false;
    }
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if Link is already imported
        if (!content.includes("import { Link } from 'react-router-dom'") && !content.includes('from "react-router-dom"')) {
            // Find the import section and add Link import
            const importMatch = content.match(/import.*from ['"]react-router-dom['"];?/);
            if (importMatch) {
                content = content.replace(
                    importMatch[0],
                    importMatch[0].replace('}', ' Link}')
                );
            } else {
                // Add import at the top
                const firstImport = content.match(/import.*from ['"].*['"];?/);
                if (firstImport) {
                    content = content.replace(
                        firstImport[0],
                        `import { Link } from 'react-router-dom';\n${firstImport[0]}`
                    );
                }
            }
        }
        
        // Find a good place to add the internal links
        // Look for existing content sections or add before the closing component
        const linkText = links.map(link => 
            `        ${generateInternalLink(link.keyword, link.targetPage)}`
        ).join('\n');
        
        // Try to find a good insertion point
        let insertionPoint = content.lastIndexOf('  );');
        if (insertionPoint === -1) {
            insertionPoint = content.lastIndexOf('  </>');
        }
        if (insertionPoint === -1) {
            insertionPoint = content.lastIndexOf('  </div>');
        }
        
        if (insertionPoint !== -1) {
            const beforeInsertion = content.substring(0, insertionPoint);
            const afterInsertion = content.substring(insertionPoint);
            
            const internalLinksSection = `
  {/* Internal Links for SEO */}
  <div className="internal-links-section" style={{ display: 'none' }}>
${linkText}
  </div>
`;
            
            content = beforeInsertion + internalLinksSection + afterInsertion;
            
            fs.writeFileSync(filePath, content);
            console.log(`Added ${links.length} internal links to ${filePath}`);
            return true;
        } else {
            console.log(`Could not find insertion point in ${filePath}`);
            return false;
        }
        
    } catch (error) {
        console.error(`Error updating ${filePath}:`, error);
        return false;
    }
}

// Main implementation function
function implementInternalLinks() {
    console.log('=== IMPLEMENTING INTERNAL LINKS ===\n');
    
    const recommendations = loadRecommendations();
    if (!recommendations) {
        console.log('No recommendations found. Run process-internal-links.js first.');
        return;
    }
    
    let totalLinks = 0;
    let successfulUpdates = 0;
    let failedUpdates = 0;
    
    // Process each source page
    for (const [sourceUrl, links] of Object.entries(recommendations)) {
        console.log(`\nProcessing: ${sourceUrl}`);
        console.log(`Links to add: ${links.length}`);
        
        const filePath = getFilePathFromUrl(sourceUrl);
        if (!filePath) {
            console.log(`  ❌ No file path found for: ${sourceUrl}`);
            failedUpdates++;
            continue;
        }
        
        console.log(`  📁 File: ${filePath}`);
        console.log(`  📁 File exists: ${fs.existsSync(filePath)}`);
        
        console.log(`  📁 File: ${filePath}`);
        
        if (addInternalLinksToPage(filePath, links)) {
            successfulUpdates++;
            totalLinks += links.length;
            console.log(`  ✅ Successfully added ${links.length} links`);
        } else {
            failedUpdates++;
            console.log(`  ❌ Failed to add links`);
        }
    }
    
    console.log(`\n=== IMPLEMENTATION SUMMARY ===`);
    console.log(`Total links added: ${totalLinks}`);
    console.log(`Successful page updates: ${successfulUpdates}`);
    console.log(`Failed page updates: ${failedUpdates}`);
    console.log(`Total pages processed: ${Object.keys(recommendations).length}`);
}

// Run the implementation
if (require.main === module) {
    implementInternalLinks();
}

module.exports = { implementInternalLinks, addInternalLinksToPage, generateInternalLink };
