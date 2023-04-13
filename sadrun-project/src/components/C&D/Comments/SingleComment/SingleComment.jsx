import React from "react";
import "../../../../sass/fonts.scss";
import styles from "./style.module.scss";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";
import like from "./assets/like.svg";
import dislike from "./assets/dislike.svg";
import share from "./assets/share.svg";
import report from "./assets/report.svg";

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
          <span className={styles.date}><span>4</span> ساعت پیش</span>
        </div>
        <p className={styles.text}>
          چیییییییییی آفرین به خانم دارابی مثل اینکه هم گروهیاتو کچل نکردی اونا
          کچلت کردن
        </p>
        <div className={styles.icons}>
          <div className={styles.likes_dislikes}>
            <span className={styles.likes_count} >14</span>
            <img src={like} className={styles.like_icon} alt="" />
            <span className={styles.dislikes_count} >1</span>
            <img src={dislike} className={styles.dislike_icon} alt="" />
          </div>
          <div className={styles.share_report}>
          <img src={share} className={styles.share_icon} alt="" />
          <img src={report} className={styles.report_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
