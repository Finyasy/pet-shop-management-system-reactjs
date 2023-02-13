import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpeg'

const Header = () => (
    <div className="header">
        <div className="header-title">
          Kennel
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
        <div className="header-links">
          <Link className="header-link" to="/signup">SignUp</Link>
          <Link className="header-link" to="/login">LogIn</Link>
        </div>
      </div>
);

export default Header;
