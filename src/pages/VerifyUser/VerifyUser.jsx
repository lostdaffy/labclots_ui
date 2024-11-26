import React, { useState } from "react";
import "./VerifyUser.css";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const VerifyUser = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState();

  const { verifyEmail, error, isLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await verifyEmail(verificationCode);
      navigate("/User-Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="user-login">
        <div className="login-form">
          <div className="form-wrap">
            <h2>OTP Verification</h2>
            <p>Enter the 6 digit verification code recevied on your Email ID</p>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  name="verificationCode"
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="verify-btn">
              {isLoading ? <i className="ri-restart-line"></i> : "Verify"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyUser;
