import React from 'react'
import styles from './TableDashboard.module.scss';
import TableRow from './TableRow/TableRow';
const TableDashboard = () => {


    const courses = [
        {
            id: Math.floor(Math.random()),
            courseImage: 2,
            courseName: 'maryam',
            courseMentorsName: 'ali',
            courseSeasonName: 'bahar',
            courseStartDate: 'today',
            courseEndDate: 'tomorrow',
            coursePrice: '5000'
        },
        {
            id: Math.floor(Math.random()),
            courseImage: 2,
            courseName: 'maryam',
            courseMentorsName: 'ali',
            courseSeasonName: 'bahar',
            courseStartDate: 'today',
            courseEndDate: 'tomorrow',
            coursePrice: '5000'
        },
        {
            id: Math.floor(Math.random()),
            courseImage: 2,
            courseName: 'maryam',
            courseMentorsName: 'ali',
            courseSeasonName: 'bahar',
            courseStartDate: 'today',
            courseEndDate: 'tomorrow',
            coursePrice: '5000'
        },
    ]
    return (
        <div className={styles.tableCountainer}>
            <ul className={styles.courseItemsTitle}>
                <li></li>
                <li >نام دوره </li>
                <li>نام استاد</li>
                <li>نام ترم </li>
                <li>تاریخ شروع</li>
                <li>تاریخ پایان</li>
                <li>قیمت </li>
            </ul>
            {
                courses.map(courseItem => {
                    return (

                        <TableRow className={styles.courseItems} key={courseItem.id} courseImage={courseItem.courseImage} courseName={courseItem.courseName} courseMentorsName={courseItem.courseMentorsName} courseSeasonName={courseItem.courseSeasonName} courseStartDate={courseItem.courseStartDate} courseEndDate={courseItem.courseEndDate} coursePrice={courseItem.coursePrice} />

                    )
                })
            }

        </div>
    )
}

export default TableDashboard
