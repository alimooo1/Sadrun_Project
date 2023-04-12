import React from "react";
import "../../../sass/fonts.scss";
import styles from "./style.module.scss";
import SingleComment from "./SingleComment/SingleComment";

const Comments = () => {
  return (
    <div className={styles.comments_container}>
      <SingleComment />
    </div>
  );
};

export default Comments;
