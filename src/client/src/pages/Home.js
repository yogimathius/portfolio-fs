import React from 'react';
import Home from '../components/Home';

const HomePage = ({businessData}) => {
  
  return (
    <div>
      <Home props={businessData} />
    </div>
  );
};

export default HomePage;