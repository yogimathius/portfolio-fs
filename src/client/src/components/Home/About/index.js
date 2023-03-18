import React from 'react';
import AboutImage from './AboutImage';
import AboutText from "./AboutText";

const index = () => {
  return (
    <div id="about" className="md:grid md:grid-cols-2 mx-4 md:mx-0 my-12 md:my-24 items-center">
      <AboutImage />
      <AboutText />
    </div>
  );
};

export default index;