import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const TempePagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="TempePage"
      citySlug="tempepage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default TempePagePage;