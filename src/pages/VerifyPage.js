import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { BsArrowLeft } from "react-icons/bs";
import styles from "../styles_modules/VerifyPage.module.css";

const VerifyPage = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Handle input change for each digit
  const handleChange = (index, value) => {
    // Make sure value is numeric and only one character
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      // Move focus to the next input field if not the last one
      if (index < 3) {
        refs[index + 1].current.focus();
      } else {
        // If the last digit is entered, navigate to EmailNameFieldPage
        navigate("/emailnamefield");
      }
    }
  };

  // Refs for each input field
  const refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];

  return (
    <div className={styles.overallVerifyContainer}>
      <Link to="/authorize" className={styles.backLink}>
        <BsArrowLeft className={styles.backArrow} />
      </Link>
      <div className={styles.container}>
        <div>
          <div className={styles.instructions}>
            <span>Enter the code sent via SMS to</span>{" "}
            <span className={styles.phoneNumber}>+2349164493801</span>
          </div>
          <div className={styles.otpContainer}>
            {code.map((digit, index) => (
              <div key={index} className={styles.inputWrapper}>
                <input
                  type="tel"
                  className={styles.inputField}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  ref={refs[index]}
                  autoFocus={index === 0} // Ensure the first input gets focus
                />
                <div className={styles.horizontaLineVerifyOne}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
