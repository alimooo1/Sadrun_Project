import React from 'react'
import styles from './TAbleRow.module.scss';
const TAbleRow = (props) => {
    return (
        <div className={styles.tableRow}>
            <ul className={styles.courseItems}>
                <li className={styles.courseImage}></li>
                <li className={styles.courseName}></li>
                <li className={styles.courseSeasonName}></li>
                <li className={styles.courseStartDate}></li>
                <li></li>
                <li className={styles.coursePrice} ></li>
                <li></li>
            </ul>
        </div>
    )
}

export default TAbleRow
