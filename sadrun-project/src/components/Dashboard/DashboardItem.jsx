import React, { useRef } from "react";
import styles from "./Dashboard.module.scss";

const DashboardItem = ({ icon, title, picked, clickHandler }) => {
  return (
    <li
      className={`${styles.row} ${picked && styles.pickedItem}`}
      onClick={clickHandler}
    >
      <img src={icon} alt="icon" className={styles.icon} />
      <p className={styles.text}>{title}</p>
    </li>
  );
};

export default DashboardItem;
