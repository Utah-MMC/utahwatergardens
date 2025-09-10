import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Lake-dredgingGlenwoodSpringsPage = () => {
  const cityData = getCityData('lake-dredgingglenwoodsprings');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Lake-dredgingGlenwoodSpringsPage;