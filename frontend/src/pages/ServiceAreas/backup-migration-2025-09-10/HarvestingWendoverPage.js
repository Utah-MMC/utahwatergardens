import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const WendoverPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="WendoverPage"
      citySlug="wendoverpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default WendoverPagePage;