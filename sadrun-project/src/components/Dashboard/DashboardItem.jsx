import React, { useRef } from "react";
import styles from "./Dashboard.module.scss";
import { useNavigate } from "react-router-dom";

const DashboardItem = ({ icon, title, to, picked, clickHandler }) => {
  const navigate = useNavigate();
  const pickedItem = useRef();
  // const clickHandler = () => {
  //   pickedItem.current.classList.add(styles.pickedItem);
  // };

  return (
    <li
      className={`${styles.row} ${picked && styles.pickedItem}`}
      // onClick={() => navigate(to)}
      onClick={clickHandler}
      ref={pickedItem}
    >
      <img src={icon} alt="icon" className={styles.icon} />
      <p className={styles.text}>{title}</p>
    </li>
  );
};

export default DashboardItem;
