import React from "react";
import "./PatientManagement.css";
import { Link } from "react-router-dom";

const PatientManagement = () => {
  return (
    <div className="dashboard">
      <h1>Patient Management</h1>

      <div className="dashboard-summary">
        <Link to="/dashboard/add-patient">
          <div className="summary-item">
            <h3>
              <i class="ri-user-add-line"></i> Add New Patient
            </h3>
          </div>
        </Link>

        <Link to="/dashboard/patient-list">
          <div className="summary-item">
            <h3>
              <i class="ri-file-list-line"></i> Registered Patient
            </h3>
          </div>
        </Link>

        <Link to="/dashboard/add-results">
          <div className="summary-item">
            <h3>
              <i class="ri-edit-line"></i> Add Results
            </h3>
          </div>
        </Link>

        <Link to="/dashboard/complete-reports">
          <div className="summary-item">
            <h3>
              <i class="ri-file-check-line"></i> Completed Reports
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PatientManagement;
