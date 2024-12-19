import React, { useState } from "react";
import "./AddResults.css";

const AddResults = () => {
  const [testResults, setTestResults] = useState([
    { parameter: "", value: "", unit: "" },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedResults = [...testResults];
    updatedResults[index][field] = value;
    setTestResults(updatedResults);
  };

  const addResultField = () => {
    setTestResults([...testResults, { parameter: "", value: "", unit: "" }]);
  };

  const removeResultField = (index) => {
    setTestResults(testResults.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      testName: e.target.testName.value,
      testCode: e.target.testCode.value,
      category: e.target.category.value,
      results: testResults,
    };
    console.log("Form Data:", formData);
    alert("Form submitted! Check the console for details.");
  };

  return (
    <div className="add-results">
      <div className="form-container">
        <h1 className="form-title">Add Test</h1>
        <form onSubmit={handleSubmit} className="test-form">
          <div className="form-group">
            <label htmlFor="testName">Test Name:</label>
            <input type="text" id="testName" name="testName" required />
          </div>
          <div className="form-group">
            <label htmlFor="testCode">Test Code:</label>
            <input type="text" id="testCode" name="testCode" required />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" required>
              <option value="">Select Category</option>
              <option value="Hematology">Hematology</option>
              <option value="Biochemistry">Biochemistry</option>
              <option value="Microbiology">Microbiology</option>
              <option value="Immunology">Immunology</option>
              <option value="Pathology">Pathology</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <h2 className="section-title">Test Results</h2>
          {testResults.map((result, index) => (
            <div className="test-result-row" key={index}>
              <input
                type="text"
                placeholder="Parameter"
                value={result.parameter}
                onChange={(e) =>
                  handleInputChange(index, "parameter", e.target.value)
                }
                required
              />
              <input
                type="text"
                placeholder="Value"
                value={result.value}
                onChange={(e) =>
                  handleInputChange(index, "value", e.target.value)
                }
                required
              />
              <input
                type="text"
                placeholder="Unit"
                value={result.unit}
                onChange={(e) =>
                  handleInputChange(index, "unit", e.target.value)
                }
              />
              <button
                type="button"
                onClick={() => removeResultField(index)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addResultField} className="add-btn">
            + Add Result Field
          </button>

          <div className="submit-container">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddResults;
