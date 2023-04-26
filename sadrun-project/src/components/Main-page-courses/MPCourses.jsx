import React from "react";
import "../../sass/fonts.scss";
import styles from "./style.module.scss";
import graph from "./assets/graph.svg";
import nodePic from "./assets/node.png";
import vsCodePic from "./assets/vs-code.png";
import angularPic from "./assets/angular.png";
import nestPic from "./assets/nest.png";
import man_1 from "./assets/man-1.svg";
import man_2 from "./assets/man-2.svg";
import hand from "./assets/hand.svg";

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
          <img src={man_1} alt="" className={styles.man_graph_1} />
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
          <div className={styles.man_2}>
            <img src={man_2} alt="" className={styles.man_graph_2} />
            <img src={hand} alt="" className={styles.hand_graph} />
          </div>
          <div className={styles.courses_pic}>
            <img src={vsCodePic} alt="" />
          </div>
          <div className={styles.courses_pic}>
            <img src={angularPic} alt="" />
          </div>
          <div className={styles.courses_pic}>
            <img src={nestPic} alt="" />
          </div>
          <button className={styles.btn}>بیشتر</button>
        </div>
      </div>
    </div>
  );
}
