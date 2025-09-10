import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const EchoPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="EchoPage"
      citySlug="echopage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default EchoPagePage;