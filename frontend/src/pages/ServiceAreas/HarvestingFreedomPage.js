import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const FreedomPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="FreedomPage"
      citySlug="freedompage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default FreedomPagePage;