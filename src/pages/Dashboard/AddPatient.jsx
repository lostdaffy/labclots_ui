import React from "react";

const AddPatient = () => {
  return (
    <div class="form-container">
      <h1 class="form-title">Add Patient</h1>
      <form class="patient-form" action="/submit-patient" method="POST">
        <div class="form-group">
          <label class="form-label" for="name">
            Patient Name
          </label>
          <input
            class="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter patient name"
            required
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="age">
            Age
          </label>
          <input
            class="form-input"
            type="number"
            id="age"
            name="age"
            placeholder="Enter patient age"
            required
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="gender">
            Gender
          </label>
          <select class="form-select" id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="contact">
            Contact Number
          </label>
          <input
            class="form-input"
            type="tel"
            id="contact"
            name="contact"
            placeholder="Enter contact number"
            required
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="test-type">
            Test Type
          </label>
          <select class="form-select" id="test-type" name="test_type" required>
            <option value="">Select Test</option>
            <option value="blood">Blood Test</option>
            <option value="urine">Urine Test</option>
            <option value="xray">X-Ray</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="test-date">
            Test Date
          </label>
          <input
            class="form-input"
            type="date"
            id="test-date"
            name="test_date"
            required
          />
        </div>
       
        <button class="form-button" type="submit">
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default AddPatient;
