import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

const FruitlandPagePage = () => {
  return (
    <ServiceAreaTemplate
      serviceType="harvesting"
      cityName="FruitlandPage"
      citySlug="fruitlandpage"
      state="Utah"
      phoneNumber="(801) 590-8516"
    />
  );
};

export default FruitlandPagePage;