import React from "react";
import "../../sass/fonts.scss";
import styles from "./style.module.scss";

export default function CoursePrice() {
  return (
    <div className={styles.course_pice}>
      <div className={styles.row}>
        <span>قیمت دوره</span>
        <span className={styles.price}>2498000</span>
      </div>
      <div className={styles.row}>
        <span>با تخفیف</span>
        <span className={styles.discount}>2398000</span>
      </div>
      <div>
        <span className={styles.time_left}>مهلت استفاده از تخفیف</span>
      </div>
      <button className={styles.button}>ثبت نام در دوره</button>
    </div>
  );
}
