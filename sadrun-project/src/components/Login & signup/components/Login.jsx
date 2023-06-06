import React from 'react';
import { Link } from 'react-router-dom';
import login from '../assets/SVGs/login.svg'
import loginS from '../assets/SVGs/loginS.svg'
import Button from "../components/button/Button";
import styles from './login.module.scss'

const Login = () => {
    return (
        <div className={styles.container}>

                <img className={styles.login} src={login} alt="login" />


                    <div className={styles.boxLogin}>

                        <div className={styles.boxHeader}>
                            <img src={loginS} alt="login" />
                            <sapn className={styles.textHeader}> ورود</sapn>
                        </div>

                        <div className={styles.inputs}>
                            <input className={styles.input} placeholder='نام کاربری' type="text" />
                            <input className={styles.input} placeholder='رمز ورود' type="password" />

                            <div className={styles.checkbox_parent}>
                                <input className={styles.checkbox} type="checkbox" />
                                <label className={styles.checkbox_text}>مرا به خاطر بسپار</label>
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <Button className={styles.btn} buttonType={"form-sign-up-button"}> ورود</Button>
                            <Link className={styles.forget} to='/Forget'>فراموشی رمز عبور</Link>
                            <span>برای ثبت نام <Link className={styles.signup} to='/signup'> اینجا</Link>  کلیک کنید</span>
                        </div>

                    </div>


        </div>
    );
};

export default Login;

