import React from "react";
import { Link } from "react-router-dom";

const LabSettings = () => {
  return (
    <div className="dashboard">
      <h1>Lab Settings</h1>

      <div className="dashboard-summary">
        <Link to="/dashboard/lab-settings/add-test">
          <div className="summary-item">
            <h3>
              <i class="ri-user-add-line"></i> Add New Test
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LabSettings;
