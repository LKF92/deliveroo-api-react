import React from "react";
import Logo from "./img/deliveroo-logo.png";

const Navbar = () => {
  return (
    <nav>
      <img className="brand-logo" src={Logo} alt="deliveroo logo" />
    </nav>
  );
};
export default Navbar;
