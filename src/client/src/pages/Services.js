import React from 'react';
import Services from '../components/Services/index'
const ServicesPage = ({businessData}) => {
  return (
    <div>
      <Services businessData={businessData} />
    </div>
  );
};

export default ServicesPage;