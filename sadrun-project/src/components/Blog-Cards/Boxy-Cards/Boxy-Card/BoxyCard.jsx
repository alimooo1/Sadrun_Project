import React from "react";
import "../../../../sass/fonts.scss"
import styles from "./BoxyCard.module.scss";
import categoryPin from "../images/category-pin.svg"

function BoxyCard({ imageSRC, title, description, category }) {
    return <div className={styles.boxyCard}>
        <img src={imageSRC} className={styles.cardImage} alt="" />
        <h4 className={styles.cardTitle}>{title}</h4>
        <h6 className={styles.cardDetails}>{description}</h6>
        <div className={styles.bottomPart}>
            <span className={styles.cardCategory}>
                <img src={categoryPin} alt="" />
                {category}</span>
            <button className={styles.cardButton}>ادامه مطلب</button>
        </div>
    </div>;
}

export default BoxyCard;