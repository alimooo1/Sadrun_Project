import React from "react";
import "../../sass/fonts.scss";
import styles from "./CategoryPin.module.scss";
import categorySVG from "./images/category-pin.svg";

export default function CategoryPin({ name }) {
  return (
    <div className={styles.categoryPin}>
      <span className={styles.cardCategory}>
        <img src={categorySVG} alt="" />
        {name}
      </span>
      <span className={styles.cardDate}>
        20 فروردین 1400
      </span>
    </div>
  );
}
