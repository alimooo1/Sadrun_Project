import React from 'react'
import styles from "../LeftSideNavigation.module.scss";
import { Link } from 'react-router-dom';
const NavBtn = (props) => {
  return (
    <div>
    <Link to={props.to}>
      <button {...props} className={`${styles.button} ${props.className}`}>
        {props.btnTitle}
      </button>
    </Link>
    </div>
  );
};

export default NavBtn
