import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Lake-dredgingTetonVillagePage = () => {
  const cityData = getCityData('lake-dredgingtetonvillage');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Lake-dredgingTetonVillagePage;