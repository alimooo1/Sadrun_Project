import React from "react";
import styles from "./TableRow.module.scss";
import imagePlaceHolder from "../images/testImage.svg";
import imagePlaceHolder2 from "../../Footer/assets/enamad-1.png";
const TAbleRow = (props) => {
  const imgPlaceholder = "/images/testImage.svg";
  return (
    <div className={styles.tableRow}>
      <ul className={styles.courseItems}>
        <li className={styles.courseItem}>
          <img
            className={styles.courseImage}
            src={props.courseImage}
            alt="courseImage"
            onError={(c) => {
              c.target.src = imgPlaceholder;
            }}
          />
        </li>
        <li className={styles.courseItem}>{props.courseName}</li>
        <li className={styles.courseItem}>{props.courseMentorsName}</li>
        <li className={styles.courseItem}>{props.courseSeasonName}</li>
        <li className={styles.courseItem}>{props.courseStartDate}</li>
        <li className={styles.courseItem}>{props.courseEndDate}</li>
        <li className={styles.courseItem}>{props.coursePrice}</li>
      </ul>
    </div>
  );
};

export default TAbleRow;
//
