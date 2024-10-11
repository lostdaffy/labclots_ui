import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { Axios } from "axios";

const Register = () => {
  const [labName, setLabName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("", { labName, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="user-login">
        <div className="login-form">
          <div class="form-wrap">
            <h2>Register Lab</h2>

            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label for="labName">Lab Name</label>
                <input
                  type="text"
                  placeholder="Enter Lab Name"
                  name="labName"
                  onChange={(e) => {
                    setLabName(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="input-field">
                <label for="email">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="input-field">
                <label for="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>

              <Link class="login-btn">Sign up</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
