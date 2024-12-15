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
                  <i class="ri-check-fill"></i> Eliminates the risk of data loss
                  due to system crashes.
                </h5>
                <h5>
                  <i class="ri-check-fill"></i> Supports multiple labs under one
                  software system with unique dashboards for each.
                </h5>
                <h5>
                  <i class="ri-check-fill"></i> Automatic report generation for
                  tests like blood tests, imaging, and biochemistry.
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
                  <h4>Patient Record Management</h4>
                  <p>
                    Stores and organizes patient data securely Allows easy
                    retrieval of past reports for reference Tracks patient
                    history for doctors and lab technicians.
                  </p>
                </div>
              </div>

              <div className="about-wrap">
                <div className="about-icon">
                  <img src={report_icon} alt="Report Icon" />
                </div>
                <div className="about-icon-text">
                  <h4> Real-Time Access </h4>
                  <p>
                    Patients and doctors can access test results online through
                    secure portals. Notifications or SMS alerts for report
                    readiness.
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
              BloPath – Your Most Trusted Healthcare Partner!
            </h2>
            <p className="subtitle">
              Online lab reporting software has become an essential tool for
              pathology labs, diagnostic centers, and healthcare facilities. It
              streamlines processes like patient data management, report
              generation, and record maintenance, enabling labs to operate
              efficiently and securely.
            </p>
            <div className="test-section">
              <div className="test-category">
                <h3> Dashboard for Labs </h3>
                <ul>
                  <li>
                    ⭐ Individual dashboards for multiple labs to manage their
                    operations separately.
                  </li>
                  <li>
                    {" "}
                    ⭐ Provides data backups, ensuring availability even during
                    disasters.
                  </li>
                </ul>
              </div>
              <div className="test-category">
                <h3>Multi-Lab Functionality</h3>
                <ul>
                  <li>
                    ⭐ Supports multiple labs under one software system with
                    unique dashboards for each.
                  </li>
                  <li>
                    ⭐ Data segregation ensures privacy and independence of
                    operations.
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
