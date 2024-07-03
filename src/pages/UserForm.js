import React, { useState, useEffect, useRef } from "react";
import styles from "../styles_modules/UserForm.module.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const emailInputRef = useRef(null);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.userformContainer}>
      <h1 className={styles.titleMessage}>Finish your profile</h1>
      <form className={styles.userFormContainer} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.labelEmail} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputFieldEmail}
            ref={emailInputRef}
            required
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="firstName">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="lastName">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          NEXT
        </button>
      </form>
    </div>
  );
};

export default UserForm;
