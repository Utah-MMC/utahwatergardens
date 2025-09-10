import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const NodePagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="NodePage"
      citySlug="nodepage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default NodePagePage;