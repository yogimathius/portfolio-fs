import React from "react";
import NavigationLinks from "../Navigation/NavigationLinks";
import AdminLogin from "./AdminLogin";
import FooterLogo from "./FooterLogo";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <div className="footer">
      <footer className="relative py-6 bg-gray-dk-blue  my-2 space-y-4 md:space-y-0   auto-rows-min ">
        <div className="container mx-auto flex justify-between px-4 md:px-0 ">
          <div className="flex">
            <FooterLogo />
            <NavigationLinks colorStyle="text-white" />

          </div>
          <SocialMediaIcons color="white" />
        </div>
        <AdminLogin />
      </footer>
    </div>
  );
}

export default Footer;