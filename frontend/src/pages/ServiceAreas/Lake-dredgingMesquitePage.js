import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Lake-dredgingMesquitePage = () => {
  const cityData = getCityData('lake-dredgingmesquite');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Lake-dredgingMesquitePage;