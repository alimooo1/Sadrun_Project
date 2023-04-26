import React from "react";
import styles from "./PaymentDetail.module.scss";
import BuyLevel from "../../components/Buy-Level/BuyLevel";
import ShoppingCard from "../../components/ShoppingCart/ShoppingCart";
import CourseInformation from "../../components/CheckoutCard/CheckoutCard";

export default function PaymentDetailLayout() {
  return (
    <div className={styles.container}>
      <BuyLevel level={2} />
      <div className={styles.bottomPart}>
        <ShoppingCard />
        <CourseInformation />
      </div>
    </div>
  );
}
