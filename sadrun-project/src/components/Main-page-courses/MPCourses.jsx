import React from "react";
import "../../sass/fonts.scss";
import styles from "./style.module.scss";
import graph from "./assets/graph.svg";
import nodePic from "./assets/node.png";
import vsCodePic from "./assets/vs-code.png";
import angularPic from "./assets/angular.png";
import nestPic from "./assets/nest.png";

export default function MPCourses() {
  return (
    <div className={styles.Courses}>
      <div className={styles.title}>
        <img src={graph} alt="" />
        <h2>دوره ها</h2>
        <span>آخرین دوره های موجود</span>
      </div>
      <div className={styles.row}>
        <div className={styles.bigcard}>
          <img src={nodePic} alt="" />

          <div className={styles.info}>
            <div className={styles.right_box}>
              <h3>نود جی اس : دوره کامل </h3>
              <p>
                نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ
                سمت سرورِ متن‌باز و چندسکویی برای زبان جاوااسکریپت است
              </p>
            </div>
            <div className={styles.left_box}>
              <span>آرمین اسلامی</span>
              <button className={styles.btn}>مشاهده دوره</button>
            </div>
          </div>
        </div>

        <div className={styles.smallcard}>
          <img src={vsCodePic} alt="" />
          <img src={angularPic} alt="" />
          <img src={nestPic} alt="" />
          <button className={styles.btn}>بیشتر</button>
        </div>
      </div>
    </div>
  );
}
