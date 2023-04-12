import React from "react";
import "../../../../sass/fonts.scss";
import styles from "./style.module.scss";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";

const SingleComment = () => {
  return (
    <div className={styles.single_comment}>
      <img src={person1} className={styles.profile_pic} alt="" />
      <div className={styles.content}>
        <div className={styles.shape}>
          <div></div>
        </div>
        <div className={styles.title}>
          <span className={styles.name}>استاد بحر</span>
          <span className={styles.date}>4 ساعت پیش</span>
        </div>
        <p className={styles.text}>
          چیییییییییی آفرین به خانم دارابی مثل اینکه هم گروهیاتو کچل نکردی اونا
          کچلت کردن
        </p>
        <div className={styles.icons}>
          <div className={styles.likes_dislikes}></div>
          <div className={styles.share_report}></div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
