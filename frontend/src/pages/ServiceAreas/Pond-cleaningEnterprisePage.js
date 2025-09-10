import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Pond-cleaningEnterprisePage = () => {
  const cityData = getCityData('enterprise');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Pond-cleaningEnterprisePage;