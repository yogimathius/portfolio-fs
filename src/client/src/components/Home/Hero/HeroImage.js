import React from 'react';
import HeroText from './HeroText';

const HeroImage = () => {
  return (
    <div className="bg-hero bg-cover bg-center h-75-screen md:h-screen relative">
      <div className="absolute bottom-0">

        <HeroText />
      </div>
    </div>
  );
};

export default HeroImage;