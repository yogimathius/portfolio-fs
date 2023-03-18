import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const NavigationLogo = () => {
  return (
    <div className="col-start-1 flex items-center -mb-6">
      <div className="z-50 mr-4">
        <Link to="/home">
          <img src={logo} alt="MJ developer Logo" />
        </Link>
      </div>
    </div>
  );
};

export default NavigationLogo;