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
      <div className="main-list">
        <h2>Patient List</h2>
        <div className="top-bar">
          <button>📄 Worksheet</button>
          {/* <input type="search" placeholder="Search by name or barcode..." /> */}
          <select>
            <option>All</option>
          </select>
          {/* <input type="date" value="2025-03-07" />
          <input type="date" value="2025-03-07" /> */}
        </div>

        <div className="table-container">
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
                    {patient.patientName} <br /> {patient.patientAge},{" "}
                    {patient.patientGender}
                  </td>
                  <td>{patient.consultant}</td>
                  <td>{patient.test}</td>
                  <td>{patient.totalAmount}</td>
                  <td>
                    {new Date(patient.createdAt).toLocaleDateString()} <br />
                    {new Date(patient.createdAt).toLocaleTimeString()}
                  </td>
                  <td>Pending</td>
                  <td>
                    <div>
                      <Link
                        className="action-btn"
                        to={`/dashboard/payment-receipt/${patient._id}`}
                      >
                        Bill
                      </Link>
                    </div>

                    <br />

                    <div>
                      <Link
                        to={`/dashboard/add-results/${patient._id}`}
                        className="action-btn"
                      >
                        Print Report
                      </Link>
                    </div>
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
