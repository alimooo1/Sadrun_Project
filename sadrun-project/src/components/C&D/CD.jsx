import React, { useState } from "react";
import "../../sass/fonts.scss";
import styles from "./style.module.scss";
import nodePic from "./assets/node.png";

export default function CD() {
  const [visible, setVisible] = useState("discription");

  return (
    <div className={styles.main_card}>
      <img src={nodePic} alt="" />
      <h1 className={styles.title}>نود جی اس</h1>
      <div className={styles.tab}>
        {/* ----------Tab Links---------------  */}
        <div className={styles.tablinks}>
          <button className={styles.active_btn}>توضیحات</button>
          <button>نظرات</button>
        </div>

        {/* ----------Tab Content---------------  */}
        <div className={styles.tabcontent}>
          <div className={styles.active_content}>
            <h3>Descriptions</h3>
          </div>

          <div>
            <h3>Comments</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
