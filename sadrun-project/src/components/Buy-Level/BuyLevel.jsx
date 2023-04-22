import React from "react";
import styles from "./BuyLevel.module.scss";

export default function BuyLevel() {
  return (
    <div className={styles.outsideContainer}>
      <div className={styles.insideContainer}>
        <div className={styles.cart}></div>
        <div className={styles.detail}></div>
        <div className={styles.finished}></div>
      </div>
    </div>)
}
