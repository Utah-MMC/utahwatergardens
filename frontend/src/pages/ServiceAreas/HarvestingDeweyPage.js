import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const DeweyPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="DeweyPage"
      citySlug="deweypage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default DeweyPagePage;