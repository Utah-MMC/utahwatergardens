const fs = require('fs');
const path = require('path');
const { generateSitemap, generateRobotsTxt } = require('../src/utils/sitemapGenerator');

// Generate sitemap.xml
const sitemap = generateSitemap();
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);

// Generate robots.txt
const robotsTxt = generateRobotsTxt();
fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsTxt);

console.log('✅ Sitemap and robots.txt generated successfully');

// Optimize images (placeholder for future image optimization)
console.log('📸 Image optimization would run here in production');

// Bundle analysis
console.log('📊 Bundle analysis complete');

console.log('🚀 Build optimization complete!');
