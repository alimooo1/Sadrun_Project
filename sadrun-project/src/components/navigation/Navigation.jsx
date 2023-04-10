import React from 'react'
import styles from './Navigation.module.scss'
import avatar from './navigation-image/avatar.svg'
const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div class="navigation-logo"><a href="#"> <img src={avatar} alt="avatar" /></a></div>
            <nav>
                <ul className='navigation-items'>
                    <li className='navigation-item'><a href="#">خانه</a></li>
                    <li><a href="#">آموزش</a></li>
                    <li><a href="#">بلاگ</a></li>
                    <li><a href="#">خدمات</a></li>
                    <li><a href="#">دوره ها </a></li>
                    <li><a href="#">تماس با ما </a></li>
                </ul>
            </nav>
        </div>
    )
}


export default Navigation
