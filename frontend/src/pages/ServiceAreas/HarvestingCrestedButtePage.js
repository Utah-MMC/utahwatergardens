import React from 'react';
import PondHarvestingTemplate from '../../components/PondHarvestingTemplate';

const HarvestingCrestedButtePage = () => {
  const cityData = {
    cityName: 'Crested Butte',
    citySlug: 'crested-butte',
    state: 'Colorado',
    phoneNumber: '(801) 590-8516',
    landmarks: [
      // Add local landmarks here
    ],
    businessDistricts: [
      // Add local business districts here
    ],
    contentSections: {
      localInfo: `Crested Butte is a vibrant Colorado community known for its unique character and local attractions. Our pond and lake harvesting services in Crested Butte help maintain the natural beauty of this area while preserving water quality for both recreational and ecological purposes.`,
      serviceAreas: `We provide professional pond and lake harvesting services throughout Crested Butte and the surrounding area, including residential neighborhoods, commercial properties, and local water features.`
    }
  };

  return <PondHarvestingTemplate {...cityData} />;
};

export default HarvestingCrestedButtePage;