import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const CedarHillsPagePage = () => {
  const cityData = getCityData('cedar-hills-page');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default CedarHillsPagePage;
