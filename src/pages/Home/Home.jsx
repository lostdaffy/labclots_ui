import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-wrap">
          <div className="hero-text">
            <span className="video-heading">
              <i className="ri-arrow-right-double-line"></i>
              Online Lab Reporting Software
            </span>

            <h1>Enhance & Transform Your Pathology Workflow...</h1>

            <p>
              Revolutionize your lab with our state-of-the-art software designed
              for accuracy and efficiency. Streamline operations, enhance data
              management, and improve patient outcomes with intuitive tools
              tailored for pathology professionals. Experience seamless
              integration, real-time reporting, and robust analytics that
              empower your team to focus on what matters most—delivering quality
              care
            </p>
            <div className="hero-points">
              <span>
                <i className="ri-circle-line"></i> Easy to Use
              </span>
              <span>
                <i className="ri-circle-line"></i> Cost Effective
              </span>
              <span>
                <i className="ri-circle-line"></i> Security
              </span>
            </div>
            <div className="hero-btn">
              <li>
                <Link to="/User-Login" className="login-btn">
                <i className="ri-play-circle-line"> </i>Intro
                </Link>
              </li>
              <li>
                <Link to="/User-Login" className="login-btn">
                <i className="ri-phone-line"></i> Contact
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
