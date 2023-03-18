import React from 'react';
import HeroButton from './HeroButton';

const HeroText = () => {
  const introText = "Hey, I'm Mathius Johnson and I love building beautiful websites"
  return (
      <div className="relative bg-light-grey px-56 py-40">
        <h1 className="absolute bottom-10 mb-10 left-2 text-5xl font-bold">
        {introText}
        </h1>
        <a href="#about" className="absolute bottom-0 left-2">
          <HeroButton />
        </a>
      </div>

  );
};

export default HeroText;