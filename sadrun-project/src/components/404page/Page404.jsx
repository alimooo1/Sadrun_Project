import React from "react";
import styles from "./Page404.module.scss";
import icon404 from "./img/404.svg";

const propTypes = {};
const defaultProps = {};

const Page404 = () => {
  return (
    <div className={styles.container}>
      <img src={icon404} alt="img" className={styles.img} />
      <button className={styles.btn}>بازگشت به صفحه اصلی</button>
    </div>
  );
};

export default Page404;
