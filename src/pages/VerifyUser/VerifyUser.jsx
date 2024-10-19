import React, { useState } from "react";
import "./VerifyUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyUser = () => {
  const navigate = useNavigate();
  const [verificationToken, setVerificationToken] = useState();

  const verifyCode = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/users/verify-email", {
      verificationToken,
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
            <form onSubmit={verifyCode}>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  name="verificationToken"
                  onChange={(e) => setVerificationToken(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="verify-btn">
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyUser;
