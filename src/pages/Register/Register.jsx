import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const Register = () => {
  const navigate = useNavigate();
  const [ownerName, setOwnerName] = useState();
  const [labName, setLabName] = useState();
  const [labEmail, setLabEmail] = useState();
  const [labPassword, setLabPassword] = useState();

  const { register, error, isLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(ownerName, labName, labEmail, labPassword);
      navigate("/verify-user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="user-login">
        <div className="login-form">
          <div className="form-wrap">
            <h2>Register Lab</h2>

            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="ownerName">Name*</label>
                <input
                  type="text"
                  placeholder="Lab Owner Name"
                  name="ownerName"
                  onChange={(e) => setOwnerName(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="labName">Lab Name*</label>
                <input
                  type="text"
                  placeholder="Enter Lab Name"
                  name="labName"
                  onChange={(e) => setLabName(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="labEmail">Email*</label>
                <input
                  type="email"
                  placeholder="Enter Lab Email"
                  name="labEmail"
                  onChange={(e) => setLabEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <label htmlFor="labPassword">Password*</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="labPassword"
                  onChange={(e) => setLabPassword(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>

              {error && <p>{error}</p>}

              <button type="submit" className="signup-btn">
                {isLoading ? <i className="ri-restart-line"></i> : "Sign Up"}
              </button>

              <div className="links">
                <Link to="/user-register">Create New Account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
