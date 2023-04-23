import React from "react";
import tickIcon from "./images/tick.svg";
import styles from "./CourseBenefits.module.scss";
const CourseBenefits = () => {
  return (
    <div className={styles.benefitsCountainer}>
      <h2>مزایای شرکت در این دوره</h2>
      <ul className={styles.benefitsList}>
        <li>
          <img className={styles.icon} src={tickIcon} alt="tickIcon" />
          <span className={styles.itemText}>ارتباط مستقیم با مدرس</span>
        </li>
        <li>
          <img className={styles.icon} src={tickIcon} alt="tickIcon" />
          <span className={styles.itemText}>
            ساخت رزومه مناسب برای بازار کار
          </span>
        </li>
        <li>
          <img className={styles.icon} src={tickIcon} alt="tickIcon" />
          <span className={styles.itemText}>معرفی به بهترین شرکت ها</span>
        </li>
      </ul>
    </div>
  );
};
export default CourseBenefits;
