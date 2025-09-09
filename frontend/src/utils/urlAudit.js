// URL Audit Utility
// This script helps verify that all URLs work correctly and there are no conflicts

import { utahCitiesByCounty, createCityUrl } from '../data/utahCities';

// Reserved paths that should not be treated as city names
export const reservedPaths = [
  'contact', 'about', 'blog', 'plants-fish', 'pond-services', 'pond-supplies', 
  'resources', 'pond-gallery', 'free-estimate', 'services', 'shop', 'team',
  'plants', 'fish-and-koi', 'koi', 'aquatic-plants', 'privacy-and-legal-info',
  'pond-consultations', 'pond-maintenance', 'pond-cleaning', 'pond-construction',
  'pond-repair-and-rebuild', 'pond-and-lake-dredging', 'pond-filters', 'pumps',
  'plant-delivery', 'schedule'
];

// Get all city URLs
export const getAllCityUrls = () => {
  const cityUrls = [];
  Object.values(utahCitiesByCounty).forEach(countyCities => {
    countyCities.forEach(city => {
      const url = createCityUrl(city);
      cityUrls.push({
        city,
        url,
        fullUrl: `https://utahwatergardens.com/${url}`
      });
    });
  });
  return cityUrls;
};

// Check for potential conflicts
export const checkForConflicts = () => {
  const cityUrls = getAllCityUrls();
  const conflicts = [];
  
  // Check for conflicts with reserved paths
  cityUrls.forEach(({ city, url }) => {
    if (reservedPaths.includes(url)) {
      conflicts.push({
        type: 'reserved_path_conflict',
        city,
        url,
        conflict: 'City URL conflicts with reserved path'
      });
    }
  });
  
  // Check for duplicate URLs
  const urlCounts = {};
  cityUrls.forEach(({ city, url }) => {
    if (urlCounts[url]) {
      urlCounts[url].push(city);
    } else {
      urlCounts[url] = [city];
    }
  });
  
  Object.entries(urlCounts).forEach(([url, cities]) => {
    if (cities.length > 1) {
      conflicts.push({
        type: 'duplicate_url',
        url,
        cities,
        conflict: 'Multiple cities have the same URL'
      });
    }
  });
  
  return conflicts;
};

// Generate URL report
export const generateUrlReport = () => {
  const cityUrls = getAllCityUrls();
  const conflicts = checkForConflicts();
  
  return {
    totalCities: cityUrls.length,
    totalCounties: Object.keys(utahCitiesByCounty).length,
    conflicts: conflicts.length,
    conflictDetails: conflicts,
    sampleUrls: cityUrls.slice(0, 10),
    allUrls: cityUrls
  };
};

// Validate a specific URL
export const validateUrl = (url) => {
  // Remove leading slash if present
  const cleanUrl = url.replace(/^\//, '');
  
  // Check if it's a reserved path
  if (reservedPaths.includes(cleanUrl)) {
    return {
      valid: true,
      type: 'reserved_path',
      message: 'This is a reserved path, not a city'
    };
  }
  
  // Check if it's a city URL
  const cityUrls = getAllCityUrls();
  const cityMatch = cityUrls.find(city => city.url === cleanUrl);
  
  if (cityMatch) {
    return {
      valid: true,
      type: 'city_url',
      city: cityMatch.city,
      message: `Valid city URL for ${cityMatch.city}`
    };
  }
  
  return {
    valid: false,
    type: 'unknown',
    message: 'URL not found in city list or reserved paths'
  };
};

// Console logging for development
if (process.env.NODE_ENV === 'development') {
  console.log('🔍 URL Audit Report:');
  const report = generateUrlReport();
  console.log(`📊 Total Cities: ${report.totalCities}`);
  console.log(`🏛️ Total Counties: ${report.totalCounties}`);
  console.log(`⚠️ Conflicts: ${report.conflicts}`);
  
  if (report.conflicts > 0) {
    console.log('🚨 Conflicts found:');
    report.conflictDetails.forEach(conflict => {
      console.log(`  - ${conflict.conflict}: ${JSON.stringify(conflict)}`);
    });
  } else {
    console.log('✅ No conflicts found!');
  }
  
  console.log('📝 Sample URLs:');
  report.sampleUrls.forEach(({ city, url }) => {
    console.log(`  - ${city}: /${url}`);
  });
}
