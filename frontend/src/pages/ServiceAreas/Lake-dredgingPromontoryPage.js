import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Lake-dredgingPromontoryPage = () => {
  const cityData = getCityData('lake-dredgingpromontory');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Lake-dredgingPromontoryPage;