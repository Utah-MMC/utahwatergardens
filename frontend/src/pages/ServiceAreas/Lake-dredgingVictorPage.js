import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Lake-dredgingVictorPage = () => {
  const cityData = getCityData('lake-dredgingvictor');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Lake-dredgingVictorPage;