
import icon from './CourseCapacity-image/courseCapacity-icon.svg'
import styles from './CourseCapacity.module.scss';

const CourseCapacity = () => {
    return (
        <div className={styles.capacityItems}>
            <div className={styles.capacityItem}>
                <p className={styles.capacityitemTitle} > ظرفیت </p>
                <img src={icon} alt="icon" />
            </div>
            <div className={styles.capacityItem}>
                <p className={styles.capacityItemTitle}>ظرفیت کل دوره </p>
                <span className={styles.capacityNumbers}>50</span>
            </div>
            <div className={styles.capacityItem}>
                <p className={styles.capacityItemTitle}>تعداد دانشجوی دوره</p>
                <span className={styles.capacityStudentsNumbers} >50</span>
            </div>
        </div>

    )
}

export default CourseCapacity
