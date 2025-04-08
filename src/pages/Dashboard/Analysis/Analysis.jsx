import React, { useEffect, useState } from "react";
import "./Analysis.css";
import axios from "axios";

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

  return (
    <div className="analysis">
      <div className="analysis-summary">
        <div className="summary-item">
          <h3>Total Registrations</h3>
          <p>{counts.totalCount}</p>
        </div>
        <div className="summary-item">
          <h3>Pending Reports</h3>
          <p>{counts.Pending}</p>
        </div>
        <div className="summary-item">
          <h3>Completed Reports</h3>
          <p>{counts.Completed}</p>
        </div>
      </div>

      <div className="stats-tests">
        <div className="top-tests">Top 10 Tests</div>
        <div className="tests-names">
          {data.slice(0, 10).map((test, index) => (
            <li key={index}>
              <i className="ri-test-tube-line"></i> {test.testName}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
