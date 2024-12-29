import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import useAuthStore from "../../../store/authStore";

const Sidebar = () => {
  const { logoutUser } = useAuthStore();

  const handleSubmit = () => {
    logoutUser();
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Pathology Lab Name</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className="sidebar-item">
            <i className="ri-dashboard-fill"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard/patient-management" className="sidebar-item">
            <i className="ri-file-chart-line"></i> Patients Management
          </Link>
        </li>
        <li>
          <Link to="/dashboard/lab-settings" className="sidebar-item">
            <i className="ri-settings-5-fill"></i> Lab Settings
          </Link>
        </li>
        <li>
          <Link to="/profile" className="sidebar-item">
          <i className="ri-user-settings-line"></i> Profile
          </Link>
        </li>
      </ul>
      <button onClick={handleSubmit} className="logout-btn">
        <i className="ri-logout-box-r-line"></i> Logout
      </button>
    </div>
  );
};

export default Sidebar;
