import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">
        <h1>
          <i className="ri-microscope-fill"></i> BloPath
        </h1>
      </Link>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="">Services</Link>
        <Link to="">Donation</Link>
        <Link to="/about">About</Link>
        <Link to="">Contact us</Link>
      </div>
      <div className="navbar-login">
        <Link to="/user-login" className="login-btn">
          Login Lab <i className="ri-login-circle-line"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
