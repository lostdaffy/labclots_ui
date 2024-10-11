import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-wrap">
          <div className="footer-column">
            <div className="footer-logo">
              <h1>BloPath</h1>
              <p>
                Lorem, ipsum dolor amet adipisicing elit. Reiciendis, dicta
                rerum non fuga molestiae rerum.
              </p>
              <div className="social-links">
                <li>
                  <Link>
                    <i class="ri-facebook-fill"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i class="ri-instagram-line"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i class="ri-linkedin-fill"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i class="ri-twitter-x-fill"></i>
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="footer-column">
            <h4>Links</h4>
            <div className="footer-menu">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Support</Link>
              </li>
            </div>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <div className="footer-menu">
              <li>
                <Link>Privacy Notice</Link>
              </li>
              <li>
                <Link>Terms of Use</Link>
              </li>
            </div>
          </div>
          <div className="footer-column">
            <h4>Conatct us</h4>
            <div className="footer-menu">
              <p>
                <strong>Phone :</strong> +91 82 7399 8875
              </p>
              <p>
                <strong>Email :</strong> satyaasingh001@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>
          <p>© 2024 | code by lostdaffy | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
