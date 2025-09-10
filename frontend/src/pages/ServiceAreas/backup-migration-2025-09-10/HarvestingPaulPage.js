import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const PaulPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="PaulPage"
      citySlug="paulpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default PaulPagePage;