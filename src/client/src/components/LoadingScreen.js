import React from 'react';
import spinner from '../assets/images/spinner.gif'
const LoadingScreen = () => {
  return (
    <div className="h-75-screen flex justify-center items-center">
      <img src={spinner} alt="loading spinner"></img>
    </div>
  );
};

export default LoadingScreen;