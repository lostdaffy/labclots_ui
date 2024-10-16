import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-wrap">
          <div className="hero-text">
            <h1>BloPath</h1>
            <h5>Online Lab Reporting Software</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quasi, dolores ut delectus commodi optio fuga enim
              odit placeat a eos corporis suscipit maxime reprehenderit quae ea
              ullam, voluptatem alias.
            </p>
            <div className="hero-btn">
              <li>
                <Link to="/User-Login" className="login-btn">
                  Login Lab <i className="ri-microscope-line"></i>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
