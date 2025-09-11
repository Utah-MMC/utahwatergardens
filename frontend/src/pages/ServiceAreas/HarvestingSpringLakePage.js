import React from 'react';
import PondHarvestingTemplate from '../../components/PondHarvestingTemplate';

const HarvestingSpringLakePage = () => {
  const cityData = {
    cityName: 'Spring Lake',
    citySlug: 'spring-lake',
    state: 'Utah',
    phoneNumber: '(801) 590-8516',
    landmarks: [
      // Add local landmarks here
    ],
    businessDistricts: [
      // Add local business districts here
    ],
    contentSections: {
      localInfo: `Spring Lake is a beautiful Utah community known for its stunning natural landscapes and outdoor recreation opportunities. Our pond and lake harvesting services in Spring Lake help maintain the natural beauty of this area while preserving water quality for both recreational and ecological purposes.`,
      serviceAreas: `We provide professional pond and lake harvesting services throughout Spring Lake and the surrounding area, including residential neighborhoods, commercial properties, and local water features.`
    }
  };

  return <PondHarvestingTemplate {...cityData} />;
};

export default HarvestingSpringLakePage;