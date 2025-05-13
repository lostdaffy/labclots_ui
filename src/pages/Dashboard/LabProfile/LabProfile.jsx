import React from "react";
import "./LabProfile.css";
import labIcon from "../../../assets/icon.png";

const LabProfile = () => {
  const setLabName = () => {};
  const setLabAddress = () => {};
  const setLabEmail = () => {};
  const setLabPhone = () => {};

  return (
    <section className="lab-profile">
      <div className="lab-profile__main">
        <h3 className="lab-profile__title">Lab Profile</h3>

        <form className="lab-profile__form">
          <div className="lab-profile__form-container">
            <div className="lab-profile__form-section">
              <div className="lab-profile__form-group">
                <div>
                  <img src={labIcon} alt="Lab Icon" className="lab-profile__image" />
                </div>
                <input type="file" name="img" accept="image/*" />
              </div>
            </div>

            <div className="lab-profile__form-section">
              <div className="lab-profile__form-group">
                <label>
                  <span>*</span> Lab Name
                </label>
                <input
                  type="text"
                  placeholder="Lab Name"
                  name="labName"
                  onChange={(e) => setLabName(e.target.value)}
                />
              </div>
              <div className="lab-profile__form-group">
                <label>
                  <span>*</span> Lab Address
                </label>
                <input
                  type="text"
                  placeholder="Lab Address"
                  name="labAddress"
                  onChange={(e) => setLabAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="lab-profile__form-section">
              <div className="lab-profile__form-group">
                <label>
                  <span>*</span> Lab Email
                </label>
                <input
                  type="text"
                  name="labEmail"
                  placeholder="Lab Email"
                  onChange={(e) => setLabEmail(e.target.value)}
                />
              </div>
              <div className="lab-profile__form-group">
                <label>
                  <span>*</span> Lab Phone No.
                </label>
                <input
                  type="text"
                  placeholder="Lab Phone No."
                  name="labPhone"
                  onChange={(e) => setLabPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="lab-profile__button-wrapper">
            <button type="submit" className="lab-profile__button">
              <i className="ri-check-double-fill"></i> Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LabProfile;
