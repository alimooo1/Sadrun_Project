import React from 'react'
import styles from "../Creat article card/CreateArticleCard.module.css"
import EGrP from "../Creat article card/images/1_EGrPBUoYfKm-2.png"
import angular from "../Creat article card/images/angular-8-new-f.png"
import VKE from "../Creat article card/images/VKE8r0.png"
import visual from "./images/visual-studio-logo.png"
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
                  {/* <div className={styles.news_item}>
                      <img src={angular} alt="a" className={styles.image_article} />
                      <p>آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p>
                  </div> */}
                  <Article_cards/>
                  <hr/>
                  <div className={styles.news_item}>
                       <img src={EGrP} alt="a" className={styles.image_article} />
                      <p>آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p> 
                      
                  </div>
                  <hr/>
                  <div className={styles.news_item}>
                      <img src={VKE} alt="a" className={styles.image_article} />
                      <p>آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p>
                  </div>
                  <button className={styles.btn}>بیشتر</button>
                  
          </div>
  
          <div className={styles.articles}>
                  <p className={styles.articles_title}>مقالات</p>
                  <div className={styles.articles_item}>
                      <img src={visual} alt="d" className={styles.image_article}/>
                      <p>بیست وبسایت برتر در زمینه عکس ها و آیکون های رایگان</p>
                  </div>
                  <hr/>
                  <div className={styles.articles_item}>
                      <img src={EGrP} alt="d" className={styles.image_article}/>
                      <p>بیست وبسایت برتر در زمینه عکس ها و آیکون های رایگان</p>
                  </div>
                  <hr/>
                  <div className={styles.articles_item}>
                      <img src={angular} alt="d"className={styles.image_article}/>
                      <p>بیست وبسایت برتر در زمینه عکس ها و آیکون های رایگان</p>
                  </div>
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