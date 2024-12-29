import React, { useEffect, useState } from "react";
import "./RegisteredPatient.css";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisteredPatient = () => {
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
      <div className="container">
        <div className="patient-list-title">Patient List</div>

        <div className="form-group">
          <input type="text" placeholder="Search by Patient Name or ID..." />
        </div>

        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Amount</th>
              <th>Payment Slip</th>
            </tr>
          </thead>
          <tbody>
            {data.map((patient) => (
              <tr key={patient._id}>
                <td>{patient.patientId}</td>
                <td>{patient.patientName}</td>
                <td>{patient.patientAge}</td>
                <td>{patient.patientGender}</td>
                <td>{patient.totalAmount}₹</td>
                <td>
                  <Link
                    className="action-btn btn-download"
                    to={`/dashboard/payment-receipt/${patient._id}`}
                  >
                    Payment Slip
                  </Link>
                  <Link
                    className="action-btn btn-download"
                    to={`/dashboard/add-results/${patient._id}`}
                  >
                    Add Results
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RegisteredPatient;
