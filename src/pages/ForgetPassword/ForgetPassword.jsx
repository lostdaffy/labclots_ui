import React, { useState } from "react";
import "./VerifyUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyUser = () => {
  const navigate = useNavigate();
  const [labEmail, setLabEmail] = useState();

  const forgetPassword = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/users/reset-password", {
        labEmail,
    });
    navigate("/User-Login");
  };

  return (
    <>
      <div className="user-login">
        <div className="login-form">
          <div className="form-wrap">
            <h2>OTP Verification</h2>
            <p>Enter the 6 digit verification code recevied on your Email ID</p>
            <form onSubmit={forgetPassword}>
              <div className="input-field">
                <input
                  type="email"
                  placeholder="Enter Lab Email"
                  name="labEmail"
                  onChange={(e) => setLabEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="verify-btn">
                Sent Reset Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyUser;
