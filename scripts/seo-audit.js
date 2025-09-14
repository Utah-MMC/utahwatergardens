#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// SEO audit configuration
const seoChecks = {
  metaTags: {
    title: { required: true, maxLength: 60 },
    description: { required: true, maxLength: 160 },
    keywords: { required: false, maxLength: 255 },
    canonical: { required: true },
    ogTitle: { required: true },
    ogDescription: { required: true },
    ogImage: { required: true },
    twitterCard: { required: true }
  },
  technical: {
    robots: { required: true },
    sitemap: { required: true },
    favicon: { required: true },
    altText: { required: true },
    headingStructure: { required: true },
    internalLinks: { required: true },
    pageSpeed: { required: true }
  },
  content: {
    wordCount: { minWords: 300 },
    headingTags: { required: true },
    imageOptimization: { required: true },
    mobileResponsive: { required: true }
  }
};

function scanForSEOComponents() {
  console.log('🔍 Scanning for SEO components...\n');
  
  const seoComponents = [];
  
  // Find all page files
  const pagesDir = path.join(__dirname, '..', 'frontend/src/pages');
  const pageFiles = fs.readdirSync(pagesDir).filter(file => file.endsWith('.js'));
  
  pageFiles.forEach(file => {
    const filePath = path.join(pagesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const pageName = path.basename(file, '.js');
    
    const seoData = {
      page: pageName,
      hasSEOComponent: content.includes('import SEO') || content.includes('from \'../components/SEO\''),
      hasPageHero: content.includes('PageHero') || content.includes('StandardHero'),
      hasMetaTags: content.includes('title=') && content.includes('description='),
      hasCanonical: content.includes('canonical='),
      hasOpenGraph: content.includes('og:') || content.includes('ogTitle'),
      hasTwitterCard: content.includes('twitter:') || content.includes('twitterCard'),
      hasStructuredData: content.includes('schema.org') || content.includes('application/ld+json'),
      hasAltText: (content.match(/alt=["'][^"']*["']/g) || []).length,
      hasHeadingTags: (content.match(/<h[1-6][^>]*>/g) || []).length,
      hasInternalLinks: (content.match(/to=["'][^"']*["']/g) || []).length,
      hasImages: (content.match(/<img[^>]*>/g) || []).length,
      wordCount: content.split(/\s+/).length
    };
    
    seoComponents.push(seoData);
  });
  
  return seoComponents;
}

function checkSEOComponent() {
  console.log('📋 Checking SEO component implementation...\n');
  
  const seoComponentPath = path.join(__dirname, '..', 'frontend/src/components/SEO.js');
  
  if (!fs.existsSync(seoComponentPath)) {
    console.log('❌ SEO component not found!');
    return { exists: false };
  }
  
  const content = fs.readFileSync(seoComponentPath, 'utf8');
  
  const seoFeatures = {
    exists: true,
    hasTitle: content.includes('title'),
    hasDescription: content.includes('description'),
    hasKeywords: content.includes('keywords'),
    hasCanonical: content.includes('canonical'),
    hasOpenGraph: content.includes('og:') || content.includes('ogTitle'),
    hasTwitterCard: content.includes('twitter:') || content.includes('twitterCard'),
    hasRobots: content.includes('robots'),
    hasStructuredData: content.includes('schema.org') || content.includes('application/ld+json'),
    hasViewport: content.includes('viewport'),
    hasCharset: content.includes('charset')
  };
  
  return seoFeatures;
}

function checkPerformanceOptimizations() {
  console.log('⚡ Checking performance optimizations...\n');
  
  const performanceChecks = {
    imageOptimization: false,
    lazyLoading: false,
    codeSplitting: false,
    compression: false,
    caching: false,
    minification: false
  };
  
  // Check for image optimization
  const pagesDir = path.join(__dirname, '..', 'frontend/src/pages');
  const pageFiles = fs.readdirSync(pagesDir).filter(file => file.endsWith('.js'));
  
  let totalImages = 0;
  let optimizedImages = 0;
  
  pageFiles.forEach(file => {
    const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
    const images = content.match(/<img[^>]*>/g) || [];
    totalImages += images.length;
    
    images.forEach(img => {
      if (img.includes('loading=') || img.includes('lazy')) {
        optimizedImages++;
      }
    });
  });
  
  performanceChecks.imageOptimization = optimizedImages > 0;
  performanceChecks.lazyLoading = optimizedImages > 0;
  
  // Check for code splitting
  const appPath = path.join(__dirname, '..', 'frontend/src/App.js');
  if (fs.existsSync(appPath)) {
    const appContent = fs.readFileSync(appPath, 'utf8');
    performanceChecks.codeSplitting = appContent.includes('lazy') || appContent.includes('Suspense');
  }
  
  return performanceChecks;
}

function checkAccessibility() {
  console.log('♿ Checking accessibility compliance...\n');
  
  const accessibilityChecks = {
    altText: false,
    headingStructure: false,
    ariaLabels: false,
    keyboardNavigation: false,
    colorContrast: false,
    semanticHTML: false
  };
  
  const pagesDir = path.join(__dirname, '..', 'frontend/src/pages');
  const pageFiles = fs.readdirSync(pagesDir).filter(file => file.endsWith('.js'));
  
  let totalImages = 0;
  let imagesWithAlt = 0;
  let totalHeadings = 0;
  let ariaLabels = 0;
  
  pageFiles.forEach(file => {
    const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
    
    // Check alt text
    const images = content.match(/<img[^>]*>/g) || [];
    totalImages += images.length;
    images.forEach(img => {
      if (img.includes('alt=')) {
        imagesWithAlt++;
      }
    });
    
    // Check headings
    const headings = content.match(/<h[1-6][^>]*>/g) || [];
    totalHeadings += headings.length;
    
    // Check ARIA labels
    const ariaMatches = content.match(/aria-[^=]*=/g) || [];
    ariaLabels += ariaMatches.length;
  });
  
  accessibilityChecks.altText = imagesWithAlt === totalImages && totalImages > 0;
  accessibilityChecks.headingStructure = totalHeadings > 0;
  accessibilityChecks.ariaLabels = ariaLabels > 0;
  
  return accessibilityChecks;
}

function generateSEOReport() {
  console.log('📊 SEO AUDIT REPORT\n');
  console.log('='.repeat(50));
  
  const seoComponents = scanForSEOComponents();
  const seoComponent = checkSEOComponent();
  const performance = checkPerformanceOptimizations();
  const accessibility = checkAccessibility();
  
  // SEO Component Analysis
  console.log('\n🔧 SEO COMPONENT ANALYSIS:');
  if (seoComponent.exists) {
    console.log('✅ SEO component exists');
    console.log(`   Title: ${seoComponent.hasTitle ? '✅' : '❌'}`);
    console.log(`   Description: ${seoComponent.hasDescription ? '✅' : '❌'}`);
    console.log(`   Keywords: ${seoComponent.hasKeywords ? '✅' : '❌'}`);
    console.log(`   Canonical: ${seoComponent.hasCanonical ? '✅' : '❌'}`);
    console.log(`   Open Graph: ${seoComponent.hasOpenGraph ? '✅' : '❌'}`);
    console.log(`   Twitter Card: ${seoComponent.hasTwitterCard ? '✅' : '❌'}`);
    console.log(`   Robots: ${seoComponent.hasRobots ? '✅' : '❌'}`);
    console.log(`   Structured Data: ${seoComponent.hasStructuredData ? '✅' : '❌'}`);
    console.log(`   Viewport: ${seoComponent.hasViewport ? '✅' : '❌'}`);
    console.log(`   Charset: ${seoComponent.hasCharset ? '✅' : '❌'}`);
  } else {
    console.log('❌ SEO component missing!');
  }
  
  // Page Analysis
  console.log('\n📄 PAGE ANALYSIS:');
  const pagesWithSEO = seoComponents.filter(page => page.hasSEOComponent).length;
  const pagesWithMetaTags = seoComponents.filter(page => page.hasMetaTags).length;
  const pagesWithCanonical = seoComponents.filter(page => page.hasCanonical).length;
  const pagesWithOpenGraph = seoComponents.filter(page => page.hasOpenGraph).length;
  
  console.log(`✅ Pages with SEO component: ${pagesWithSEO}/${seoComponents.length}`);
  console.log(`✅ Pages with meta tags: ${pagesWithMetaTags}/${seoComponents.length}`);
  console.log(`✅ Pages with canonical URLs: ${pagesWithCanonical}/${seoComponents.length}`);
  console.log(`✅ Pages with Open Graph: ${pagesWithOpenGraph}/${seoComponents.length}`);
  
  // Content Analysis
  console.log('\n📝 CONTENT ANALYSIS:');
  const avgWordCount = Math.round(seoComponents.reduce((sum, page) => sum + page.wordCount, 0) / seoComponents.length);
  const totalImages = seoComponents.reduce((sum, page) => sum + page.hasImages, 0);
  const totalAltText = seoComponents.reduce((sum, page) => sum + page.hasAltText, 0);
  const totalHeadings = seoComponents.reduce((sum, page) => sum + page.hasHeadingTags, 0);
  const totalInternalLinks = seoComponents.reduce((sum, page) => sum + page.hasInternalLinks, 0);
  
  console.log(`📊 Average word count: ${avgWordCount} words`);
  console.log(`🖼️  Total images: ${totalImages}`);
  console.log(`🏷️  Images with alt text: ${totalAltText}`);
  console.log(`📋 Total headings: ${totalHeadings}`);
  console.log(`🔗 Total internal links: ${totalInternalLinks}`);
  
  // Performance Analysis
  console.log('\n⚡ PERFORMANCE ANALYSIS:');
  console.log(`🖼️  Image optimization: ${performance.imageOptimization ? '✅' : '❌'}`);
  console.log(`⏳ Lazy loading: ${performance.lazyLoading ? '✅' : '❌'}`);
  console.log(`📦 Code splitting: ${performance.codeSplitting ? '✅' : '❌'}`);
  
  // Accessibility Analysis
  console.log('\n♿ ACCESSIBILITY ANALYSIS:');
  console.log(`🏷️  Alt text coverage: ${accessibility.altText ? '✅' : '❌'}`);
  console.log(`📋 Heading structure: ${accessibility.headingStructure ? '✅' : '❌'}`);
  console.log(`🎯 ARIA labels: ${accessibility.ariaLabels ? '✅' : '❌'}`);
  
  // Recommendations
  console.log('\n💡 RECOMMENDATIONS:');
  
  if (!seoComponent.exists) {
    console.log('❌ Create SEO component with meta tags, Open Graph, and Twitter Card support');
  }
  
  if (pagesWithSEO < seoComponents.length) {
    console.log(`❌ Add SEO component to ${seoComponents.length - pagesWithSEO} pages`);
  }
  
  if (pagesWithCanonical < seoComponents.length) {
    console.log(`❌ Add canonical URLs to ${seoComponents.length - pagesWithCanonical} pages`);
  }
  
  if (pagesWithOpenGraph < seoComponents.length) {
    console.log(`❌ Add Open Graph tags to ${seoComponents.length - pagesWithOpenGraph} pages`);
  }
  
  if (totalAltText < totalImages) {
    console.log(`❌ Add alt text to ${totalImages - totalAltText} images`);
  }
  
  if (avgWordCount < 300) {
    console.log('❌ Increase content length (minimum 300 words per page)');
  }
  
  if (!performance.imageOptimization) {
    console.log('❌ Implement image optimization and lazy loading');
  }
  
  if (!performance.codeSplitting) {
    console.log('❌ Implement code splitting for better performance');
  }
  
  // Overall Score
  const totalChecks = 15;
  const passedChecks = [
    seoComponent.exists,
    seoComponent.hasTitle,
    seoComponent.hasDescription,
    seoComponent.hasCanonical,
    seoComponent.hasOpenGraph,
    seoComponent.hasTwitterCard,
    pagesWithSEO === seoComponents.length,
    pagesWithCanonical === seoComponents.length,
    pagesWithOpenGraph === seoComponents.length,
    accessibility.altText,
    accessibility.headingStructure,
    accessibility.ariaLabels,
    performance.imageOptimization,
    performance.lazyLoading,
    avgWordCount >= 300
  ].filter(Boolean).length;
  
  const seoScore = Math.round((passedChecks / totalChecks) * 100);
  
  console.log('\n🎯 OVERALL SEO SCORE:');
  console.log(`📊 ${seoScore}% (${passedChecks}/${totalChecks} checks passed)`);
  
  if (seoScore >= 90) {
    console.log('🎉 EXCELLENT! Your app is ready for search engines!');
  } else if (seoScore >= 70) {
    console.log('✅ GOOD! Minor improvements needed for optimal SEO.');
  } else if (seoScore >= 50) {
    console.log('⚠️  FAIR! Several SEO improvements needed.');
  } else {
    console.log('❌ POOR! Major SEO work required before launch.');
  }
  
  return {
    seoScore,
    passedChecks,
    totalChecks,
    seoComponents,
    seoComponent,
    performance,
    accessibility
  };
}

if (require.main === module) {
  generateSEOReport();
}

module.exports = { generateSEOReport, scanForSEOComponents, checkSEOComponent, checkPerformanceOptimizations, checkAccessibility };
