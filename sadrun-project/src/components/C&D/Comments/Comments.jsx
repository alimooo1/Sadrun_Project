import React from "react";
import { useState } from "react";
import "../../../sass/fonts.scss";
import styles from "./style.module.scss";
import SingleComment from "./SingleComment/SingleComment";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";

const Comments = () => {
  const [comments, setComments] = useState([
    {
      name: "استاد بحر",
      timeNum: "4",
      timeText: "ساعت پیش",
      mainText:
        "چیییییییییی آفرین به خانم دارابی مثل اینکه هم گروهیاتو کچل نکردی اونا کچلت کردن    ",
      pic: person1,
      likes: 14,
      dislikes: 2,
    },
    {
      name: "استاد نظری",
      timeNum: "6",
      timeText: "ساعت پیش",
      mainText:
        "به به چه دیزاین زیبایی, دست دیزاینرتون درد نکنه,خیلی خیلی زیبا شده , به به به به",
      pic: person2,
      likes: 14,
      dislikes: 2,
    },
    {
      name: "استاد نظری",
      timeNum: "6",
      timeText: "ساعت پیش",
      mainText:
        "به به چه دیزاین زیبایی, دست دیزاینرتون درد نکنه,خیلی خیلی زیبا شده , به به به به",
      pic: person2,
      likes: 14,
      dislikes: 2,
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.comments_container}>
        {comments.map((comment, index) => {
          return <SingleComment comment={comment} key={index} />;
        })}
      </div>
      <textarea
        name="comment_input"
        className={styles.comment_input}
        rows="5"
        placeholder="نوشتن پیام ..."
      ></textarea>
      <button className={styles.button}>ارسال متن</button>
    </div>
  );
};

export default Comments;
