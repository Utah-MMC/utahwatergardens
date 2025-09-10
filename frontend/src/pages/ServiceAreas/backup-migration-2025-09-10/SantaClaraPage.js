import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const SantaClaraPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="SantaClara"
      citySlug="santaclara"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default SantaClaraPage;