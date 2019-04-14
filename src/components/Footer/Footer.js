// Dependencies
import React from "react";

// Assets
import "./Footer.css";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <figure>
          <img alt="logo frudev" src={logo} />
        </figure>
        <small>@frudev 2019</small>
      </div>
    </footer>
  );
};

export default Footer;
