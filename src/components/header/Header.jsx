import React from "react";
import coffeLogo from "../../assets/images/coffe.png";
import "../../assets/css/Header.css";

const Header = () => {
  return (
    <header className="glass-header">
      <div className="coffe-logo">
        <img
          src={coffeLogo}
          alt="coffe-logo-image"
          className="coffe-logo-image"
        />
        <p className="coffe-logo-text">A Cup Of Code</p>
      </div>
      <input className="search-input" type="text" placeholder="Search..." />
    </header>
  );
};

export default Header;
