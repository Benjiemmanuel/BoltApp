import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles_modules/WelcomePage.module.css";
import Logo from "../components/Logo";

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landpage");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    < div className={styles.LogoContainer}>
      <Logo />
    </div>
  );
};

export default WelcomePage;
