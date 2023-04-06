import React from 'react'
import styles from "../Creat article card/CreateArticleCard.module.css"
import EGrP from "../Creat article card/images/1_EGrPBUoYfKm-2.png"
import angular from "../Creat article card/images/angular-8-new-f.png"
import VKE from "../Creat article card/images/VKE8r0.png"
function CreateArticleCard() {
    return (
      <div className={styles.conteiner}>
          <div className={styles.news}>
                  <p className={styles.news_title} >اخبار</p>
                  <div className={styles.news_item}>
                      <img src={angular} alt="a" className={styles.image_article} />
                      <p>آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p>
                  </div>
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
                      <img src={VKE} alt="d" className={styles.image_article}/>
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
    )
  }
  
  export default CreateArticleCard