import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPatient.css";
import useAuthStore from "../../../store/authStore";
import axios from "axios";
const AddPatient = () => {
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState();
  const [patientAge, setPatientAge] = useState();
  const [patientGender, setPatientGender] = useState();
  const [patientEmail, setPatientEmail] = useState();
  const [patientMobile, setPatientMobile] = useState();
  const [patientAddress, setPatientAddress] = useState();
  const [consultant, setConsultant] = useState();
  const [sample, setSample] = useState();
  const [amount, setAmount] = useState();
  const [discount, setDiscount] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [test, setTest] = useState("");

  const [testList, setTestList] = useState([]);

  const { addPatient, error, isLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addPatient(
        patientName,
        patientAge,
        patientGender,
        patientEmail,
        patientMobile,
        patientAddress,
        consultant,
        sample,
        test,
        amount,
        discount,
        totalAmount
      );

      navigate("/dashboard/patient-list");
    } catch (error) {
      console.log(error);
    }
  };

  const handleTestOption = async () => {
    await axios
      .get("http://localhost:8080/api/v1/patients/test-list")
      .then((response) => {
        const testList = response.data.test;
        setTestList(testList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleTestOption();
  }, []);

  return (
    <section className="add-patients">
      <div className="add-patients-wrapper">
        <h3>Register New Patient</h3>

        <form className="add-patients-form" onSubmit={handleSubmit}>
          <div className="add-patients-flex">
            <div className="add-patients-section">
              <div className="add-patients-group">
                <label>
                  <span>*</span> Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="patientName"
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>
              <div className="add-patients-group">
                <label>
                  <span>*</span> Age
                </label>
                <input
                  type="text"
                  placeholder="Age"
                  name="patientAge"
                  onChange={(e) => setPatientAge(e.target.value)}
                />
              </div>

              <div className="add-patients-group">
                <label htmlFor="patientGender">
                  <span>*</span> Gender
                </label>
                <select
                  name="patientGender"
                  onChange={(e) => setPatientGender(e.target.value)}
                >
                  <option value="Select Gender">
                  Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="add-patients-section">
              <div className="add-patients-group">
                <label>Email ID</label>
                <input
                  type="text"
                  name="patientEmail"
                  placeholder="Email"
                  onChange={(e) => setPatientEmail(e.target.value)}
                />
              </div>
              <div className="add-patients-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="patientMobile"
                  onChange={(e) => setPatientMobile(e.target.value)}
                />
              </div>
              <div className="add-patients-group">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  name="patientAddress"
                  onChange={(e) => setPatientAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="add-patients-section">
              <div className="add-patients-group">
                <label>Consultant</label>
                <input
                  type="text"
                  placeholder="Doctor Name"
                  name="consultant"
                  onChange={(e) => setConsultant(e.target.value)}
                />
              </div>

              <div className="add-patients-group">
                <label htmlFor="sample">
                  <span>*</span> Sample
                </label>
                <select
                  name="sample"
                  onChange={(e) => setSample(e.target.value)}
                >
                  <option value="Select Sample">
                    Select Sample
                  </option>
                  <option>Blood</option>
                  <option>Urine</option>
                  <option>Saliva</option>
                  <option>Sputum</option>
                  <option>Swabs</option>
                  <option>Feces</option>
                  <option>Semen</option>
                  <option>Biopsy Samples</option>
                </select>
              </div>

              <div className="add-patients-group">
                <label htmlFor="test">
                  <span>*</span> Test
                </label>
                <select
                  name="test"
                  value={test}
                  onChange={(e) => setTest(e.target.value)}
                >
                  <option value="Select Test">
                    Select Test
                  </option>

                  {testList?.map((item, index) => {
                    return (
                      <option value={`${item.testName}`} key={index}>
                        {item.testName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="add-patients-section">
              <div className="add-patients-group">
                <label>
                  <span>*</span> Amount
                </label>
                <input
                  type="text"
                  placeholder="Total Amount"
                  name="amount"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Discount %( if any) </label>
                <input
                  type="text"
                  placeholder="Discount"
                  name="discount"
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <div className="add-patients-group">
                <label>
                  <span>*</span> Total Amount
                </label>
                <input
                  type="text"
                  placeholder="Total Amount"
                  name="totalAmount"
                  onChange={(e) => setTotalAmount(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-button">
            <button type="submit" className="billing-btn">
              <i className="ri-user-add-line"></i> Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPatient;
