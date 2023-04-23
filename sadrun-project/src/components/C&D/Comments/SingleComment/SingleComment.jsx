import React from "react";
import "../../../../sass/fonts.scss";
import styles from "./style.module.scss";
import like from "./assets/like.svg";
import dislike from "./assets/dislike.svg";
import ReportIcon from './assets/icon-components/report';
import ShareIcon from './assets/icon-components/share';


const SingleComment = ({comment}) => {
  return (
    <div className={styles.single_comment}>
      <img src={`${comment.pic}`} className={styles.profile_pic} alt="" />
      <div className={styles.content}>
        <div className={styles.shape}>
          <div></div>
        </div>
        <div className={styles.title}>
          <span className={styles.name}>{comment.name}</span>
          <span className={styles.date}><span>{comment.timeNum}</span>{comment.timeText}</span>
        </div>
        <p className={styles.text}>
          {comment.mainText}
        </p>
        <div className={styles.icons}>
          <div className={styles.likes_dislikes}>
            <span className={styles.likes_count} >{comment.likes}</span>
            <img src={like} className={styles.like_icon} alt="" />
            <span className={styles.dislikes_count} >{comment.dislikes}</span>
            <img src={dislike} className={styles.dislike_icon} alt="" />
          </div>
          <div className={styles.share_report}>
          <ReportIcon/>
          <ShareIcon/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
