import React from 'react';
import profilePic from '../../../assets/images/profilepic.jpg'

const AboutImage = () => {
  return (
    <div className="col-start-1 md:row-start-1 mr-2">
    <img className="rounded-xl shadow-xl" src={profilePic} alt="brown haired man in prayer yoga pose" />
  </div>
  );
};

export default AboutImage;