import React from "react";
import styles from "./TableRow.module.scss";
import imagePlaceHolder from "../images/testImage.svg";
import imagePlaceHolder2 from "../../Footer/assets/enamad-1.png";
const TAbleRow = (props) => {
  const imgPlaceholder = "/images/testImage.svg";
  return (
    <div className={styles.tableRow}>
      <ul className={styles.courseItems}>
        <li>
          <img
            src={props.courseImage}
            alt="courseImage"
            onError={(c) => {
              c.target.src = imgPlaceholder;
            }}
          />
        </li>
        <li>{props.courseName}</li>
        <li>{props.courseMentorsName}</li>
        <li>{props.courseSeasonName}</li>
        <li>{props.courseStartDate}</li>
        <li>{props.courseEndDate}</li>
        <li>{props.coursePrice}</li>
      </ul>
    </div>
  );
};

export default TAbleRow;
//
