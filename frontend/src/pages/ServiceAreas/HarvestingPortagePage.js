import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const PortagePagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="PortagePage"
      citySlug="portagepage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default PortagePagePage;