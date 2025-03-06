import React, { useState } from "react";
import "../AddPatient/AddPatient.css";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../store/authStore";

const AddTest = () => {
  const navigate = useNavigate();

  const [testName, setTestName] = useState();
  const [testRange, setTestRange] = useState();
  const [testUnit, setTestUnit] = useState();

  const { addTest, error, isLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addTest(testName, testRange, testUnit);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="patientMain">
      <form className="form-card" onSubmit={handleSubmit}>
        <div className="section-flex">
          <div className="form-section">
            <div className="form-group">
              <label>Test Name *</label>
              <input
                type="text"
                placeholder="Patient Name"
                name="testName"
                onChange={(e) => setTestName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Test Nomarl Range *</label>
              <input
                type="text"
                placeholder="Patient Age"
                name="testRange"
                onChange={(e) => setTestRange(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Test Unit *</label>
              <input
                type="text"
                placeholder="Patient Age"
                name="testUnit"
                onChange={(e) => setTestUnit(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-button">
          <button type="submit" className="submit-btn">
            <i className="ri-add-line"></i> Add Test
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTest;
