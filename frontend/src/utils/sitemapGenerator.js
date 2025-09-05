// Sitemap generator for SEO optimization
export const generateSitemap = () => {
  const baseUrl = 'https://utahwatergardens.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/shop', priority: '0.8', changefreq: 'weekly' },
    { url: '/resources', priority: '0.7', changefreq: 'weekly' },
    { url: '/plants-fish', priority: '0.8', changefreq: 'weekly' },
    { url: '/pond-services', priority: '0.8', changefreq: 'weekly' },
    { url: '/pond-supplies', priority: '0.8', changefreq: 'weekly' },
    { url: '/pond-gallery', priority: '0.7', changefreq: 'monthly' },
    { url: '/free-estimate', priority: '0.9', changefreq: 'monthly' },
  ];

  const serviceAreaPages = [
    'salt-lake-city', 'west-jordan', 'sandy', 'murray', 'west-valley-city',
    'south-jordan', 'riverton', 'herriman', 'bluffdale', 'draper', 'midvale',
    'taylorsville', 'kearns', 'magna', 'millcreek', 'holladay', 'cottonwood-heights',
    'clearfield', 'bountiful', 'kaysville', 'farmington', 'centerville',
    'north-salt-lake', 'woods-cross', 'syracuse', 'clinton', 'roy', 'south-ogden',
    'washington-terrace', 'riverdale', 'pleasant-view', 'north-ogden', 'ogden',
    'layton', 'lehi', 'american-fork', 'pleasant-grove', 'lindon', 'spanish-fork',
    'springville', 'mapleton', 'payson', 'salem', 'cedar-hills', 'alpine',
    'highland', 'saratoga-springs', 'eagle-mountain', 'cedar-valley', 'genola',
    'goshen', 'woodland-hills', 'provo', 'orem', 'kamas', 'oakley', 'francis',
    'hoytsville', 'peoa', 'samak', 'snyderville', 'pepperwood', 'red-ledges',
    'grantsville', 'stansbury-park', 'lake-point', 'erda', 'stockton', 'vernon',
    'wendover', 'dugway', 'ibapah', 'heber-city', 'midway', 'cedar-city',
    'st-george', 'mesquite', 'nephi', 'mona', 'manti', 'ephraim', 'richfield',
    'salina', 'delta', 'fillmore', 'beaver', 'milford', 'enoch', 'parowan',
    'hurricane', 'la-verkin', 'virgin', 'springdale', 'ivins', 'santa-clara',
    'washington', 'leeds', 'coalville', 'park-city', 'tooele'
  ];

  const productPages = [
    'aquatic-plants', 'koi-goldfish', 'water-lilies', 'floating-plants',
    'pond-design-build', 'filtration-systems', 'marginal-plants',
    'pond-maintenance', 'water-quality-testing', 'pond-cleaning',
    'equipment-repair', 'seasonal-services', 'pumps-aeration', 'pond-liners',
    'water-treatments', 'pond-lighting', 'tools-accessories'
  ];

  const resourcePages = [
    'care-guides', 'tips-tricks', 'seasonal-care', 'troubleshooting',
    'video-tutorials', 'faq'
  ];

  const servicePages = [
    'pond-dredging', 'lake-dredging', 'harvesting', 'truxor-service'
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add service area pages
  serviceAreaPages.forEach(area => {
    sitemap += `
  <url>
    <loc>${baseUrl}/service-areas/${area}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  // Add product pages
  productPages.forEach(product => {
    sitemap += `
  <url>
    <loc>${baseUrl}/${product}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Add resource pages
  resourcePages.forEach(resource => {
    sitemap += `
  <url>
    <loc>${baseUrl}/resources/${resource}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  // Add service pages
  servicePages.forEach(service => {
    sitemap += `
  <url>
    <loc>${baseUrl}/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://utahwatergardens.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Allow all main content
Allow: /plants-fish/
Allow: /pond-services/
Allow: /pond-supplies/
Allow: /resources/
Allow: /about/
Allow: /contact/
Allow: /shop/
Allow: /service-areas/`;
};
