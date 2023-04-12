import React from 'react'
import styles from './TableRow.module.scss';
const TAbleRow = (props) => {
    return (
        <div className={styles.tableRow}>
            <ul className={styles.courseItems}>
                <li >{props.courseImage}</li>
                <li >{props.courseName}</li>
                <li >{props.courseMentorsName}</li>
                <li >{props.courseSeasonName}</li>
                <li >{props.courseStartDate}</li>
                <li >{props.courseEndDate}</li>
                <li >{props.coursePrice}</li>
            </ul>
        </div>
    )
}

export default TAbleRow
// 