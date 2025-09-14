import React from 'react';
import { useParams } from 'react-router-dom';
import { generateServicePageContent, TEMPLATE_TYPES } from '../utils/servicePageRandomizer';

const DebugRandomizedPage = () => {
  const { serviceType, citySlug } = useParams();
  
  // Convert slug to proper city name
  const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Determine state based on city
  const getStateForCity = (cityName) => {
    const nonUtahCities = {
      'Boulder': 'Colorado',
      'Denver': 'Colorado',
      'Colorado Springs': 'Colorado',
      'Las Vegas': 'Nevada',
      'Phoenix': 'Arizona',
      'Boise': 'Idaho',
      'Jackson': 'Wyoming',
      'Casper': 'Wyoming'
    };
    return nonUtahCities[cityName] || 'Utah';
  };
  
  const state = getStateForCity(cityName);
  
  // Generate randomized content
  const randomizedContent = generateServicePageContent(citySlug, serviceType, cityName, state);
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🎲 Randomization Debug Page</h1>
      
      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
        <h2>URL Parameters:</h2>
        <p><strong>Service Type:</strong> {serviceType}</p>
        <p><strong>City Slug:</strong> {citySlug}</p>
        <p><strong>City Name:</strong> {cityName}</p>
        <p><strong>State:</strong> {state}</p>
      </div>
      
      <div style={{ backgroundColor: '#e8f4fd', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
        <h2>🎨 Randomized Content:</h2>
        <p><strong>Template Type:</strong> <span style={{ color: '#1e40af', fontWeight: 'bold' }}>{randomizedContent.templateType}</span></p>
        <p><strong>Hero Title:</strong> {randomizedContent.heroTitle}</p>
        <p><strong>Hero Subtitle:</strong> {randomizedContent.heroSubtitle}</p>
      </div>
      
      <div style={{ backgroundColor: '#f0f8e8', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
        <h2>📝 Overview Content:</h2>
        <p>{randomizedContent.overview}</p>
      </div>
      
      <div style={{ backgroundColor: '#fff8e8', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
        <h2>🔧 Residential Services:</h2>
        <ul>
          {randomizedContent.residentialServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      
      <div style={{ backgroundColor: '#f8e8ff', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
        <h2>💡 Why Choose Us:</h2>
        <p>{randomizedContent.whyChooseUs}</p>
      </div>
      
      <div style={{ backgroundColor: '#ffe8e8', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
        <h2>🧪 Test Other URLs:</h2>
        <p>Try these URLs to see different templates:</p>
        <ul>
          <li><a href="/pond-cleaning/salt-lake-city">/pond-cleaning/salt-lake-city</a></li>
          <li><a href="/pond-dredging/west-jordan">/pond-dredging/west-jordan</a></li>
          <li><a href="/pond-construction/sandy">/pond-construction/sandy</a></li>
          <li><a href="/harvesting/provo">/harvesting/provo</a></li>
          <li><a href="/pond-cleaning/ogden">/pond-cleaning/ogden</a></li>
        </ul>
      </div>
    </div>
  );
};

export default DebugRandomizedPage;
