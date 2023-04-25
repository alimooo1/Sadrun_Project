import React,{useState} from 'react'
import styles from "../ShoppingCart/ShoppingCart.module.scss"
import ShoppingCarts from './ShoppingCarts/ShoppingCarts'
function ShoppingCart() {
    const [cart, setCart] = useState([{
        image:"",
        text:"مدرس دوره: استاد بحر ",
        price:"تومان290",
    }],)
    
  return (
    // cart.map((data ,index)=>{

    //     <div className={styles.conteiner} >
    //     <ShoppingCarts date={data} key={index} />

    // </div>
    // })
    <div className={styles.border}>
         <div className={styles.conteiner}>
        <ShoppingCarts/>
        <ShoppingCarts/>
        <ShoppingCarts/>
        <ShoppingCarts/>

    </div>
    </div>
   
    
    
  )
}

export default ShoppingCart