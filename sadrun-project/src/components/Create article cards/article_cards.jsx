import React from "react";
import EGrP from "../Creat article card/images/1_EGrPBUoYfKm-2.png";
import styles from "../Create article cards/article_cards.module.css";
function Article_cards() {
  return (
    <div className={styles.news_item}>
      <div className={styles.image_article}>
        <img src={EGrP} alt="acda" />
      </div>
      <p>آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p>
    </div>
  );
}

export default Article_cards;
