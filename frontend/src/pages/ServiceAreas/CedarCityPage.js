import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const CedarCityPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="CedarCity"
      citySlug="cedarcity"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default CedarCityPage;