import React from "react";
import styles from "../ShoppingCarts/ShoppingCarts.module.scss";
import { BsTrash3 } from "react-icons/bs";
function ShoppingCarts(props) {
  return (
    <div className={styles.conteiner}>
      <div className={styles.boxone}>
        <img className={styles.img_cart} src={props.data.image} alt="" />
        <p>{props.data.text}</p>
      </div>
      <div className={styles.boxtwo}>
        <div className={styles.boxthree}>
          <span className={styles.price}>{props.data.price}</span>
          <span>تومان</span>
        </div>
        <BsTrash3 onClick={props.ondelete} className={styles.trash} />
      </div>
    </div>
  );
}

export default ShoppingCarts;
