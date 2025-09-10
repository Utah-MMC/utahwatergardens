import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const BasinPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="BasinPage"
      citySlug="basinpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default BasinPagePage;