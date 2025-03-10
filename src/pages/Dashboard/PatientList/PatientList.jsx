import React, { useEffect, useState } from "react";
import "./PatientList.css";
import axios from "axios";
import { Link } from "react-router-dom";

const PatientList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/users/patient-list"
        );
        setData(response.data.patient);
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <div className="patient-list">
      <div class="main-list">
        <h2>Patient List</h2>
        <div class="top-bar">
          <button>📄 Worksheet</button>
          <input type="search" placeholder="Search by name or barcode..." />
          <select>
            <option>All</option>
          </select>
          <input type="date" value="2025-03-07" />
          <input type="date" value="2025-03-07" />
        </div>

        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>Patient Details</th>
                <th>Rf. Doctor</th>
                <th>Tests</th>
                <th>
                  Amount <br /> (in ₹)
                </th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((patient) => (
                <tr key={patient._id}>
                  <td>{patient.patientId}</td>
                  <td>
                  {patient.patientName} <br /> {patient.patientAge}, {patient.patientGender}
                  </td>
                  <td>{patient.referBy}</td>
                  <td>Complete Blood Count 2 (CBC)</td>
                  <td>{patient.totalAmount}</td>
                  <td>
                    {patient.createdAt}
                    {/* 2025-03-06 <br />
                    08:12 PM */}
                  </td>
                  <td>Pending</td>
                  <td>
                    <Link className="action-btn" to={`/dashboard/payment-receipt/${patient._id}`}>Bill</Link> <br />
                    <button className="action-btn">Print Report</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PatientList;
