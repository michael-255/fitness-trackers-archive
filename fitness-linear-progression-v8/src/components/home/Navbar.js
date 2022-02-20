import React from "react";
import NavButton from "./NavButton";
import Constants from "../../modules/constants";

const Navbar = () => {
  return (
    <ul className='navbar'>
      <NavButton icon={Constants.Icon.SETTINGS} location='settings' />
      <NavButton icon={Constants.Icon.INFO} location='about' />
    </ul>
  );
};

export default Navbar;
