// src/ConfirmationModal.js
import React from 'react';
import styles from '../styles_modules/ConfirmationModal.module.css';

const ConfirmationModal = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonGroup}>
        <button className={styles.cancelButton} onClick={onCancel}>Cancel</button>
          <button className={styles.confirmButton} onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
