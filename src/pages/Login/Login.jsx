import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="user-login">
        <div className="login-form">
          <div class="form-wrap">
            <h2>Login Lab</h2>
            <form>
              <div className="input-field">
                <label for="email">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  required
                />
              </div>

              <div className="input-field">
                <label for="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
              </div>

              <Link class="login-btn">Log in</Link>
              <div class="links">
                <Link href="#">Forgot password?</Link>
                <Link to="/User-Register">Create New Account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
