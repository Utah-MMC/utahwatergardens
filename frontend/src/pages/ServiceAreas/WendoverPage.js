import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const WendoverPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Wendover"
      citySlug="wendover"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default WendoverPage;