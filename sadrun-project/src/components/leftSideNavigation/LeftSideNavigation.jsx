import React from 'react'
import styles from "../Creat Btn Component/CreateBtnComponent.module.css"
import shoppinIcon from "./image/Path 619.svg";
import searchIcon from "./image/Path 761.svg";

function CreateBtnComponent() {
    return (
        <div className={styles.conteiner} >

            <button className={styles.search}>
                <img className={styles.searchIcon} src={searchIcon} alt="" />
            </button>
            <button className={styles.login}>ورود</button>
            <button className={styles.register}>ثبت نام</button>
            <button className={styles.shopping_cart}>
                <img className={styles.shoppinIcon} src={shoppinIcon} alt="shoppinIcon" />
            </button>


        </div>
    )
}

export default CreateBtnComponent