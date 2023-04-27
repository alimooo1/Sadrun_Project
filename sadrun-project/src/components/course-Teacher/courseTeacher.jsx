import React from 'react'
import icon_teacher from "../course-Teacher/images/icons8-teacher-50.svg"
import imageTeacher from "../course-Teacher/images/photo_2018-03-2.png"
import styles from "../course-Teacher/courseTeache.module.scss"
function CourseTeacher() {
  return (
    <div className={styles.container}>

        <div className={styles.padding}>

        <div className={styles.title}>
            <h2> مدرس</h2>
            <img src={icon_teacher} alt="icon" className={styles.icon_teacher} />
        </div>

        <div className={styles.teacher_information}> 
            <img src={imageTeacher} alt="picture_teacher" />
            <span>استاد بحرالعلوم</span>
        </div>

        <div className={styles.relation}>
            <p>راه های ارتباطی</p>
            <div className={styles.relation_item}>
                <span>آدرس ایمیل</span>
                <span>bahroolom@gmail.com</span>
             </div>

            <div className={styles.relation_item}>
                <span>اینستاگرام</span>
                <span>bahr_ac</span>
            </div>
            

        </div>
      </div>
    </div>
  
  )
}

export default CourseTeacher