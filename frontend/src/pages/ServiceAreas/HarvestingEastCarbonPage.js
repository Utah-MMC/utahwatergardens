import React from 'react';
import PondHarvestingTemplate from '../../components/PondHarvestingTemplate';

const HarvestingEastCarbonPage = () => {
  const cityData = {
    cityName: 'East Carbon',
    citySlug: 'east-carbon',
    state: 'Utah',
    phoneNumber: '(801) 590-8516',
    landmarks: [
      // Add local landmarks here
    ],
    businessDistricts: [
      // Add local business districts here
    ],
    contentSections: {
      localInfo: `East Carbon is a beautiful Utah community known for its stunning natural landscapes and outdoor recreation opportunities. Our pond and lake harvesting services in East Carbon help maintain the natural beauty of this area while preserving water quality for both recreational and ecological purposes.`,
      serviceAreas: `We provide professional pond and lake harvesting services throughout East Carbon and the surrounding area, including residential neighborhoods, commercial properties, and local water features.`
    }
  };

  return <PondHarvestingTemplate {...cityData} />;
};

export default HarvestingEastCarbonPage;