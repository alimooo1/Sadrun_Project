import React from 'react';
import styles from "./Dashboard.module.scss";
import profile from "./img/profile.svg";
import icon1 from "./img/icon1.svg";
import icon2 from "./img/icon2.svg";
import icon3 from "./img/icon3.svg";
import icon4 from "./img/icon4.svg";
import icon5 from "./img/icon5.svg";

const propTypes = {};
const defaultProps = {};

const dashboard = () => {
    return <div className={styles.container}>

        <div className={styles.dashboard}>

            <div className={styles.top}>
                <img src={profile} alt="profile" />
                <p className={styles.username}>زهرا چلوئی دارابی</p>
            </div>

            <div className="down">

                <div className={styles.row}>
                    <img src={icon1} alt="icon" className={styles.icon}/>
                    <p className={styles.text}>پیشخوان</p>
                </div>

                <div className={styles.row}>
                    <img src={icon2} alt="icon" className={styles.icon}/>
                    <p className={styles.text}>ویرایش پروفایل</p>
                </div>

                <div className={styles.row}>
                    <img src={icon3} alt="icon" className={styles.icon}/>
                    <p className={styles.text}>دوره های من</p>
                </div>

                <div className={styles.row}>
                    <img src={icon4} alt="icon" className={styles.icon}/>
                    <p className={styles.text2}>لیست دوره ها</p>
                </div>

                <div className={styles.row}>
                    <img src={icon5} alt="icon" className={styles.icon}/>
                    <p className={styles.text}>خروج</p>
                </div>

            </div>

        </div>

    </div>;
}




export default dashboard;
