import React, { useEffect, useState } from "react";
import "./AddResults.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddResults = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [tests, setTest] = useState([]);
  // const [selectedUser, setSelectedUser] = useState("");

  const [results, setResults] = useState([
    {
      id: 1,
      testName: "Widal Test (Slide Method)",
      result: "",
      unit: "",
      normal: "<1:40",
    },
    {
      id: 2,
      testName: "Haemoglobin (HB)",
      result: "",
      unit: "gm/%",
      normal: "12.5 - 15.0",
    },
    {
      id: 3,
      testName: "Blood Sugar (Random)",
      result: "",
      unit: "mg/dL",
      normal: "60 - 140",
    },
  ]);

  const addRow = () => {
    setResults([
      ...results,
      { id: results.length + 1, testName: '', result: '', unit: '', normal: '' },
    ]);
  };


  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/users/add-results/${id}`
        );

        const response1 = await axios.get(
          `http://localhost:8080/api/v1/users/test-list`
        );

        setData(response.data.patient);
        setTest(response1.data.test);
      } catch (error) {
        throw error;
      }
    };

    fetchData(id);
  }, []);

  const handleChange = (event) => {
    setSelectedUser(event.target.value);
    console.log("Selected user:", event.target.value);
  };


  setResults([
    ...results,
    { id: results.length + 1, testName: "", result: "", unit: "", normal: "" },
  ]);

  const removeRow = (id) => {
    setResults(results.filter((row) => row.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setResults(
      results.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };


  return (
    <div className="add-results">
      <div className="container">
        <h1>Test Result Entry</h1>

        {/* Patient and Booking Information */}
        <div className="form-section">
          <div>
            <label htmlFor="bookingDate">Booking Date:</label>
            <input type="date" id="bookingDate" name="bookingDate" />
          </div>
          <div>
            <label htmlFor="bookingTime">Booking Time:</label>
            <input type="time" id="bookingTime" name="bookingTime" />
          </div>
          <div>
            <label htmlFor="patientName">Patient:</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="patientID">Patient ID:</label>
            <input
              type="text"
              id="patientID"
              name="patientID"
              placeholder="ID"
            />
          </div>
        </div>

        {/* Test Results Table */}
        <div className="table-container">
          <table className="results-table">
            <thead>
              <tr>
                <th>ISN</th>
                <th>Test Name</th>
                <th>Result</th>
                <th>Unit</th>
                <th>Normal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {results.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>
                    <input
                      type="text"
                      value={row.testName}
                      onChange={(e) =>
                        handleInputChange(row.id, "testName", e.target.value)
                      }
                      placeholder="Test Name"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.result}
                      onChange={(e) =>
                        handleInputChange(row.id, "result", e.target.value)
                      }
                      placeholder="Result"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.unit}
                      onChange={(e) =>
                        handleInputChange(row.id, "unit", e.target.value)
                      }
                      placeholder="Unit"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.normal}
                      onChange={(e) =>
                        handleInputChange(row.id, "normal", e.target.value)
                      }
                      placeholder="Normal"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => removeRow(row.id)}
                      className="btn-danger"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button onClick={addRow} className="btn-secondary">
            Add Row
          </button>
          <button onClick="" className="btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddResults;
