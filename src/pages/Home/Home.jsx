import React from "react";
import { Link } from "react-router-dom";
import report_icon from "../../assets/report-icon.png";
import imge from "../../assets/imge.jpg";

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
                <h5><i class="ri-check-fill"></i> Lorem ipsum isw dil</h5>
                <h5><i class="ri-check-fill"></i> Lorem ipsum isw dil</h5>
                <h5><i class="ri-check-fill"></i> Lorem ipsum isw dil</h5>
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

        <h2 className="title">It’s all about the data.</h2>
        <p className="subtitle">
          Vestibulum morbi blandit cursus risus.Augue neque gravida <br /> in fermentum
          et sollicitudin ac orci phasellus.  Massa massa ultricies mi quis
          hendrerit.
        </p>
        <div className="test-section"> 

          <div className="test-category">
            <h3>Paternity Testing</h3>
            <ul>
              <li>⭐ Complete Blood Count</li>
              <li> ⭐ Blood Sugar–Fasting</li>
            </ul>
          </div>
          <div className="test-category"> 
            <h3>Biochemistry Tests</h3>
            <ul>
              <li> ⭐ Complete Blood Count</li>
              <li> ⭐ Blood Sugar–Fasting</li>
            </ul>
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
