import React, { useState, useEffect } from "react";
import "../../../sass/fonts.scss";
import styles from "./style.module.scss";
import getRemainingTime from "./Utils/TimerUtils";

const defaultRemainingTime = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
  monthes: 0,
};

const Countdown = ({ timestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    setRemainingTime(getRemainingTime(timestampMs));
    const intervalId = setInterval(() => {
      updateRemainingTime(timestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timestampMs]);

  const updateRemainingTime = (countdown) => {
    setRemainingTime(getRemainingTime(countdown));
  };

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
