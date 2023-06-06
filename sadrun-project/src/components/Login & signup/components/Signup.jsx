import React from 'react';
import lock from '../assets/SVGs/lock.svg'
import Signupform from '../components/Signupform.jsx'
import styles from './signup.module.scss'

const Signup = () => {
    return (
        <div className={styles.container}>
            <img className={styles.signup}  src={lock} alt="lock" />
            <div className={styles.parentBox}>

                    <Signupform  />

            </div>
        </div>
    );
};

export default Signup;