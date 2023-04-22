import React from "react";
import styles from "./PaymentDetails.module.scss";
import logo from "./PaymentDetailsImage/logo.svg";
import border from "./PaymentDetailsImage/borderDash.svg";

const PaymentItems = [
  {
    courseName: "دوره نکست جی اس مقدماتی از صفر تا صد",
    coursePrice: 90000,
  },
  {
    courseName: "دوره نکست جی اس مقدماتی از صفر تا صد",
    coursePrice: 90000,
  },
  {
    courseName: "دوره نکست جی اس مقدماتی از صفر تا صد",
    coursePrice: 90000,
  },
  {
    courseName: "دوره نکست جی اس مقدماتی از صفر تا صد",
    coursePrice: 90000,
  },
];

const PaymentDetails = () => {
  return (
    <div className={styles.paymentDetailsContainer}>
      <div className={styles.container}>
        <h2 className={styles.paymentTitle}>جزییات پرداخت</h2>
        <div className={styles.border}>
          <img src={border} alt="border" />
        </div>

        <ul className={styles.paymentDetailsItems}>
          {PaymentItems.map((item) => {
            return (
              <li className={styles.paymentDetailsItem}>
                <span>{item.courseName}</span>
                <span>{`${item.coursePrice.toLocaleString()}${" تومان"}`}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.border}>
          <img src={border} alt="border" />
        </div>
        <div className={styles.totalPriceItems}>
          <span className={styles.totalPriceText}>مبلغ قابل پرداخت </span>
          <span className={styles.totalPrice}>
            {PaymentItems.reduce((total, item) => {
              return total + item.coursePrice;
            }, 0).toLocaleString()}
            {" تومان"}
          </span>
        </div>
        <div className={styles.border}>
          <img src={border} alt="border" />
        </div>
        <div className={styles.zarrinPal}>
          <p className={styles.zarrinPalText}>پرداخت از طریق درگاه زرین پال</p>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={styles.siteTermsAcception}>
          <input
            type="checkbox"
            id="siteTermsAcception"
            value="siteTermsAcception"
          />
          <label htmlFor="siteTermsAcception">
            من شرایط و مقررات سایت را خوانده ام و آن را می پذیرم
          </label>
        </div>
        <div>
          <button className={styles.orderBtn}>ثبت سفارش</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
