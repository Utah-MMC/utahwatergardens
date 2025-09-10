import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const PlainCityPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="PlainCityPage"
      citySlug="plaincitypage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default PlainCityPagePage;