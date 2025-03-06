import React, { useEffect, useState } from "react";
import "./PatientList.css";
// import { Link } from "react-router-dom";
// import axios from "axios";

const PatientList = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    hemoglobin: '',
    wbc: '',
    platelets: '',
    rbc: '',
    remarks: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Report Generated Successfully');
  };

  return (
    <div className="report-container">
      <h2 className="text-center text-2xl font-bold text-gray-800">Complete Blood Count (CBC) Report</h2>
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        {['Patient Name', 'Hemoglobin (g/dL)', 'WBC Count (x10³/µL)', 'Platelet Count (x10³/µL)', 'RBC Count (x10⁶/µL)', "Doctor's Remarks"].map((label, index) => (
          <div key={index}>
            <label className="block font-bold mb-1">{label}:</label>
            <input
              type={index === 1 || index === 2 || index === 3 || index === 4 ? 'number' : 'text'}
              name={label.toLowerCase().replace(/\s|\(|\)|'/g, '')}
              value={formData[label.toLowerCase().replace(/\s|\(|\)|'/g, '')]}
              onChange={handleChange}
              placeholder={`Enter ${label.toLowerCase()}`}
              className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
              required={index !== 5}
            />
          </div>
        ))}
        <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
          Generate Report
        </button>
      </form>
    </div>
  );
};
export default PatientList;
