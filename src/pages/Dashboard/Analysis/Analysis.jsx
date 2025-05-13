import React, { useEffect, useState } from "react";
import "./Analysis.css";
import axios from "axios";
import icon from "../../../assets/icon.png";

const Analysis = () => {
  const [data, setData] = useState([]);
  const [counts, setCounts] = useState({ Pending: 0, Completed: 0 });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/patients/test-list"
      );
      const reportsCount = await axios.get(
        "http://localhost:8080/api/v1/patients/reportCount"
      );
      setData(response.data.test);
      setCounts(reportsCount.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const monthlyData = [
    { month: "Jan", value: 60 },
    { month: "Feb", value: 70 },
    { month: "Mar", value: 50 },
    { month: "Apr", value: 80 },
    { month: "May", value: 90 },
    { month: "Jun", value: 65 },
    { month: "Jul", value: 55 },
    { month: "Aug", value: 75 },
    { month: "Sep", value: 85 },
    { month: "Oct", value: 70 },
    { month: "Nov", value: 60 },
    { month: "Dec", value: 95 },
  ];

  return (
    <div className="analysisPage">
      <div className="analysisPage-flex">
        <div>
          <div className="analysisPage-summary">
            <div className="analysisPage-summary-item">
              <h3>Total Registrations</h3>
              <p>{counts.totalCount}</p>
            </div>
            <div className="analysisPage-summary-item">
              <h3>Pending Reports</h3>
              <p>{counts.Pending}</p>
            </div>
            <div className="analysisPage-summary-item">
              <h3>Completed Reports</h3>
              <p>{counts.Completed}</p>
            </div>
          </div>
          <div className="analysisPage-stats-graph">
            <h2 className="analysisPage-graph-title">Monthly Performance Stats</h2>
            <div className="analysisPage-bar-chart">
              {monthlyData.map((item, index) => (
                <div className="analysisPage-bar-group" key={index}>
                  <div
                    className="analysisPage-bar"
                    style={{ height: `${item.value}%` }}
                    title={`${item.value}`}
                  >
                    <div className="analysisPage-bar-value">{item.value}</div>
                  </div>
                  <div className="analysisPage-month-label">{item.month}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="analysisPage-stats-tests">
          <div className="analysisPage-top-tests">
            <img src={icon} alt="" />
            Tests Available
          </div>
          <div className="analysisPage-tests-names">
            {data.slice(0, 10).map((test, index) => (
              <li key={index}>
                <i className="ri-test-tube-line"></i> {test.testName}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
