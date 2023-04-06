import React from 'react'
import styles from "../components/CreatTeacherCard.module.css"
import teacher1 from "../components/images/teacher1.png"
import teacher2 from "../components/images/teacher2.png"
import teacher3 from "../components/images/teacher3.png"
import teacher4 from "../components/images/teacher4.png"
import icon from "../components/images/12121212.svg"
import path from "./images/Path 563.svg"




function CreatTeacherCard() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>اساتید برتر</h2>
            <p> استادای مهربون و دوستداشتنی</p>
            <p>نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) 
                یک محیط اجراییِ سمت سرورِ
                 متن‌باز و چندسکویی برای زبان جاوااسکریپت است.</p>
        </div>
        <div className={styles.teacher_item}>
            <img className={styles.teacher_imag} src={teacher1} alt="" />
            <div className={styles.teacher_text}>
                <h2>دکتر بحر العلوم</h2>
            <p>مدیریت</p>
            <p>مدرس در آموزشگاه  , مدرس در دانشگاه علم و
                 فناوری مازندران مستقر در 
                بهشهر , مدرس دوره های وب</p>
            </div>
            
            
           <div>
                <div className={styles.icon_path} >
                <img className={styles.icon} src={icon} alt="" />
                <img className={styles.path}  src={path} alt="" />
                </div>
        </div>

        </div>

         
        <div className={styles.teachrs}>
            <div className={styles.teachers_item}>
                <img src={teacher2} alt="" />
                <div>
                    <p>حامد نظری</p>
                    <p>طراح فرانت</p>
                </div>
            </div>
            <div className={styles.teachers_item}>
                <img src={teacher3} alt="" />
                <div>
                    <p>حامد نظری</p>
                    <p>طراح فرانت</p>
                </div>
            </div>
            <div className={styles.teachers_item}>
                <img src={teacher4} alt="" />
                <div>
                    <p>حامد نظری</p>
                    <p>طراح فرانت</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CreatTeacherCard