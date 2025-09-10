import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const CentralPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="CentralPage"
      citySlug="centralpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default CentralPagePage;