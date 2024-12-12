import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddPatient = () => {
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState();
  const [patientAge, setPatientAge] = useState();
  const [patientGender, setPatientGender] = useState();
  const [patientEmail, setPatientEmail] = useState();
  const [patientMobile, setPatientMobile] = useState();
  const [patientAddress, setPatientAddress] = useState();
  const [referBy, setReferBy] = useState();
  const [sampleBy, setSampleBy] = useState();
  const [sample, setSample] = useState();
  const [amount, setAmount] = useState();
  const [discount, setDiscount] = useState();
  const [discountBy, setDiscountBy] = useState();


  return (
    <section className="patientMain">
      <div className="main-wrapper">
        <h3>Patient Registration</h3>

        <form class="form-card" onSubmit="">
          <div className="section-flex">
            <div class="form-section">
              <div class="form-group">
                <label>Patient Name *</label>
                <input
                  type="text"
                  placeholder="Patient Name"
                  name="patientName"
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Patient Age *</label>
                <input
                  type="text"
                  placeholder="Patient Age"
                  name="patientAge"
                  onChange={(e) => setPatientAge(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Patient Gender *</label>
                <input
                  type="text"
                  placeholder="Patient Gender"
                  name="patientGender"
                  onChange={(e) => setPatientGender(e.target.value)}
                />
              </div>
            </div>

            <div class="form-section">
              <div class="form-group">
                <label>Patient Email *</label>
                <input
                  type="text"
                  name="patientEmail"
                  placeholder="Patient Email"
                  onChange={(e) => setPatientEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Patient Mobile No. *</label>
                <input
                  type="text"
                  placeholder="Patient Mobile No."
                  name="patientMobile"
                  onChange={(e) => setPatientMobile(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Patient Address *</label>
                <input
                  type="text"
                  placeholder="Patient Address"
                  name="patientAddress"
                  onChange={(e) => setPatientAddress(e.target.value)}
                />
              </div>
            </div>

            <div class="form-section">
              <div class="form-group">
                <label>Refer By *</label>
                <input
                  type="text"
                  placeholder="Doctor Name"
                  name="referBy"
                  onChange={(e) => setReferBy(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Sample By *</label>
                <input
                  type="text"
                  placeholder="Sample By"
                  name="sampleBy"
                  onChange={(e) => setSampleBy(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Sample *</label>
                <input
                  type="text"
                  placeholder="Section Pending"
                  name="sample"
                  onChange={(e) => setSample(e.target.value)}
                />
              </div>
            </div>

            <div class="form-section">
              <div class="form-group">
                <label>Amount *</label>
                <input
                  type="text"
                  placeholder="Total Amount"
                  name="amount"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Discount %( if any) </label>
                <input
                  type="text"
                  placeholder="Discount"
                  name="discount"
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Discount by</label>
                <input
                  type="text"
                  placeholder="Discount by"
                  name="discountBy"
                  onChange={(e) => setDiscountBy(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-button">
            <button type="submit" class="submit-btn">
              <i class="ri-user-add-line"></i> Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPatient;
