import React from "react";
import styles from "../ShoppingCarts/ShoppingCarts.module.scss";
import angular from "../images/angular-8-new-f.png";
import trash from "../images/Zipak-Logo24-2.svg";
import { BsTrash3 } from "react-icons/bs";
function ShoppingCarts({ data }) {
  return (
    <div className={styles.conteiner}>
      <div className={styles.boxone}>
        <img className={styles.img_cart} src={angular} alt="" />
        <p>مدرس دوره: استاد بحر</p>
      </div>
      <div className={styles.boxtwo}>
        <div className={styles.boxthree} >
          <span>90000</span>
          <span>تومان</span>
        </div>
        <BsTrash3 className={styles.trash} onclick/>
      </div>
    </div>
  );
}

export default ShoppingCarts;
