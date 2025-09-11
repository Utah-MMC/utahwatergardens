import React from 'react';
import PondHarvestingTemplate from '../../components/PondHarvestingTemplate';

const HarvestingBattleMountainPage = () => {
  const cityData = {
    cityName: 'Battle Mountain',
    citySlug: 'battle-mountain',
    state: 'Nevada',
    phoneNumber: '(801) 590-8516',
    landmarks: [
      // Add local landmarks here
    ],
    businessDistricts: [
      // Add local business districts here
    ],
    contentSections: {
      localInfo: `Battle Mountain is a vibrant Nevada community known for its unique character and local attractions. Our pond and lake harvesting services in Battle Mountain help maintain the natural beauty of this area while preserving water quality for both recreational and ecological purposes.`,
      serviceAreas: `We provide professional pond and lake harvesting services throughout Battle Mountain and the surrounding area, including residential neighborhoods, commercial properties, and local water features.`
    }
  };

  return <PondHarvestingTemplate {...cityData} />;
};

export default HarvestingBattleMountainPage;