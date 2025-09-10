import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const HelperPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="HelperPage"
      citySlug="helperpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default HelperPagePage;