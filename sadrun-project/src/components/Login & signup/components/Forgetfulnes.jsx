import React from "react";
import white from "../assets/SVGs/new/white.svg";
import forget from "../assets/SVGs/new/forget.svg";
import lock1 from "../assets/SVGs/lock1.svg";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import styles from "./forget.module.scss";

const Forgetfulnes = () => {
  return (
    <div className={styles.container}>
      <img className={styles.white} src={white} alt="" />
      <img className={styles.forget} src={forget} alt="" />
      {/* <div className="bg-gradient-to-r from-[#9F0099] to-[#68008C] flex justify-center items-center"> */}
        <div className={styles.box_lock}>
          <div className={styles.lockHeader}>
            <img className={styles.lock1} src={lock1} alt="login" />
            <sapn className={styles.textHeader}> فراموشی رمز عبور</sapn>
          </div>

          <div className={styles.input_botton}>
            <input className={styles.input} placeholder=" ایمیل" type="email" />
            <Button className={styles.btn} buttonType={"form-sign-up-button"}>
              {" "}
              ادامه
            </Button>
          </div>

          <div className={styles.footer}>
            <Link className={styles.link} to="/login">
              {" "}
              ورود
            </Link>
            <p className={styles.p}>|</p>
            <Link className={styles.link} to="/signup">
              {" "}
              ثبت نام
            </Link>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Forgetfulnes;
