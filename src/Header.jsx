import React from "react";
import logo1 from "./assets/Star_Wars1.svg.png";
import logo2 from "./assets/Star_Wars2.svg.png";

const Header = () => {
  return (
    <header>
      <img src={logo1} alt="starwars logo" className="logo" id="logo1"/>
      <img src={logo2} alt="starwars logo" className="logo" id="logo2"/>
    </header>
  );
};

export default Header;
