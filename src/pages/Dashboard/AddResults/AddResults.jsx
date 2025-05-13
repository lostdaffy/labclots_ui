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
    <section className="add-results">
      <div className="add-results-container">
        <h3>Laboratory Report</h3>

        <div className="add-results-main">
          <div className="add-results-info-details">
            <p>
              <strong>Patient ID :</strong> {data?.patientId}
            </p>
            <p>
              <strong>Name :</strong> {data?.patientName}
            </p>
          </div>

          <div className="add-results-tables">
            <table className="add-results-table">
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Result</th>
                  <th>Ref. Range</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                {inputField.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <input
                          type="text"
                          value={item.name}
                          name="name"
                          onChange={(e) => onChangeInput(e, item.id)}
                          placeholder="Test Name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={item.result}
                          name="result"
                          onChange={(e) => onChangeInput(e, item.id)}
                          placeholder="Result"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={item.range}
                          name="range"
                          onChange={(e) => onChangeInput(e, item.id)}
                          placeholder="Ref. Range"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={item.unit}
                          name="unit"
                          onChange={(e) => onChangeInput(e, item.id)}
                          placeholder="Unit"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="add-results-action-buttons">
            <div>
              <Link className="add-results-add-row-btn" onClick={addInput}>
                <i className="ri-add-large-line"></i> Add
              </Link>
              {inputField.length > 1 ? (
                <Link className="add-results-add-row-btn" onClick={removeInput}>
                  <i className="ri-close-large-line"></i> Remove
                </Link>
              ) : null}
            </div>
            <div>
              <Link
                className="add-results-print-btn"
                to={`/dashboard/preciption/${id}`}
                onClick={addResult}
              >
                <i className="ri-printer-fill"></i> Print Report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddResults;
