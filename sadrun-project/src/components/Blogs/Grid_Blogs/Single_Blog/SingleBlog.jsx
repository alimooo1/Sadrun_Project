import React from "react";
import "../../../../sass/fonts.scss";
import styles from "./style.module.scss";
import { AiFillTag } from "react-icons/ai";

export default function SingleBlog({ title, pic, tag, description }) {
  return (
    <div className={styles.singleBlog}>
      <img className={styles.poster} src={pic} />
      <div className={styles.about}>
        <span className={styles.title}>{title}</span>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.icon_box}>
          <AiFillTag color="#707070" size={15} />
          <span className={styles.icon_title}>{tag}</span>
        </div>
        <button className={styles.btn}>ادامه مطلب</button>
      </div>
    </div>
  );
}
