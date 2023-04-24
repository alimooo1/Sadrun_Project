import React from 'react'
import styles from "../LeftSideNavigation.module.scss";
const NavBtn = (props) => {
  return (
    <div>
      <button {...props} className={`${styles.button} ${props.className}`}>
        {props.btnTitle}
      </button>
    </div>
  );
};

export default NavBtn
