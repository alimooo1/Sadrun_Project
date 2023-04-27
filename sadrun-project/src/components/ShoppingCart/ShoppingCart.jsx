import React, { useState } from "react";
import styles from "../ShoppingCart/ShoppingCart.module.scss";
import ShoppingCarts from "./ShoppingCarts/ShoppingCarts";
import angular from "./images/angular-8-new-f.png";
import nest from "./images/1_EGrPBUoYfKm-2.png";
import nodejs from "./images/VKE8r0.png";
import visule from "./images/visual-studio-logo.png";
function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      image: angular,
      teacher: "مدرس دوره: استاد بحر ",
      course: "دوره انگولار  صفر  تا صد",
      price: "520000",
      id: 1,
    },
    {
      image: nest,
      teacher: "مدرس دوره: استاد بحر ",
      course: "دوره  نست صفر  تا صد",
      price: "200000",
      id: 2,
    },
    {
      image: nodejs,
      teacher: "مدرس دوره: استاد بحر ",
      course: "دوره نود جی اس   صفر  تا صد",
      price: "110000",
      id: 3,
    },
    {
      image: visule,
      teacher: "مدرس دوره: استاد بحر ",
      course: "دوره ویژوال استودیو صفر  تا صد",
      price: "90000",
      id: 4,
    },
  ]);
  function deletHandeler(id) {
    const filterCart = cart.filter((c) => c.id !== id);
    setCart(filterCart);
  }
  if (cart.length === 0) {
    return (
      <div className={styles.conteiner}>
        <div className={styles.border}>
          <div className={styles.conteiner_cart}>
            مجصولی در سبد خرید وجود ندارد
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.conteiner}>
        <div className={styles.border}>
          <div className={styles.conteiner_cart}>
            {cart.map((data, index) => {
              return (
                <ShoppingCarts
                  data={data}
                  key={index}
                  ondelete={() => deletHandeler(data.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
