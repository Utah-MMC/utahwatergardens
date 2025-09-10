import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const EnochPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Enoch"
      citySlug="enoch"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default EnochPage;