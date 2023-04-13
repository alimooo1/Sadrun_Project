import React from 'react'
import styles from "../Creat article card/CreateArticleCard.module.css"
import heIcon from "./images/heicon.svg"
import sheIcon from "./images/sheicon.svg"
import Article_cards from '../Create article cards/article_cards'

function CreateArticleCard() {
    return (
        
      <div className={styles.conteiner} >   
            <div className={styles.head} >
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
                  <p className={styles.news_title} >اخبار</p>
                        <Article_cards/>
                  <hr/>
                        <Article_cards/>
                  <hr/>
                        <Article_cards/>
                  <button className={styles.btn}>بیشتر</button>
                  
          </div>
  
          <div className={styles.articles}>
                  <p className={styles.articles_title}>مقالات</p>
                        <Article_cards/>
                  <hr/>
                        <Article_cards/>
                  <hr/>
                        <Article_cards/>
                  <button className={styles.btn}>بیشتر</button>
          </div>
        </div>
        <div className={styles.Newsletters}>
            <input className={styles.add_Newsletters} type="email" placeholder='عضویت در خبرنامه:' />
        </div>
      </div>
    )
  }
  
  export default CreateArticleCard