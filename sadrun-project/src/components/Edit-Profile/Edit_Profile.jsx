import React from 'react'
import "../../sass/fonts.scss"
import styles from "./Edit_Profile.module.scss"
import Edite_icon from "./image/user-edit-svgre-mdpi.svg"
import user_image from "./image/photo_2020-11-1-mdpi.png"
function Edit_Profile() {
  return (
    <div className={styles.conteiner}>
            <div className={styles.userImage_Conteiner}>
                <img className={styles.user_image} src={user_image} alt="" />
            </div>
        <div className={styles.formConteiner} >

            <form  className={styles.form} action="">
                <div className={styles.conteiner_input}>
                    <label htmlFor="">نام کاربری</label>
                    <div>
                       <input type="text"  />
                       <img className={styles.editeIcon} src={Edite_icon} alt="" />
                    </div>
                    
                </div>
                <div className={styles.conteiner_input}>
                    <label htmlFor="">رمز عبور</label>
                    <div>
                      <input type="password" /> 
                      <img className={styles.editeIcon}  src={Edite_icon} alt="" />  
                    </div>
                </div>
                <div className={styles.conteiner_input}>
                    <label htmlFor=""> ایمیل</label>
                    <div>
                      <input type="email" />  
                      <img className={styles.editeIcon} src={Edite_icon} alt="" />  
                    </div>
                </div>
                <div className={styles.conteiner_input}>
                    <label htmlFor=""> کد ملی</label>
                    <div>
                      <input type="text" />  
                      <img className={styles.editeIcon} src={Edite_icon} alt="" />  
                    </div>
                </div>
                <div className={styles.conteiner_input}>
                    <label htmlFor=""> تاریخ تولد</label>
                    <div>
                      <input type="text" />  
                      <img className={styles.editeIcon} src={Edite_icon} alt="" />  
                    </div>
                </div>
                <div className={styles.conteiner_input}>
                    <label htmlFor="">شماره همراه</label>
                    <div>
                      <input type="text" />  
                      <img className={styles.editeIcon} src={Edite_icon} alt="" />  
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Edit_Profile