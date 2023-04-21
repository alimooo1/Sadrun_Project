import React, { useState, useEffect } from "react";
import "../../../sass/fonts.scss";
import styles from "./style.module.scss";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
  monthes: "00",
};

const Countdown = ({ timestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(timestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const updateRemainingTime = (timestampMs) => {};

  return (
    <div className={styles.countdown}>
      <div className={styles.box}>
        <span className={styles.number}>{remainingTime.seconds}</span>
        <span className={styles.text}>ثانیه</span>
      </div>
      <div className={styles.box}>
        <span className={styles.number}>{remainingTime.minutes}</span>
        <span className={styles.text}>دقیقه</span>
      </div>
      <div className={styles.box}>
        <span className={styles.number}>{remainingTime.hours}</span>
        <span className={styles.text}>ساعت</span>
      </div>
      <div className={styles.box}>
        <span className={styles.number}>{remainingTime.days}</span>
        <span className={styles.text}>روز</span>
      </div>
      <div className={styles.box}>
        <span className={styles.number}>{remainingTime.monthes}</span>
        <span className={styles.text}>ماه</span>
      </div>
    </div>
  );
};

export default Countdown;
