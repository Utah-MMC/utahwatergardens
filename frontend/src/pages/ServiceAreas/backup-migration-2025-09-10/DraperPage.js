import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const DraperPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Draper"
      citySlug="draper"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default DraperPage;