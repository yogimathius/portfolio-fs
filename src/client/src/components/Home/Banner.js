import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  const ctaText = 'Do you want to experience normal-physiological birth and enter postpartum feeling more powerful than ever before? Are you seeking a community that values your stories & wisdom and is there to listen and hold space for your becoming?'
  return (
    <div className="py-16 px-20 w-full bg-whitesmoke">
      <div className="flex flex-col justify-center text-2xl space-y-4">
        <p className=" text-maximum-blue-green text-center my-auto ">{ctaText}</p>
        <div className="flex justify-center">
          <Link to='/offerings' className="btn btn-primary">Yes!</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;