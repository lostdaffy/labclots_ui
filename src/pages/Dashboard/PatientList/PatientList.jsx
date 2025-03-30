import React, { useEffect, useState } from "react";
import "./PatientList.css";
import axios from "axios";
import { Link } from "react-router-dom";

const PatientList = () => {
  const [activeBar, setActiveBar] = useState("Pending");

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

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>Patient Details</th>
                <th>Rf. Doctor</th>
                <th>Tests</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Print Bill</th>
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
                  <td>₹{patient.totalAmount}</td>
                  <td>
                    {new Date(patient.createdAt).toLocaleDateString()} <br />
                    {new Date(patient.createdAt).toLocaleTimeString()}
                  </td>
                  <td>
                    <div>
                      <Link
                        className="action-btn"
                        to={`/dashboard/payment-receipt/${patient._id}`}
                      >
                        <i class="ri-download-2-line"></i>
                      </Link>
                    </div>
                  </td>

                  {activeBar === `${patient.status}` ? (
                    <td>
                      <div>
                        <Link
                          to={`/dashboard/add-results/${patient._id}`}
                          className="action-btn"
                        >
                          <i class="ri-file-add-line"></i>
                        </Link>
                      </div>
                    </td>
                  ) : (
                    <td>
                      <div>
                        <Link
                          to={`/dashboard/preciption/${patient._id}`}
                          className="action-btn"
                        >
                          <i class="ri-printer-fill"></i>
                        </Link>
                      </div>
                    </td>
                  )}
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
