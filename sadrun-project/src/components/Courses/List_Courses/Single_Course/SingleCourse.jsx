import React from "react";
import "../../../../sass/fonts.scss";
import styles from "./style.module.scss";
import StarRating from "../../../StarRating/StarRating";
import capacity from "./assets/capacity.png";
import { GiTeacher } from "react-icons/gi";
import { TbCalendarTime } from "react-icons/tb";

export default function SingleCourse({
  title,
  description,
  pic,
  teacherName,
  price,
  allCapacity,
  leftCapacity,
  duration,
}) {
  return (
    <div className={styles.singleCourse}>
      <img className={styles.poster} src={pic} />

      <div className={styles.info}>
        <div className={styles.row}>
          <div className={styles.about}>
            <span className={styles.title}>{title}</span>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.capacity}>
            <img src={capacity} alt="" />
            <span className={styles.all_capacity}>{allCapacity}</span>
            <span className={styles.left_capacity}>{leftCapacity}</span>
          </div>
        </div>
        <div className={styles.tags}>
          <div className={styles.icon_box}>
            <GiTeacher color="#707070" size={17.5}/>
            <span className={styles.icon_title}>مدرس:</span>
            <span className={styles.teacher_name}>{teacherName}</span>
          </div>
          <div className={styles.icon_box}>
            <TbCalendarTime color="#707070" size={17.5}/>
            <span className={styles.icon_title}>مدت زمان دوره:</span>
            <span className={styles.duration}>{duration}</span>
          </div>
          <StarRating width={13} initialValue={3} voteNum={90} />
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </div>
  );
}
