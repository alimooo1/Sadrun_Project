import React from "react";
import purple from "../assets/SVGs/new/purple.svg";
import signUp from "../assets/SVGs/new/signUp.svg";
import Signupform from "../components/Signupform.jsx";
import styles from "./signup.module.scss";

const Signup = () => {
  return (
    <div className={styles.container}>
      <img className={styles.purple} src={purple} alt="" />
      <img className={styles.signup} src={signUp} alt="" />
      <Signupform />
    </div>
  );
};

export default Signup;
