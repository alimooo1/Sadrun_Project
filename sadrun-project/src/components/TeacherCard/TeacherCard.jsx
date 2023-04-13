import React from "react";
import "../../sass/fonts.scss";
import styles from "../TeacherCard/TeacherCard.module.css";
import teacher1 from "../TeacherCard/images/teacher1.png";
import teacher2 from "../TeacherCard/images/teacher2.png";
import teacher3 from "../TeacherCard/images/teacher3.png";
import teacher4 from "../TeacherCard/images/teacher4.png";
import icon from "../TeacherCard/images/12121212.svg";
import path1 from "./images/Path 563.svg";
import path2 from "./images/Path 564.svg";

function TeacherCard() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>اساتید برتر</h2>
        <p> استادای مهربون و دوستداشتنی</p>
      </div>
      <div className={styles.teacher_item}>
        <img className={styles.teacher_imag} src={teacher1} alt="" />
        <div className={styles.teacher_text}>
          <h2>دکتر بحر العلوم</h2>
          <p className={styles.teacher_item_head}>مدیریت</p>
          <p className={styles.teacher_item_text}>
            مدرس در آموزشگاه , مدرس در دانشگاه علم و فناوری مازندران مستقر در
            بهشهر , مدرس دوره های وب
          </p>
        </div>

        <div>
          <div className={styles.icon_path}>
            <img className={styles.icon} src={icon} alt="" />
            <img className={styles.path1} src={path1} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.teachrs}>
        <div className={styles.path2}>
          <img className={styles.path2_img} src={path2} alt="" />
        </div>
        <div className={styles.teachers_item}>
          <img src={teacher2} alt="" />
          <div className={styles.teachers_item_text}>
            <p>حامد نظری</p>
            <p>طراح فرانت</p>
          </div>
        </div>
        <div className={styles.teachers_item}>
          <img src={teacher3} alt="" />
          <div className={styles.teachers_item_text}>
            <p>حامد نظری</p>
            <p>طراح فرانت</p>
          </div>
        </div>
        <div className={styles.teachers_item}>
          <img src={teacher4} alt="" />
          <div className={styles.teachers_item_text}>
            <p>حامد نظری</p>
            <p>طراح فرانت</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
