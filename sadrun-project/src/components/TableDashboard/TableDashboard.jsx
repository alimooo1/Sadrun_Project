import React from 'react'
import styles from './TableDashboard.module.scss';
import TableRow from './TableRow/TableRow';
import courseImage from './images/testImage.svg';
const TableDashboard = () => {


    const courses = [
        {
            id: Math.floor(Math.random()),
            src: courseImage,
            courseName: 'maryam',
            courseMentorsName: 'ali',
            courseSeasonName: 'bahar',
            courseStartDate: 'today',
            courseEndDate: 'tomorrow',
            coursePrice: '5000'
        },
        {
            id: Math.floor(Math.random()),
            src: courseImage,
            courseName: 'maryam',
            courseMentorsName: 'ali',
            courseSeasonName: 'bahar',
            courseStartDate: 'today',
            courseEndDate: 'tomorrow',
            coursePrice: '5000'
        },
        {
            id: Math.floor(Math.random()),
            src: courseImage,
            courseName: 'maryam',
            courseMentorsName: 'ali',
            courseSeasonName: 'bahar',
            courseStartDate: 'today',
            courseEndDate: 'tomorrow',
            coursePrice: '5000'
        },
        {
            id: Math.floor(Math.random()),
            src: courseImage,
            courseName: 'maryam',
            courseMentorsName: 'ali',
            courseSeasonName: 'bahar',
            courseStartDate: 'today',
            courseEndDate: 'tomorrow',
            coursePrice: '5000'
        },
        {
            id: Math.floor(Math.random()),
            src: courseImage,
            courseName: 'maryam',
            courseMentorsName: 'ali',
            courseSeasonName: 'bahar',
            courseStartDate: 'today',
            courseEndDate: 'tomorrow',
            coursePrice: '5000'
        },
        {
            id: Math.floor(Math.random()),
            src: courseImage,
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
            <div className={styles.tablrRowTitle}>
                <ul className={styles.courseItemsTitle}>
                <li></li>
                <li >نام دوره </li>
                <li>نام استاد</li>
                <li>نام ترم </li>
                <li>تاریخ شروع</li>
                <li>تاریخ پایان</li>
                <li>قیمت </li>
                </ul>  
            </div>

            {
                courses.map(courseItem => {
                    return (

                        <TableRow className={styles.courseItems} key={courseItem.id} courseImage={courseItem.src} courseName={courseItem.courseName} courseMentorsName={courseItem.courseMentorsName} courseSeasonName={courseItem.courseSeasonName} courseStartDate={courseItem.courseStartDate} courseEndDate={courseItem.courseEndDate} coursePrice={courseItem.coursePrice} />

                    )
                })
            }

        </div>
    )
}

export default TableDashboard
