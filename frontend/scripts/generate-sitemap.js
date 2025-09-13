// Script to regenerate sitemap.xml
const fs = require('fs');
const path = require('path');

// Import the sitemap generator
const { generateSitemap } = require('../src/utils/sitemapGenerator.js');

console.log('Generating sitemap...');

try {
  const sitemap = generateSitemap();
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated successfully at:', sitemapPath);
  console.log('📊 Sitemap size:', (sitemap.length / 1024).toFixed(2), 'KB');
  
  // Count URLs in sitemap
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  console.log('🔗 Total URLs in sitemap:', urlCount);
  
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
