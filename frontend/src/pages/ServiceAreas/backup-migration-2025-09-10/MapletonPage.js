import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const MapletonPage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="pond-cleaning"
      cityName="Mapleton"
      citySlug="mapleton"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default MapletonPage;