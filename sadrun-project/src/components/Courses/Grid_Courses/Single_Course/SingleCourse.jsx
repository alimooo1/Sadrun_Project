import React from "react";
import "../../../../sass/fonts.scss";
import styles from "./style.module.scss";
import StarRating from "../../../StarRating/StarRating";
import capacity from "./assets/capacity.png";
import { Link } from "react-router-dom";

export default function SingleCourse({
  title,
  pic,
  teacherName,
  price,
  allCapacity,
  leftCapacity,
}) {
  return (
    <Link to="/single-blog" className={styles.singleCourseLink}>
      <div className={styles.singleCourse}>
        <img className={styles.poster} src={pic} />
        <span className={styles.title}>{title}</span>
        <div className={styles.info}>
          <div className={styles.right}>
            <span className={styles.teacher_name}>{teacherName}</span>
            <StarRating width={11} initialValue={3} voteNum={90313} />
            <span className={styles.price}>{price}</span>
          </div>

          <div className={styles.capacity}>
            <img src={capacity} alt="" />
            <span className={styles.all_capacity}>{allCapacity}</span>
            <span className={styles.left_capacity}>{leftCapacity}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
