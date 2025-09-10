import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const OakleyPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Oakley"
      citySlug="oakley"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default OakleyPage;