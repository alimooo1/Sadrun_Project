import React from "react";
import "../../../../sass/fonts.scss";
import styles from "./BoxyCard.module.scss";
import CategoryPin from "../../Category-Pin/CategoryPin";
import BlogButton from "../../Blog-Button/BlogButton";

function BoxyCard({ imageSRC, title, description, category }) {
  return (
    <div className={styles.boxyCard}>
      <img src={imageSRC} className={styles.cardImage} alt="" />
      <h4 className={styles.cardTitle}>{title}</h4>
      <h6 className={styles.cardDetails}>{description}</h6>
      <div className={styles.bottomPart}>
        <CategoryPin name={category} />
        <BlogButton />
      </div>
    </div>
  );
}

export default BoxyCard;
