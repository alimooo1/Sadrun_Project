import React from "react";
import "../../sass/fonts.scss"
import styles from "../Create article cards/article_cards.module.scss";
import EGrP from "../Creat article card/images/1_EGrPBUoYfKm-2.png";
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
