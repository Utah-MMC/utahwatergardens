import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const MonaPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="MonaPage"
      citySlug="monapage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default MonaPagePage;