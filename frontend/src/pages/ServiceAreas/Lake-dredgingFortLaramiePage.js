import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Lake-dredgingFortLaramiePage = () => {
  const cityData = getCityData('lake-dredgingfortlaramie');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Lake-dredgingFortLaramiePage;