import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const MurrayPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Murray"
      citySlug="murray"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default MurrayPage;