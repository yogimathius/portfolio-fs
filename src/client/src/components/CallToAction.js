import React from 'react';
import SecondaryButton from './SecondaryButton';

const CallToAction = () => {

  return (
    <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-4 py-12 md:py-24 space-y-12 md:space-y-0">
      <h3 className="text-center md:text-start font-bold text-3xl md:text-4xl w-5/6 md:w-1/4">
        Interested in doing a project together?
      </h3> 
      <div className="hidden md:block border-b-1 border-solid border-gray-300 w-1/3 mb-8"></div>
      <div className="flex justify-end items-center">
        <SecondaryButton target="_self" link='/contact'>Contact Me</SecondaryButton>
      </div>
     
    </div>
  );
};

export default CallToAction;