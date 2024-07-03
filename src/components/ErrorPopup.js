import React from 'react';
import styles from '../styles_modules/ErrorPopup.module.css';

const ErrorPopup = ({ message, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2 className={styles.title}>Error</h2>
        <p className={styles.message}>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorPopup;
