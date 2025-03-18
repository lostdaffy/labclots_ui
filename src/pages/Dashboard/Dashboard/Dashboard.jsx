import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-summary">
        <div className="summary-item">
          <h3>Total Registrations</h3>
          <p>120</p>
        </div>
        <div className="summary-item">
          <h3>Total Reports</h3>
          <p>30</p>
        </div>
        <div className="summary-item">
          <h3>Completed Reports</h3>
          <p>90</p>
        </div>
      </div>

      <div className="stats-tests">
        <div className="top-tests">Top 10 Tests</div>
        <div className="tests-names">
          <li>
            <i className="ri-test-tube-line"></i> Complete Blood Count (CBC)
          </li>
          <li>
            <i className="ri-test-tube-line"></i> Lipid Profile
          </li>
          <li>
            <i className="ri-test-tube-line"></i> Liver Function Test (LFT)
          </li>
          <li>
            <i className="ri-test-tube-line"></i> Kidney Function Test (KFT)
          </li>
          <li>
            <i className="ri-test-tube-line"></i> Thyroid Function Test (TFT)
          </li>
          <li>
            <i className="ri-test-tube-line"></i> Blood Glucose Test
          </li>
          <li>
            <i className="ri-test-tube-line"></i> Hemoglobin A1c (HbA1c)
          </li>
          <li>
            <i className="ri-test-tube-line"></i> Urinalysis
          </li>
          <li>
            <i className="ri-test-tube-line"></i> Coagulation Panel
          </li>
          <li>
            <i className="ri-test-tube-line"></i> C-Reactive Protein (CRP) Test
          </li>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
