import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const SaltLakeCityPageNew = () => {
  const cityData = getCityData('salt-lake-city');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default SaltLakeCityPageNew;
