import React  from 'react';
// import styles from "./CourseCard.module.scss";
// import banner from "./img/banner.svg";
// import star   from "./img/star.svg";
// import icon   from "./img/icon.svg";
// import star from "../StarRating/StarRating";


const propTypes = {};
const defaultProps = {};

const CourseCard = () => {
    return <div className={styles.container}>

        <div className={styles.card}>

            <img src={banner} alt="banner" className={styles.img}/>

            <p className={styles.title}>دوره آموزشی  نست جی اس</p>

            <div className={styles.information}>

                <div className={styles.information_right}>

                    <p className={styles.teacher_name}>استاد بحرالعلوم</p>

                    <div className={styles.div_star}>


                        
                       
                        <div>

                            {/* <star/> */}

                        </div>
                        
                       
                        <p className={styles.text_star}>(99,313)</p>

                    </div>

                    <div className={styles.div_price}>

                        <p className={styles.price}>2498000</p>
                        <p className={styles.currency}>تومان</p>

                    </div>

                </div>

                <div className={styles.information_left}>

                    <div className={styles.elements}>
                        <img src={icon} alt="icon" className={styles.icon}/>
                    </div>

                    <div className={styles.elements}>
                        <p className={styles.number1}>50</p>
                    </div>

                    <div className={styles.elements}>
                        <p className={styles.number2}>34</p>
                    </div>

                </div>

            </div>

        </div>

    </div>;
}


export default CourseCard;

