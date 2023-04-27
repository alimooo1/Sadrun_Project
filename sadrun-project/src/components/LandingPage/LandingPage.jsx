import React from "react";
import styles from "./LandingPage.module.scss";
import header1 from "./landingPageImages/header1x.svg";
import header2 from "./landingPageImages/header2.svg";
import girlDesk from "./landingPageImages/girlDesk.svg";
import LandingNav from "./LandingNav/LandingNav";

// import landingBackGround from './landingPageImages/landingBackgroundImage.svg'
const LandingPage = () => {
  return (
    <div className={styles.container}>
      <LandingNav />
      <img className={styles.header1} src={header1} alt="" />
      <img className={styles.header2} src={header2} alt="" />
      <div className={styles.header}>
        <div>
          <h1 className={styles.headertitle}>پژوهشگاه سپهر</h1>
          <p className={styles.headertext}>
            پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت اموزشی و همچنین
            آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم
            بتوانیم با راه کار های نوین و استفاده از پتانسیل فضای مجازی ایجاد
            فرصت کنیم برای افرادی که خواهان پیشرفت خود و کشورشان هستند
          </p>
          <button className={styles.headerbutton}>شروع یادگیری</button>
        </div>
        <img className={styles.girlDesk} src={girlDesk} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
