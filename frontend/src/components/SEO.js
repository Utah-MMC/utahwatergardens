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
  noIndex = false 
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

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={fullCanonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Utah Water Gardens" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      
    </Helmet>
  );
};

export default SEO;