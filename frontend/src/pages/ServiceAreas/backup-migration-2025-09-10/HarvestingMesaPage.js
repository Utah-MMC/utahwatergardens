import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const MesaPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="MesaPage"
      citySlug="mesapage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default MesaPagePage;