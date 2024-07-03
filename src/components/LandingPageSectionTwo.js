import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../globalstyles/global.css'
import styles from "../styles_modules/LandingPage.module.css";

const LandingPageSectionTwo = () => {
  const navigate = useNavigate();
  const [lineColor, setLineColor] = useState("#f9f9f9"); 

  const handlePhoneContainerClick = () => {
    setLineColor("#fdc6d9");
    setTimeout(() => {
      navigate("/authorize");
    }, 100);
  };

  return (
    <div className={styles.container_section_two}>
      <h2 className={styles.text}>Get started with your</h2>
      <div className={styles.inputContainer}>
        <div className={styles.innerContainer}>
          <div
            className={styles.flagContainer}
            onClick={handlePhoneContainerClick}
          >
            <img
              src="./assets/Nigeriaflag.jpg"
              alt=""
              className="flag"
            />
            <div>
              <p className={styles.countryCode}>+234</p>
            </div>
          </div>
          <div
            className={styles.horizontalLineOne}
            style={{ backgroundColor: lineColor }}
          ></div>
        </div>
        <div
          className={styles.phoneContainer}
          onClick={handlePhoneContainerClick}
        >
          <p className={styles.phoneNumber}>Phone number</p>
          <div
            className={styles.horizontalLineTwo}
            style={{ backgroundColor: lineColor }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSectionTwo;
