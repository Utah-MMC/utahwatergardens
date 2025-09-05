import { siteConfig, seoDefaults, structuredData } from '../data/siteData';

// Generate SEO data for different page types
export const generateSEOData = (pageType, pageData = {}) => {
  const baseUrl = siteConfig.url;
  
  const seoData = {
    title: seoDefaults.title,
    description: seoDefaults.description,
    keywords: seoDefaults.keywords,
    image: seoDefaults.image,
    url: '/',
    type: 'website',
    structuredData: structuredData.organization
  };

  switch (pageType) {
    case 'home':
      return {
        ...seoData,
        title: `${siteConfig.name} - ${siteConfig.tagline}`,
        description: siteConfig.description,
        structuredData: structuredData.localBusiness
      };

    case 'service-area':
      const areaName = pageData.areaName || 'Service Area';
      return {
        ...seoData,
        title: `Pond Services in ${areaName}, UT | ${siteConfig.name}`,
        description: `Professional pond services in ${areaName}, Utah. Pond maintenance, cleaning, construction, and more. Call ${siteConfig.phone} for a free estimate.`,
        keywords: `pond services ${areaName} utah, pond maintenance ${areaName}, pond cleaning ${areaName}, pond construction ${areaName}`,
        url: `/service-areas/${pageData.slug}`,
        structuredData: {
          ...structuredData.localBusiness,
          name: `${siteConfig.name} - ${areaName}`,
          serviceArea: {
            "@type": "City",
            "name": areaName,
            "containedInPlace": {
              "@type": "State",
              "name": "Utah"
            }
          }
        }
      };

    case 'product':
      const productName = pageData.productName || 'Product';
      return {
        ...seoData,
        title: `${productName} | ${siteConfig.name}`,
        description: `Shop ${productName} at ${siteConfig.name}. High-quality pond supplies and equipment. Visit our store or order online.`,
        keywords: `${productName.toLowerCase()}, pond supplies, aquatic plants, pond equipment`,
        url: `/${pageData.slug}`,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": productName,
          "description": `High-quality ${productName.toLowerCase()} for your pond`,
          "brand": {
            "@type": "Brand",
            "name": siteConfig.name
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": siteConfig.name
            }
          }
        }
      };

    case 'service':
      const serviceName = pageData.serviceName || 'Service';
      return {
        ...seoData,
        title: `${serviceName} | ${siteConfig.name}`,
        description: `Professional ${serviceName.toLowerCase()} services in Utah. Expert pond care and maintenance. Call ${siteConfig.phone} for a consultation.`,
        keywords: `${serviceName.toLowerCase()}, pond services utah, professional pond care`,
        url: `/${pageData.slug}`,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceName,
          "description": `Professional ${serviceName.toLowerCase()} services`,
          "provider": {
            "@type": "Organization",
            "name": siteConfig.name
          },
          "areaServed": {
            "@type": "State",
            "name": "Utah"
          }
        }
      };

    case 'resource':
      const resourceTitle = pageData.resourceTitle || 'Resource';
      return {
        ...seoData,
        title: `${resourceTitle} | ${siteConfig.name}`,
        description: `Learn about ${resourceTitle.toLowerCase()} with expert guides from ${siteConfig.name}. Professional pond care tips and advice.`,
        keywords: `${resourceTitle.toLowerCase()}, pond care guide, pond maintenance tips`,
        url: `/resources/${pageData.slug}`,
        type: 'article',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": resourceTitle,
          "description": `Expert guide on ${resourceTitle.toLowerCase()}`,
          "author": {
            "@type": "Organization",
            "name": siteConfig.name
          },
          "publisher": {
            "@type": "Organization",
            "name": siteConfig.name,
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/images/utahWaterGardensLogo500x463.png`
            }
          }
        }
      };

    case 'about':
      return {
        ...seoData,
        title: `About Us | ${siteConfig.name}`,
        description: `Learn about ${siteConfig.name}'s history, team, and commitment to providing the best pond services in Utah.`,
        keywords: 'about utah water gardens, pond company utah, pond experts',
        url: '/about',
        structuredData: structuredData.organization
      };

    case 'contact':
      return {
        ...seoData,
        title: `Contact Us | ${siteConfig.name}`,
        description: `Get in touch with ${siteConfig.name} for pond services, consultations, or questions. Call ${siteConfig.phone} or visit our store.`,
        keywords: 'contact utah water gardens, pond consultation, pond services utah',
        url: '/contact',
        structuredData: structuredData.localBusiness
      };

    case 'shop':
      return {
        ...seoData,
        title: `Shop | ${siteConfig.name}`,
        description: `Shop the largest variety of aquatic plants and pond supplies in Utah. Visit our store or shop online with delivery options.`,
        keywords: 'pond supplies utah, aquatic plants, pond equipment, pond shop',
        url: '/shop',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Store",
          "name": `${siteConfig.name} Store`,
          "description": "Pond supplies and aquatic plants store",
          "address": structuredData.localBusiness.address,
          "telephone": siteConfig.phone,
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 09:00-17:00"
          ]
        }
      };

    default:
      return seoData;
  }
};

// Generate breadcrumb structured data
export const generateBreadcrumbData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteConfig.url}${crumb.path}`
    }))
  };
};

// Generate FAQ structured data
export const generateFAQData = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate review structured data
export const generateReviewData = (reviews) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviews.averageRating,
      "reviewCount": reviews.totalReviews
    },
    "review": reviews.reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      },
      "reviewBody": review.text
    }))
  };
};
