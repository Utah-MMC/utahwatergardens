import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const LanderPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="LanderPage"
      citySlug="landerpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default LanderPagePage;