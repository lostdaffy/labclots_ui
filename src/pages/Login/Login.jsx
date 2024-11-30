import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [labEmail, setLabEmail] = useState();
  const [labPassword, setLabPassword] = useState();
  const { login, isLoading, error } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(labEmail, labPassword);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="user-login">
        <div className="login-form">
          <div className="form-wrap">
            <h2>Login Lab</h2>

            <form onSubmit={handleSubmit}>
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

              <button className="login-btn">Log in</button>

              <div className="links">
                <Link href="#">Forgot password?</Link>
                <Link to="/user-register">Create New Account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
