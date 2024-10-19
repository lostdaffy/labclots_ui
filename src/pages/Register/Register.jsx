import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [ownerName, setOwnerName] = useState();
  const [labName, setLabName] = useState();
  const [labEmail, setLabEmail] = useState();
  const [labPassword, setLabPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/users/register", {
      ownerName,
      labName,
      labEmail,
      labPassword,
    });
    navigate("/Verify-User");
  };

  return (
    <>
      <div className="user-login">
        <div className="login-form">
          <div className="form-wrap">
            <h2>Register Lab</h2>

            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="ownerName">Name</label>
                <input
                  type="text"
                  placeholder="Lab Owner Name"
                  name="ownerName"
                  onChange={(e) => setOwnerName(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="labName">Lab Name</label>
                <input
                  type="text"
                  placeholder="Enter Lab Name"
                  name="labName"
                  onChange={(e) => setLabName(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="labEmail">Email</label>
                <input
                  type="email"
                  placeholder="Enter Lab Email"
                  name="labEmail"
                  onChange={(e) => setLabEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="labPassword">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="labPassword"
                  onChange={(e) => setLabPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="signup-btn">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
