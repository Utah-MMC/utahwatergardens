import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const MoosePagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="MoosePage"
      citySlug="moosepage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default MoosePagePage;