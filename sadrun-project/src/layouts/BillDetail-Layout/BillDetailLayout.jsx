import React from "react";
import styles from "./BillDetailLayout.module.scss";
import BuyLevel from "../../components/Buy-Level/BuyLevel";
import DetailBill from "../../components/Details-Bill/DetailsBill";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";

export default function BillDetailLayout() {
  return (
    <div className={styles.container}>
      <BuyLevel level={2} />
      <div className={styles.bottomPart}>
        <DetailBill />
        <CheckoutCard />
      </div>
    </div>
  );
}
