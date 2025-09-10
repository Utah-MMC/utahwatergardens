import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const ClintonPage = () => {
  const cityData = getCityData('clinton');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default ClintonPage;