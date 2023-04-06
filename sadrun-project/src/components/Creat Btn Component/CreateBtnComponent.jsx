import React from 'react'
import { FaShoppingCart,FaSearch } from "react-icons/fa";
import styles from "../Creat Btn Component/CreateBtnComponent.module.css"
function CreateBtnComponent() {
  return (
    <div className={styles.conteiner} >
      <button className={styles.search}><FaSearch/></button>
      <button className={styles.register}>ثبت نام</button>
      <button className={styles.login}>ورود</button>
      <button className={styles.shopping_cart}><FaShoppingCart/></button>
      

    </div>
  )
}

export default CreateBtnComponent
