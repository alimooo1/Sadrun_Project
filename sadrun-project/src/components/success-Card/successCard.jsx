import React from "react";
import styles from "../success-Card/successCard.module.scss";
import Ticks from "../success-Card/images/Path 929.svg";

function SuccessCard() {
  return (
    <div className={styles.box}>
      <div className={styles.conteiner}>
        <div className={styles.conteinerTicks}>
          <img className={styles.tick} src={Ticks} alt="" />
        </div>
        <p className={styles.title}>سفارش شما با موفقیت ثبت شد</p>
      </div>
      <div className={styles.conteinerText}>
        <p className={styles.text}>
          اکنون میتوانید دوره خود را در داشبورد خود مشاهده کنید
        </p>
        <button className={styles.btn}>رفتن به داشبورد</button>
      </div>
    </div>
  );
}

export default SuccessCard;
