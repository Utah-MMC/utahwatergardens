// Alternative: Dynamic routing approach
// This approach uses a single dynamic route instead of thousands of individual routes

// In App.js, replace all individual city routes with:
<Route path="/:citySlug" element={<CityPage />} />

// Create a new CityPage component that handles all cities dynamically:
import React from 'react';
import { useParams } from 'react-router-dom';
import CityPageTemplate from './components/CityPageTemplate';
import { getCityData } from './data/cityData';

const CityPage = () => {
  const { citySlug } = useParams();
  const cityData = getCityData(citySlug);
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default CityPage;

// This approach is more maintainable and doesn't require thousands of route entries
