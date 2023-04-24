import React from "react";
import styles from "./SuccessCard.module.scss";
import Ticks from "./images/Path 929.svg";
import { Link } from "react-router-dom";

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
        <Link to={"/landing"}>
          <button className={styles.btn}>رفتن به داشبورد</button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessCard;
