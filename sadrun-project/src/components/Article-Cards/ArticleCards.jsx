import React from "react";
import "../../sass/fonts.scss";
import styles from "./ArticleCards.module.scss";
import EGrP from "../Article-Card/images/1_EGrPBUoYfKm-2.png";
function ArticleCards() {
  return (
    <div className={styles.news_item}>
      <div className={styles.image_article}>
        <img src={EGrP} alt="acda" />
      </div>
      <p>آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p>
    </div>
  );
}

export default ArticleCards;
