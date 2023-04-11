import React from "react";
import styles from "./RowCard.module.scss";
import "../../../../sass/fonts.scss"
import CategoryPin from "../../Category-Pin/CategoryPin";
import BlogButton from "../../Blog-Button/BlogButton";

export default function RowCard({ imageSRC, title, details, category }) {
  return <div className={styles.rowCard}>
    <img className={styles.cardImage} src={imageSRC} alt="" />
    <div className={styles.leftPart}>
      <div className={styles.leftTopPart}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <h6 className={styles.cardDetails}>{details}</h6>
      </div>
      <div className={styles.leftBottomPart}>
        <CategoryPin name={category} />
        <BlogButton />
      </div>
    </div>
  </div>;
}
