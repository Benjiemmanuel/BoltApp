import React from "react";
import styles from "../styles_modules/LandingPage.module.css";
import Logo from "./Logo";

const LandingPagePartOne = () => {
  return (
    <div className={styles.landingPageContainer}>
      <Logo />
      <div className={styles.horizontalLine}></div>
      <div className={styles.textContainer}>
        <p>Tap the form below,</p>
        <p>get a ride.</p>
      </div>
    </div>
  );
};

export default LandingPagePartOne;
