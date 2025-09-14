import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  noIndex = false,
  structuredData = null,
  ogTitle = null,
  ogDescription = null,
  twitterCard = 'summary_large_image'
}) => {
  const location = useLocation();
  
  // Generate canonical URL based on current path
  const generateCanonicalUrl = () => {
    if (canonical) return canonical;
    
    const pathname = location.pathname;
    // Remove trailing slash and ensure clean URL
    const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    return `https://utahwatergardens.com${cleanPath}`;
  };
  
  const fullTitle = title ? `${title} | Utah Water Gardens` : 'Utah Water Gardens - Complete Pond & Water Feature Solutions';
  const fullDescription = description || 'Utah\'s premier pond and water feature specialists. We design, build, and maintain beautiful custom ponds, waterfalls, and aquatic plant features throughout Utah.';
  const fullKeywords = keywords || 'pond maintenance, pond cleaning, pond construction, pond dredging, aquatic plants, koi fish, pond supplies, utah water gardens';
  const fullCanonical = generateCanonicalUrl();
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://utahwatergardens.com${ogImage}`;
  const fullOgTitle = ogTitle || fullTitle;
  const fullOgDescription = ogDescription || fullDescription;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={fullCanonical} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      <meta charSet="utf-8" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="author" content="Utah Water Gardens" />
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US-UT" />
      <meta name="geo.placename" content="Salt Lake City" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullOgTitle} />
      <meta property="og:description" content={fullOgDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Utah Water Gardens" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullOgTitle} />
      <meta name="twitter:description" content={fullOgDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@utahwatergardens" />
      <meta name="twitter:creator" content="@utahwatergardens" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data for Business */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Utah Water Gardens",
            "description": "Utah's premier pond and water feature specialists. We design, build, and maintain beautiful custom ponds, waterfalls, and aquatic plant features.",
            "url": "https://utahwatergardens.com",
            "telephone": "(801) 590-8516",
            "email": "contact@utahwatergardens.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5911 S 1300 E",
              "addressLocality": "Salt Lake City",
              "addressRegion": "UT",
              "postalCode": "84121",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.7608",
              "longitude": "-111.8910"
            },
            "openingHours": [
              "Mo-Fr 10:00-18:00",
              "Sa 09:00-16:00"
            ],
            "priceRange": "$$",
            "image": "https://utahwatergardens.com/images/og-image.jpg",
            "logo": "https://utahwatergardens.com/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/utahwatergardens",
              "https://www.instagram.com/utahwatergardens"
            ],
            "serviceArea": {
              "@type": "State",
              "name": "Utah"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pond Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pond Design & Construction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pond Maintenance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Aquatic Plant Care"
                  }
                }
              ]
            }
          })}
        </script>
      )}
      
    </Helmet>
  );
};

export default SEO;