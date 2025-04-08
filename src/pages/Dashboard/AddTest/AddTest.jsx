import React, { useEffect, useState } from "react";
import "./Addtest.css";
import useAuthStore from "../../../store/authStore";
import axios from "axios";

const AddTest = () => {

  const [testName, setTestName] = useState();
  const [testPrice, setTestPrice] = useState();

  const { addTest } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addTest(testName, testPrice);
      fetchData();

    } catch (error) {
      console.log(error);
    }
  };

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/patients/test-list"
      );
      setData(response.data.test);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="testMain">
      <form className="test-form" onSubmit={handleSubmit}>
        <h3>Add Test</h3>
        <div className="test-flex">
          <div className="test-wrapper">
            <div className="test-group">
              <label>
                <span>*</span> Test Name
              </label>

              <input
                type="text"
                placeholder="Test Name"
                name="testName"
                onChange={(e) => setTestName(e.target.value)}
              />
            </div>

            <div className="test-group">
              <label>
                <span>*</span> Test Price
              </label>

              <input
                type="text"
                placeholder="Amount"
                name="testPrice"
                onChange={(e) => setTestPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="test-button">
          <button type="submit" className="test-btn">
            <i className="ri-add-line"></i> Add Test
          </button>
        </div>
      </form>

      <div className="test-list">
        <h3>Tests</h3>
        <div className="list-scroll">
          {data.map((test) => (
            <div className="test-table">
              <h5>{test.testName}</h5>
              <h5>₹{test.testPrice}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddTest;
