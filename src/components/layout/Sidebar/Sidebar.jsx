import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard/add-patient" className="sidebar-item">
            <i className="ri-user-add-line"></i> New Registration
          </Link>
        </li>
        <li>
          <Link to="/analysis" className="sidebar-item">
            <i className="ri-dashboard-3-line"></i> Analysis
          </Link>
        </li>
        <li>
          <Link to="/dashboard/patient-list" className="sidebar-item">
            <i className="ri-article-line"></i> Patient List
          </Link>
        </li>
        <li>
          <Link to="/dashboard/add-test" className="sidebar-item">
          <i className="ri-flask-line"></i> Tests
          </Link>
        </li>
        <li>
          <Link to="/dashboard/patient-management" className="sidebar-item">
          <i className="ri-group-line"></i> Lab Management
          </Link>
        </li>
       
        <li>
          <Link to="/analysis" className="sidebar-item">
          <i className="ri-user-line"></i> Lab Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
