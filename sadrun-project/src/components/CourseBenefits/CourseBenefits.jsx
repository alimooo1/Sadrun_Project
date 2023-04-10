import React from 'react'
import tickIcon from './image/icons8-tick-box.png'
import styles from './CourseBenefits.module.scss'
const CourseBenefits = () => {
    return (
        <div className={styles.benefitsCountainer}>
            <h2>مزایای شرکت در این دوره</h2>
            <ul className={styles.benefitsList}>
                <li>
                    <span className={styles.itemText}>ارتباط مستقیم با مدرس</span>
                    <img className={styles.icon} src={tickIcon} alt="tickIcon" />
                </li>
                <li>
                    <span className={styles.itemText}>ساخت رزومه مناسب برای بازار کار</span>
                    <img className={styles.icon} src={tickIcon} alt="tickIcon" />
                </li>
                <li>
                    <span className={styles.itemText}>معرفی به بهترین شرکت ها</span>
                    <img className={styles.icon} src={tickIcon} alt="tickIcon" />
                </li>
            </ul>
        </div>
    )
}
export default CourseBenefits
