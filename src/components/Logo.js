import React from "react";
import styles from '../styles_modules/Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.titleContainer}>
      <h1>
        B
        <span className={styles.oContainer}>
          o<span className={styles.dot}>.</span>
        </span>
        lt
      </h1>
    </div>
  );
};

export default Logo;
