import React from "react";
import styles from "./RowCard.module.scss";
import CategoryPin from "../../Category-Pin/CategoryPin";

export default function RowCard({ imageSRC, title, details, category }) {
  return <div className={styles.rowCard}>
    <img src={imageSRC} alt="" />
    <div className={styles.leftPart}>
      <div className={styles.leftTopPart}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <h6 className={styles.cardDetail}>{details}</h6>
      </div>
      <div className={styles.leftBottomPart}>
        <CategoryPin name={category} />
      </div>

    </div>
  </div>;
}
