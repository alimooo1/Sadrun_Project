import React from "react";
import styles from "./Dashboard.module.scss";
import { useNavigate } from "react-router-dom";
const DashboardItem = (props) => {
    const navigate = useNavigate()
  return (
    <li className={styles.row} onClick={() => navigate(props.to)}>
      <img src={props.icon} alt="icon" className={styles.icon} />
      <p className={styles.text}>{props.title}</p>
    </li>
  );
};

export default DashboardItem;
