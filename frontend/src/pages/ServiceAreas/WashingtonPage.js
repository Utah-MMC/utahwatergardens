import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const WashingtonPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Washington"
      citySlug="washington"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default WashingtonPage;