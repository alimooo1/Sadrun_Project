import React from "react";
import "../../sass/fonts.scss";
import styles from "./style.module.scss";
import graph from "./assets/footer_graph.svg";
import eNamad_1 from "./assets/enamad-2.png";
import eNamad_2 from "./assets/enamad-1.png";
import facebook_logo from "./assets/facebook.svg";
import instagram_logo from "./assets/instagram.svg";
import telegram_logo from "./assets/telegram.svg";
import twitter_logo from "./assets/twitter.svg";
import youtube_logo from "./assets/youtube.svg";

export default function Footer() {
  return (
    <div
      className={styles.footer}
      onDrag={(e) => {
        e.preventDefault();
      }}
      
    >
      <div className={styles.graph}>
        <img src={graph} alt="" />
      </div>
      <div className={styles.row}>
        <div className={styles.info}>
          <div className={styles.about_us}>
            <span>بلاگ</span>
            <span>درباره ما</span>
            <span>تماس با ما</span>
            <span>همکاری با ما</span>
            <span>سوالات متداول</span>
          </div>
          <div className={styles.contact_us}>
            <span>شماره تماس</span>
            <span className={styles.phone_num}>+98912123456</span>
            <span className={styles.phone_num}>+98912123456</span>
          </div>
        </div>
        <div className={styles.follow_us_container}>
          <div className={styles.follow_us_logos}>
            <img src={youtube_logo} alt="youtube_logo" />
            <img src={instagram_logo} alt="instagram_logo" />
            <img src={telegram_logo} alt="telegram_logo" />
            <img src={facebook_logo} alt="facebook_logo" />
            <img src={twitter_logo} alt="twitter_logo" />
          </div>
          <span className={styles.follow_us_text}>
            ما را در شبکه های اجتماعی دنبال کنید
          </span>
        </div>
        <div className={styles.enamad_pic}>
          <img src={eNamad_1} alt="" />
          <img src={eNamad_2} alt="" />
        </div>
      </div>
    </div>
  );
}
