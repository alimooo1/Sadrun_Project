import React from "react";
import { Link } from "react-router-dom";
import white from "../assets/SVGs/new/white.svg";
import login from "../assets/SVGs/new/login.svg";
import loginS from "../assets/SVGs/loginS.svg";
import Button from "../components/button/Button";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <img className={styles.white} src={white} alt="" />
      <img className={styles.login} src={login} alt="" />

      <div className={styles.boxLogin}>
        <div className={styles.boxHeader}>
          <img src={loginS} alt="login" />
          <sapn className={styles.textHeader}> ورود</sapn>
        </div>

        <div className={styles.inputs}>
          <input
            className={styles.input}
            placeholder="نام کاربری"
            type="text"
          />
          <input
            className={styles.input}
            placeholder="رمز ورود"
            type="password"
          />

          <div className={styles.checkbox_parent}>
            <input id="chekbox" className={styles.checkbox} type="checkbox" />
            <label for="chekbox" className={styles.checkbox_text}>
              مرا به خاطر بسپار
            </label>
          </div>
        </div>

        <div className={styles.footer}>
          <Button className={styles.btn} buttonType={"form-sign-up-button"}>
            {" "}
            ورود
          </Button>
          <Link className={styles.forget} to="/Forget">
            فراموشی رمز عبور
          </Link>
          <span>
            برای ثبت نام{" "}
            <Link className={styles.signup} to="/signup">
              {" "}
              اینجا
            </Link>{" "}
            کلیک کنید
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
