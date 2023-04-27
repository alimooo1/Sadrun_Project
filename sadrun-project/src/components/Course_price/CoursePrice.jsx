import React from "react";
import "../../sass/fonts.scss";
import styles from "./style.module.scss";
import price from "./assets/price.png";
import discount from "./assets/discount.png";
import Countdown from "./Countdown/Countdown";

export default function CoursePrice({ coursPrice, courseDiscount, date }) {
  return (
    <div className={styles.course_price}>
      <div className={styles.row}>
        <div className={styles.title}>
          <img className={styles.price_img} src={price} alt="" />
          <span className={styles.price_text}>قیمت دوره</span>
        </div>
        <span className={styles.price}>{coursPrice}</span>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>
          <img className={styles.discount_img} src={discount} alt="" />
          <div className={styles.discount_box}>
            <span className={styles.discount_text}>با تخفیف</span>
            <span className={styles.discount_persentage}>
              %{courseDiscount}
            </span>
          </div>
        </div>
        <span className={styles.discount}>{coursPrice - (coursPrice * (courseDiscount / 100))}</span>
      </div>
      <div>
        <span className={styles.time_left}>مهلت استفاده از تخفیف</span>
        <Countdown timestampMs={date} />
      </div>
      <button className={styles.button}>ثبت نام در دوره</button>
    </div>
  );
}
