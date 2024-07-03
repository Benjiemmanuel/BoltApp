import React, { useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../globalstyles/global.css";
import styles from "../styles_modules/AuthorizePage.module.css";

const AuthorizePage = () => {
  const navigate = useNavigate();
  const inputTextRef = useRef(null);
  const horizonalLineInputTwoRef = useRef(null);
  const horizonalLineInputOneRef = useRef(null);
  const [countryCode, setCountryCode] = useState("234");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleBackClick = () => {
    navigate("/landpage");
  };

  const handleCountryCodeClick = () => {
    if (horizonalLineInputOneRef.current) {
      horizonalLineInputOneRef.current.style.backgroundColor = "#f775a2";
    }
    if (horizonalLineInputTwoRef.current) {
      horizonalLineInputTwoRef.current.style.backgroundColor = "";
    }
  };

  const handlePhoneNumberClick = () => {
    if (horizonalLineInputTwoRef.current) {
      horizonalLineInputTwoRef.current.style.backgroundColor = "#f775a2";
    }
    if (horizonalLineInputOneRef.current) {
      horizonalLineInputOneRef.current.style.backgroundColor = "";
    }
  };

  useEffect(() => {
    if (inputTextRef.current) {
      inputTextRef.current.focus();
      if (horizonalLineInputTwoRef.current) {
        horizonalLineInputTwoRef.current.style.backgroundColor = "#f775a2";
      }
    }
  }, []);

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{11}$/;
    return phoneRegex.test(number);
  };

  const validateCountryCode = (code) => {
    const countryCodeRegex = /^[0-9]{3}$/;
    return countryCodeRegex.test(code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() === "" || countryCode.trim() === "") {
      setErrorMessage("Please enter your valid phone number");
    } else if (
      !validatePhoneNumber(phoneNumber) ||
      !validateCountryCode(countryCode)
    ) {
      setErrorMessage("The phone number you entered is invalid");
    } else {
      setErrorMessage("");
      navigate("/verify");
    }
  };

  return (
    <div className={styles.container}>
      <BsArrowLeft className="BackArrow" onClick={handleBackClick} />
      <div className={styles.LoginContainer}>
        <p className={styles.message}>
          You'll get an SMS to confirm your number
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputDetailsContainer}>
            <div className={styles.inputOne}>
              <div className={styles.CountryCodeContainer}>
                <img
                  src="./assets/Nigeriaflag.jpg"
                  alt=""
                  className={styles.flag}
                />
                <span>+</span>
                <input
                  type="text"
                  className={styles.inputCountryCode}
                  value={countryCode}
                  onClick={handleCountryCodeClick}
                  onChange={(e) => setCountryCode(e.target.value)}
                />
              </div>
              <div
                className={styles.horizonalLineInputOne}
                ref={horizonalLineInputOneRef}
              ></div>
            </div>
            <div className={styles.inputTwo}>
              <input
                type="text"
                placeholder="Phone number"
                className={styles.inputText}
                ref={inputTextRef}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onClick={handlePhoneNumberClick}
              />
              <div
                className={styles.horizonalLineInputTwo}
                ref={horizonalLineInputTwoRef}
              ></div>
            </div>
          </div>
          <button type="submit" className={styles.button}>
            NEXT
          </button>
          {errorMessage && <p className={styles.errMessage}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default AuthorizePage;
