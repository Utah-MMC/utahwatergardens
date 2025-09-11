import React from 'react';
import PondHarvestingTemplate from '../../components/PondHarvestingTemplate';

const HarvestingCedaredgePage = () => {
  const cityData = {
    cityName: 'Cedaredge',
    citySlug: 'cedaredge',
    state: 'Colorado',
    phoneNumber: '(801) 590-8516',
    landmarks: [
      // Add local landmarks here
    ],
    businessDistricts: [
      // Add local business districts here
    ],
    contentSections: {
      localInfo: `Cedaredge is a vibrant Colorado community known for its unique character and local attractions. Our pond and lake harvesting services in Cedaredge help maintain the natural beauty of this area while preserving water quality for both recreational and ecological purposes.`,
      serviceAreas: `We provide professional pond and lake harvesting services throughout Cedaredge and the surrounding area, including residential neighborhoods, commercial properties, and local water features.`
    }
  };

  return <PondHarvestingTemplate {...cityData} />;
};

export default HarvestingCedaredgePage;