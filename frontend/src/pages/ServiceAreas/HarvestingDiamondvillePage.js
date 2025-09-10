import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const HarvestingDiamondvillePage = () => {
  const cityData = getCityData('diamondville');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default HarvestingDiamondvillePage;