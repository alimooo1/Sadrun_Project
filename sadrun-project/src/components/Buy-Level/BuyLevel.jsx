import React, { useState } from "react";
import styles from "./BuyLevel.module.scss";
import finishedPic from "./images/finished.svg";
import detailPic from "./images/detail.svg";
import cardPic from "./images/card.svg";

export default function BuyLevel() {

  const levelHandler = level => {
    let [detailOn, finishedOn] = [false, false];
    let [firstProgressOn, secondProgressOn] = [false, false];

    switch (level) {
      case "2":
        firstProgressOn = true

    }
  }
  return (
    <div className={styles.outsideContainer}>
      <div className={styles.insideContainer}>
        <div className={styles.card}>
          <img src={cardPic} alt="" />
          سبد خرید</div>
        <div className={styles.detail}>
          <img src={detailPic} alt="" />
          جزئیات پرداخت</div>
        <div className={styles.finished}>
          <img src={finishedPic} alt="" />
          اتمام فرایند خرید</div>
      </div>
    </div>)
}
