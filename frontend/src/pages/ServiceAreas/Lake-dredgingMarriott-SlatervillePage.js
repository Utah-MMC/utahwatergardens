import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Lake-dredgingMarriott-SlatervillePage = () => {
  const cityData = getCityData('lake-dredgingmarriott-slaterville');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Lake-dredgingMarriott-SlatervillePage;