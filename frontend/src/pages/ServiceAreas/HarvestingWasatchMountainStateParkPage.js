import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const HarvestingWasatchMountainStateParkPage = () => {
  const cityData = getCityData('wasatchmountainstatepark');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default HarvestingWasatchMountainStateParkPage;