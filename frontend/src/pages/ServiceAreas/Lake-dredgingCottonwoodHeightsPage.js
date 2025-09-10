import React from 'react';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../data/cityData';

const Lake-dredgingCottonwoodHeightsPage = () => {
  const cityData = getCityData('lake-dredgingcottonwoodheights');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
};

export default Lake-dredgingCottonwoodHeightsPage;