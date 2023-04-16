import React, { useState } from "react";
import "../../sass/fonts.scss";
import styles from "./Edit_Profile.module.scss";
import user_image from "./image/photo_2020-11-1-mdpi.png";
import Edit_Profile_input from "./Edit_Profile_input/Edit_Profile_input";
import axios from 'axios'
async function data(){
  try {
    const datas= axios.get("http://185.94.96.76:8082/api/auth/login")
    console.log(datas);
    
  } catch (error) {
    console.log(error);
  }
}
const inputList = [
  {
    text: "نام کاربری",
  },
  {
    text: "رمز عبور ",
  },
  {
    text: "ایمیل",
  },
  {
    text: "کد ملی ",
  },
  {
    text: "تاریخ تولد ",
  },
  {
    text: "شماره همراه ",
  },
];

function Edit_Profile() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.userImage_Conteiner}>
        <img className={styles.user_image} src={user_image} alt="" />
      </div>
      <div className={styles.formConteiner}>
        <form className={styles.form} action="">
          {inputList.map((edit,index ) => {
            return <Edit_Profile_input key={index} edit={edit} />;
          })}
        </form>
      </div>
    </div>
  );
}

export default Edit_Profile;
