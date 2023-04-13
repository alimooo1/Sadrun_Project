import React from 'react'
import styles from './NavBtn.module.scss';
const NavBtn = (props) => {
    return (
        <div>
            <button className={props.className}>{props.btnTitle}</button>
        </div>
    )
}

export default NavBtn
