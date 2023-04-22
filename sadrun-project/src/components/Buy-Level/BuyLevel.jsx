import React, { useState } from "react";
import styles from "./BuyLevel.module.scss";
import finishedPic from "./images/finished.svg";
import detailPic from "./images/detail.svg";
import cardPic from "./images/card.svg";
import dashedLine from "./images/dashedLine.svg"

export default function BuyLevel({ level }) {

  const levelHandler = level => {
    let [detailOn, finishedOn] = [false, false];
    let [firstProgressOn, secondProgressOn] = [false, false];

    switch (level) {
      case 1:
        break;
      case 2:
        firstProgressOn = true;
        detailOn = true;
        break;
      case 3:
        firstProgressOn = true;
        secondProgressOn = true;
        detailOn = true;
        finishedOn = true;
        break;
    }

    return [detailOn, finishedOn, firstProgressOn, secondProgressOn]
  }

  const situation = levelHandler(level)

  return (
    <div className={styles.outsideContainer}>
      <div className={styles.insideContainer}>
        <div className={styles.card}>
          <img src={cardPic} alt="" />
          سبد خرید
        </div>
        {!situation[2] && <img src={dashedLine} alt="" className={styles.dashedLine} />}
        {situation[2] && <div className={styles.coloredLine}><hr /></div>}
        <div className={`${styles.detail} ${!situation[0] && styles.noColor}`}>
          <img src={detailPic} alt="" />
          جزئیات پرداخت
        </div>
        {!situation[3] && <img src={dashedLine} alt="" className={styles.dashedLine} />}
        {situation[3] && <div className={styles.coloredLine}><hr /></div>}
        <div className={`${styles.finished} ${!situation[1] && styles.noColor}`}>
          <img src={finishedPic} alt="" />
          اتمام فرایند خرید
        </div>
      </div>
    </div>)
}
