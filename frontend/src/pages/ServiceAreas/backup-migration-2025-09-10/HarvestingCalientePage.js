import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const CalientePagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="CalientePage"
      citySlug="calientepage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default CalientePagePage;