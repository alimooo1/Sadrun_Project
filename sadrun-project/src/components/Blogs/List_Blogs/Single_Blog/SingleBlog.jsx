import React from "react";
import "../../../../sass/fonts.scss";
import styles from "./style.module.scss";
import { AiFillTag } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SingleBlog({ title, description, pic, tag }) {
  return (
    <div className={styles.singleBlog}>
      <img className={styles.poster} src={pic} />

      <div className={styles.info}>
        <div className={styles.row}>
          <div className={styles.about}>
            <span className={styles.title}>{title}</span>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <div className={styles.tags}>
          <div className={styles.icon_box}>
            <AiFillTag color="#707070" size={17.5} />
            <span className={styles.icon_title}>{tag}</span>
          </div>
          <Link to="/single-blog" className={styles.btn}>
            ادامه مطلب
          </Link>
        </div>
      </div>
    </div>
  );
}
