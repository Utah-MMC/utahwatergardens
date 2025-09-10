import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const SandyPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Sandy"
      citySlug="sandy"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default SandyPage;