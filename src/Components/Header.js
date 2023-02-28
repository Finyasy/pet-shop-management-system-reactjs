import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpeg'
import SearchBar from "./SearchBar";
import LogOut from "./LogOut";

const Header = ({isLoggedIn}) => (
    <div className="header">
        <div className="header-title">
          Kennel
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
        <div className="header__search-container">
          <SearchBar placeholder="Search pets by breed" data={[]} />
        </div>
        <div className="header-links">
        {!isLoggedIn && (
          <>
          <Link className="header-link" to="/signup">SignUp</Link>
          <Link className="header-link" to="/login">LogIn</Link>
          </>
          )}
      {isLoggedIn && <LogOut />}
        </div>
      </div>
);

export default Header;
