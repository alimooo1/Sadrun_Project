import React from "react";
import styles from "./FormQA.module.scss";

function FormQA() {
  return (
    <div className={styles.formQA}>
      <input className={styles.inputQA} type="text" placeholder="نام کامل" />
      <input className={styles.inputQA} type="email" placeholder="ایمیل" />
      <textarea className={styles.textareaQA} placeholder="متن پیام" />
    </div>
  );
}

export default FormQA;
