import React from "react";
import styles from "./SuccessLayout.module.scss";
import PaymentLevel from "../../components/Buy-Level/BuyLevel";
import SuccessCard from "../../components/success-Card/successCard";

export default function SuccessLayout() {
  return (
    <div className={styles.container}>
      <PaymentLevel level={3} />
      <div className={styles.bottomPart}>
        <SuccessCard />
      </div>
    </div>
  );
}
