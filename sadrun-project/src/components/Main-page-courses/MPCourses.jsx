import React from "react";
import "../../sass/fonts.scss";
import styles from "./style.module.scss";
import graph from './assets/graph.svg';

export default function MPCourses() {
  return (
    <div className={styles.Courses}>
      <div className={styles.title}>
        <img src={graph} alt="" />
        <h2>دوره ها</h2>
        <span>آخرین دوره های موجود</span>
      </div>
      <div className={styles.row}></div>
    </div>
  );
}
