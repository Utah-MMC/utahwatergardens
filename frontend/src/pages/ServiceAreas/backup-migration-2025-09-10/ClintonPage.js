import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const ClintonPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Clinton"
      citySlug="clinton"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default ClintonPage;