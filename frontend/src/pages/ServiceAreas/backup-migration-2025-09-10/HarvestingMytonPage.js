import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const MytonPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="MytonPage"
      citySlug="mytonpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default MytonPagePage;