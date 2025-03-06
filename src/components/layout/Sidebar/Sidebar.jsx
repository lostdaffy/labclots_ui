import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import useAuthStore from "../../../store/authStore";

const Sidebar = () => {
  

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard/add-patient" className="sidebar-item">
            <i class="ri-user-add-line"></i> New Registration
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="sidebar-item">
            <i class="ri-dashboard-3-line"></i> Analysis
          </Link>
        </li>
        <li>
          <Link to="/dashboard/patient-list" className="sidebar-item">
            <i class="ri-article-line"></i> Patient List
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="sidebar-item">
          <i class="ri-flask-line"></i> Tests
          </Link>
        </li>
        <li>
          <Link to="/dashboard/patient-management" className="sidebar-item">
          <i class="ri-group-line"></i> Lab Management
          </Link>
        </li>
       
        <li>
          <Link to="/dashboard" className="sidebar-item">
          <i class="ri-user-line"></i> Lab Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
