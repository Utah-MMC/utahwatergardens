import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const HurricanePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Hurricane"
      citySlug="hurricane"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default HurricanePage;