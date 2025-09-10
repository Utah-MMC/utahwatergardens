import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Pond-cleaningSouthSaltLakePage = () => {
  const cityData = getCityData('southsaltlake');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Pond-cleaningSouthSaltLakePage;