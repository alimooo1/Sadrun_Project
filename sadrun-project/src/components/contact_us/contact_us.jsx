import React from 'react'
import "../../sass/fonts.scss"
import styles from "./contact_us.module.scss"
import phone from "./image/phone-80-mdpi.svg"
import massege from "./image/Message-Free-Ic-mdpi.svg"
import clock from "./image/icons8-clock-24.svg"
import map from "./image/icons8-address-24.svg"




function Contact_us() {
  return (
    <div className={styles.conteiner}>
        <div className={styles.informatinoBox}>
            <div className={styles.informatino_conteiner} >
            <div className={styles.informatino}>
                <img className={styles.informatino_img} src={phone} alt="" />
                <div className={styles.informatino_text}>
                   <p>تماس بگیرید</p>
                   <p>09334568345</p> 
                </div>
            </div>
            <div className={styles.informatino}>
                <img className={styles.informatino_img}  src={massege} alt="" />
                <div className={styles.informatino_text}>
                   <p>مکاتبه ایمیلی</p>
                   <p>از طریق ایمیل  
zahracheloi@gmail.com</p> 
                </div>
            </div>
            <div className={styles.informatino}>
                <img className={styles.informatino_img} src={clock} alt="" />
                <div className={styles.informatino_text}>
                   <p>ساعت کاری</p>
                   <p>شنبه تا چهارشنبه 18 تا 20
پنجشنبه ها 8 تا 12</p> 
                </div>
            </div>
            <div className={styles.informatino}>
                <img className={styles.informatino_img} src={map} alt="" />
                <div className={styles.informatino_text}>
                   <p>نشانی</p>
                   <p>ساری خیابان 18 دی روبروی خیام</p> 
                </div>
            </div>
        </div>
        </div>
        

        <div className={styles.formBox}>
            <div className={styles.form_conteiner}>
                <p>تماس باما</p>
                <form className={styles.form} action="">
                    <input type="text"placeholder='نام و نام خانوادگی' />
                    <input type="email" placeholder='ایمیل' />
                    <input type="text"placeholder='شماره موبایل' />
                    <textarea name="" id="" cols="50" rows="6" placeholder='متن پیام'></textarea>
                    <button className={styles.btn}>ارسال پیام</button>
                </form>
            </div>
        </div>
            

        
    </div>
  )
}

export default Contact_us