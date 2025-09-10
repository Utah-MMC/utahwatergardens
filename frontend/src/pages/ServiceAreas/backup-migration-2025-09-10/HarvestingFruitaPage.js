import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const FruitaPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="FruitaPage"
      citySlug="fruitapage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default FruitaPagePage;