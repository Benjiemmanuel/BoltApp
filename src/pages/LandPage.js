import React from "react";
import LandingPageSectionOne from "../components/LandingPageSectionOne";
import styles from "../styles_modules/LandingPage.module.css";
import LandingPageSectionTwo from "../components/LandingPageSectionTwo";
const LandPage = () => {
  return (
    <div className={styles.overall}>
      <LandingPageSectionOne />
      <LandingPageSectionTwo/>
    </div>
  );
};

export default LandPage;
