import React from 'react';
import styles from './CheckoutCard.module.scss';
import line from "./img/line.svg";

const propTypes = {};
const defaultProps = {};

const CheckoutCard = ({price}) => {
    return <div className={styles.container}>

        <div className={styles.card}>

            <p className={styles.titel}>اطلاعات پرداخت</p>

            <img src={line} alt="" className={styles.line}/>


            <form action="" className={styles.form}>
                <input type="text" name="" id="" placeholder="کد تخفیف خود را وارد کنید"/>
                <button>اعمال تخفیف</button>
            </form>

            <img src={line} alt="" className={styles.line}/>

            <div className={styles.paymentInformatin1}>
                <p className={styles.payText}>جمع </p>

                <div className={styles.payNumber}>
                    <p className={styles.payNumber_p1}>{price}</p>
                    <p className={styles.payNumber_p2}>تومان</p>
                </div>

            </div>

            <div className={styles.paymentInformatin2}>
                <p className={styles.payText}>تخفیف</p>

                <div className={styles.payNumber}>
                    <p className={styles.payNumber_p1}>60,000</p>
                    <p className={styles.payNumber_p2}>تومان</p>
                </div>

            </div>

            <div className={styles.paymentInformatin3}>
                <p className={styles.payText}>مجموع کل</p>

                <div className={styles.payNumber}>
                    <p className={styles.payNumber_p1}>300,000</p>
                    <p className={styles.payNumber_p2}>تومان</p>
                </div>

            </div>

            <img src={line} alt="" className={styles.line}/>

            <div className={styles.paymentInformatin4}>
                <p className={styles.payText}>مبلغ قابل پرداخت</p>

                <div className={styles.payNumber}>
                    <p className={styles.payNumber_p3}>300,000</p>
                    <p className={styles.payNumber_p4}>تومان</p>
                </div>

            </div>

            <button className={styles.btn}>تکمیل فرایند خرید</button>




        </div>

    </div>;
}

export default CheckoutCard;