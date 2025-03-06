import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Lab Dashboard</h1>
      <div className="dashboard-summary">
        <div className="summary-item">
          <h3>Total Reports</h3>
          <p>120</p>
        </div>
        <div className="summary-item">
          <h3>Pending Reports</h3>
          <p>30</p>
        </div>
        <div className="summary-item">
          <h3>Completed Reports</h3>
          <p>90</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
