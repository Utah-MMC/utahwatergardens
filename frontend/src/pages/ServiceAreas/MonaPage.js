import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const MonaPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Mona"
      citySlug="mona"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default MonaPage;