import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>BloPath</h1>
      <div className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="">Services</Link>
        <Link to="">Donation</Link>
        <Link to="/About">About</Link>
        <Link to="">Contact us</Link>
      </div>
      <div className="navbar-login">
        <Link to="/User-Login" className="login-btn">
          Login Lab <i className="ri-microscope-line"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
