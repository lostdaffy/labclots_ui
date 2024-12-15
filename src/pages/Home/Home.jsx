import React from "react";
import { Link } from "react-router-dom";
import imge from "../../assets/imge.jpg";
import report_icon from "../../assets/report-icon.png";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-wrap">
          <div className="hero-text">
            <span className="hero-heading">
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

      <div className="about-component">
        <div className="about-colums">
          <div className="about-colums-1">
            <div className="about-colum-1-text">
              <span>
                <i className="ri-arrow-right-double-line"></i> BETTER FOR YOU
              </span>
              <h2>
                Streamlined Online Lab Reporting Software for Efficient Data
                Management
              </h2>
              <p>
                Our online lab reporting software simplifies data management
                with real-time analysis and secure sharing. It enhances
                accuracy, collaboration, and productivity through customizable
                templates and automated workflows.
              </p>

              <div className="about-bullet">
                <h5>
                  <i class="ri-check-fill"></i> Lorem ipsum isw dil
                </h5>
                <h5>
                  <i class="ri-check-fill"></i> Lorem ipsum isw dil
                </h5>
                <h5>
                  <i class="ri-check-fill"></i> Lorem ipsum isw dil
                </h5>
              </div>

              <div className="about-component-btn">
                <Link to="/About">About us</Link>
              </div>
            </div>
          </div>
          <div className="about-colums-2">
            <div className="about-colum-2-text">
              <div className="about-wrap">
                <div className="about-icon">
                  <img src={report_icon} alt="Report Icon" />
                </div>
                <div className="about-icon-text">
                  <h4>Real-Time Data Entry</h4>
                  <p>
                    This feature often includes data validation tools and
                    customizable templates for various test types, making data
                    entry accurate and efficient.
                  </p>
                </div>
              </div>

              <div className="about-wrap">
                <div className="about-icon">
                  <img src={report_icon} alt="Report Icon" />
                </div>
                <div className="about-icon-text">
                  <h4>Real-Time Data Entry</h4>
                  <p>
                    This feature often includes data validation tools and
                    customizable templates for various test types, making data
                    entry accurate and efficient.
                  </p>
                </div>
              </div>

              <div className="about-wrap">
                <div className="about-icon">
                  <img src={report_icon} alt="Report Icon" />
                </div>
                <div className="about-icon-text">
                  <h4>Real-Time Data Entry</h4>
                  <p>
                    This feature often includes data validation tools and
                    customizable templates for various test types, making data
                    entry accurate and efficient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  App Details, Third Sections  */}

      <div className="app-details">
        <div className="app-wrap">
          <div className="text-sec">
            <h2 className="title">
              BloPath – Your Most Trusted Healthcare Partner!{" "}
            </h2>
            <p className="subtitle">
              We are one of the oldest players who focused on bringing quality
              diagnosis services by providing accurate and timely test results
              to our valued customers. With a commitment to excellence and a
              wide range of comprehensive test panels, Dr Lal PathLabs is your
              trusted partner in promoting good health and overall well-bein
            </p>
            <div className="test-section">
              <div className="test-category">
                <h3>Quality and Accuracy </h3>
                <ul>
                  <li>
                    ⭐ At BloPath, we prioritize quality as one of our <br />
                    driving values.  Our labs are NABL (National Accreditation
                    Board for Testing and  Calibration Laboratories)
                  </li>
                  <li> ⭐ CAP
                    (College of American Pathologists) accredited,<br /> and we adhere
                    to stringent quality checks. Every test at BloPath 
                    undergoes 50+ quality and process checks, <br /> end to end from
                    sample collection to report.</li>
                </ul>
              </div>
              <div className="test-category">
                <h3>Embracing Innovation </h3>
                <ul>
                  <li>
                    ⭐ We have a dedicated team of doctors <br /> ensuring that
                    we bring in all technologically relevant advancements, tests
                  </li>
                  <li>
                    ⭐ quality checks and processes in each test we do.
                    We invest in research and development <br /> to bring you
                    the latest diagnostic solutions and breakthroughs.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="image-section">
            <img src={imge} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
