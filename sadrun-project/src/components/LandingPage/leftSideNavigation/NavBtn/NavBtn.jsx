import React from 'react'
import styles from './NavBtn.module.scss';
const NavBtn = (props) => {
    return (
      <div>
        <button {...props}>{props.btnTitle}</button>
      </div>
    );
}

export default NavBtn
