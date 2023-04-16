import React from "react";
import "../../sass/fonts.scss";
import styles from "./ArticleCard.module.scss";
import heIcon from "./images/heicon.svg";
import sheIcon from "./images/sheicon.svg";
import ArticleCards from "../ArticleCards/ArticleCards";

function CreateArticleCard() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.head}>
        <div className={styles.heIcon}>
          <img className={styles.heIcon_img} src={heIcon} alt="" />
        </div>
        <div className={styles.title}>
          <h2>اخبار و مقالات</h2>
        </div>
        <div className={styles.sheIcon}>
          <img className={styles.sheIcon_img} src={sheIcon} alt="" />
        </div>
      </div>

      <div className={styles.conteiner_Article}>
        <div className={styles.news}>
          <p className={styles.news_title}>اخبار</p>
          <ArticleCards />
          <hr />
          <ArticleCards />
          <hr />
          <ArticleCards />
          <button className={styles.btn}>بیشتر</button>
        </div>

        <div className={styles.articles}>
          <p className={styles.articles_title}>مقالات</p>
          <ArticleCards />
          <hr />
          <ArticleCards />
          <hr />
          <ArticleCards />
          <button className={styles.btn}>بیشتر</button>
        </div>
      </div>
      <div className={styles.Newsletters}>
        <input
          className={styles.add_Newsletters}
          type="email"
          placeholder="عضویت در خبرنامه:"
        />
      </div>
    </div>
  );
}

export default CreateArticleCard;
