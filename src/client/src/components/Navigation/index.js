import React from "react";
import { withRouter } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import DropDown from "./DropDown";
import NavigationLogo from "./NavigationLogo";

function Navigation() {

  return (

    <nav className="">
      <div id="overlay" className="z-10 flex justify-between py-8 mx-12 md:mx-0 mb-6">
        <NavigationLogo colorStyle="text-black" />
        <div className="md:hidden">
          <DropDown  />
        </div>
        <NavigationLinks />
      </div> 
    </nav>
  );
}

export default withRouter(Navigation);