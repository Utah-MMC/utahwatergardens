import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const HooperPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="HooperPage"
      citySlug="hooperpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default HooperPagePage;