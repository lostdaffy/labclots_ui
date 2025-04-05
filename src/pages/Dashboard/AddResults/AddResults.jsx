import React, { useEffect, useState } from "react";
import "./AddResults.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../../../store/authStore";

const AddResults = () => {
  const { id } = useParams();
  const { data, fetchPatient, isLoading, error } = useAuthStore();
  
  const [inputField, setInputField] = useState([
    { id: 0, name: "", result: "", range: "", unit: "" },
  ]);
  
  
  const onChangeInput = (event, index) => {
    const updateRow = inputField.map((row) => {
      if (row.id == index) {
        return { ...row, [event.target.name]: event.target.value };
      }
      return row;
    });
    setInputField(updateRow);
  };

  const addInput = () => {
    const newRow = {
      id: inputField.length + 1,
      name: "",
      result: "",
      range: "",
      unit: "",
    };

    setInputField([...inputField, newRow]);
  };

  const removeInput = () => {
    if (inputField.length > 1) {
      setInputField(inputField.slice(0, -1));
    }
  };

  useEffect(() => {
    fetchPatient(id);
  }, []);

  const addResult = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/users/update-patient/${data?._id}`,
        {
          ...data,
          result: inputField,
          status: "Completed",
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };


  return (
    <div className="add-results">
      <div className="result-container">
        <h1>Laboratory Report</h1>

        {/* Patient and Booking Information */}
        <div className="result-wrapper">
          <div className="info-details">
            <p>Patient ID : {data?.patientId}</p>
            <p>NAME : {data?.patientName}</p>
          </div>
        </div>

        {/* Test Results Table */}
        <div className="table-container">
          <table className="results-table">
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Result</th>
                <th>Ref. Range</th>
                <th>Unit</th>
                {/* <th>Remove</th> */}
              </tr>
            </thead>
            <tbody>
              {inputField.map((item) => {
                return (
                  <tr key="">
                    <td>
                      <input
                        type="text"
                        value={item.name}
                        name="name"
                        onChange={(e) => {
                          onChangeInput(e, item.id);
                        }}
                        placeholder="Test Name"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={item.result}
                        name="result"
                        onChange={(e) => {
                          onChangeInput(e, item.id);
                        }}
                        placeholder="Result"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={item.range}
                        name="range"
                        onChange={(e) => {
                          onChangeInput(e, item.id);
                        }}
                        placeholder="Ref. Range"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={item.unit}
                        name="unit"
                        onChange={(e) => {
                          onChangeInput(e, item.id);
                        }}
                        placeholder="Unit"
                      />
                    </td>
                    {/* <td className="remove-btn">
                      <i className="ri-close-large-line"></i>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <div>
            <Link className="add-row-btn" onClick={addInput}>
              <i className="ri-add-large-line"></i> Add
            </Link>
            {inputField.length > 1 ? (
              <Link className="add-row-btn" onClick={removeInput}>
                <i className="ri-close-large-line"></i> Remove
              </Link>
            ) : null}
          </div>
          <div>
            <Link className="print-btn" to={`/dashboard/preciption/${id}`} onClick={addResult}>
              <i className="ri-printer-fill"></i> Print Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResults;
