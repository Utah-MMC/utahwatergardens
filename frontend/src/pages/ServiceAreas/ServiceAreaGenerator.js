import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const ServiceAreaGeneratorPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="ServiceAreaGenerator"
      citySlug="serviceareagenerator"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default ServiceAreaGeneratorPage;