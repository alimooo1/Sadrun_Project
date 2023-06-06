import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from './styles.module.scss'

const Input = ({ errorMessage, ...otherProps }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(true);
  }, [errorMessage]);

  return (
    <>
      <input
        className={styles.form_input}
        onFocus={() => setShowError(false)}
        {...otherProps}
      />
      <div className={styles.errorMessage}>
        {showError ? (
          <span className={styles.span}>
            {errorMessage}
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Input;
