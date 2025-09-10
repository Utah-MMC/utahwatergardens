import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const AustinPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="AustinPage"
      citySlug="austinpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default AustinPagePage;