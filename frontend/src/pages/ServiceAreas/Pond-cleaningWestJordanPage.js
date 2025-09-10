import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Pond-cleaningWestJordanPage = () => {
  const cityData = getCityData('westjordan');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Pond-cleaningWestJordanPage;