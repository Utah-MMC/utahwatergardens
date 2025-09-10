import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const WashingtonPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="WashingtonPage"
      citySlug="washingtonpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default WashingtonPagePage;