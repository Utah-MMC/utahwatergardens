import React from 'react';
import PondHarvestingTemplate from '../../components/PondHarvestingTemplate';
// Updated to use PondHarvestingTemplate

const HarvestingMidvalePage = () => {
  const cityData = {
    cityName: 'Midvale',
    citySlug: 'midvale',
    state: 'Utah',
    phoneNumber: '(801) 590-8516',
    landmarks: [
      // Add local landmarks here
    ],
    businessDistricts: [
      // Add local business districts here
    ],
    contentSections: {
      localInfo: `Midvale is a beautiful Utah community known for its stunning natural landscapes and outdoor recreation opportunities. Our pond and lake harvesting services in Midvale help maintain the natural beauty of this area while preserving water quality for both recreational and ecological purposes.`,
      serviceAreas: `We provide professional pond and lake harvesting services throughout Midvale and the surrounding area, including residential neighborhoods, commercial properties, and local water features.`
    }
  };

  return <PondHarvestingTemplate {...cityData} />;
};

export default HarvestingMidvalePage;