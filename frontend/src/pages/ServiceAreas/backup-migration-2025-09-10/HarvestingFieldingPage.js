import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const FieldingPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="FieldingPage"
      citySlug="fieldingpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default FieldingPagePage;