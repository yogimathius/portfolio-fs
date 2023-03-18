import React from 'react';
import logo from "../../assets/images/footerLogo.svg";

const FooterLogo = () => {
  return (
    <div className="flex flex-col justify-center items-start mt-2">
    <div className="flex justify-center">
      <div className="w-56">
        <a href="/">
          <img id="pngColorFilter" width="" src={logo} alt="arrow up and down"/>
        </a>
      </div>
    </div>
  </div>
  );
};

export default FooterLogo;