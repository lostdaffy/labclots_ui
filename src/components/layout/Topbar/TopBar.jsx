import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import icon from "../../../assets/icon.png";
import useAuthStore from "../../../store/authStore";

const TopBar = () => {
  const { logoutUser } = useAuthStore();

  const handleSubmit = () => {
    logoutUser();
  };

  return (
    <div className="topbar">
      <Link to="/home">
        <h1>
          <i className="ri-microscope-fill"></i> labclots
        </h1>
      </Link>

      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search patient by contact, name, IDs"
        />
        <button type="submit" className="searchButton">
          <i className="ri-search-line"></i>
        </button>
      </div>

      <div>
        <h5><i className="ri-hand-heart-line"></i> Donation</h5> 
      </div>

      <label className="dropdown">
        <div className="dd-button">
          <i className="ri-account-circle-line"></i> Lab Name
        </div>

        <input type="checkbox" className="dd-input" id="test" />

        <ul className="dd-menu">
          <div className="profle-name">
            <img src={icon} alt="" />
            <h5>lostdaffy</h5>
          </div>
          <li>
            <i className="ri-edit-line"></i> Edit Profile
          </li>
          <li>
            <i className="ri-delete-bin-7-line"></i> Delete Account
          </li>
          <li>
            <Link onClick={handleSubmit}>
              <i className="ri-logout-circle-r-line"></i> Logout
            </Link>
          </li>
          <li className="divider"></li>
        </ul>
      </label>

      <div className="topbar-links">
        <Link to="/home">
          <i className="ri-question-line"></i> Help
        </Link>
        <Link to="/home">
          <i className="ri-settings-3-line"></i>
        </Link>
        <Link to="">
          <i className="ri-notification-4-line"></i>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
