import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const BakerPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="BakerPage"
      citySlug="bakerpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default BakerPagePage;