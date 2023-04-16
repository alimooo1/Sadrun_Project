import React from "react";
import styles from "./LandingNav.module.scss";
import avatar from "./navigation-image/avatar.svg";
import LeftSideNavigation from "../leftSideNavigation/LeftSideNavigation";
const LandingNav = (props) => {
  return (
    <div className={`${styles.navigation}$}${props.class}`}>
      {/* <div class="navigation-logo"><a href="#"> <img src={avatar} alt="avatar" /></a></div> */}
      <nav>
        <ul className={styles.navigationItems}>
          <div class="navigation-logo">
            <a href="#">
              {" "}
              <img src={avatar} alt="avatar" />
            </a>
          </div>
          <li className={styles.navigationItem}>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">آموزش</a>
          </li>
          <li>
            <a href="#">بلاگ</a>
          </li>
          <li>
            <a href="#">خدمات</a>
          </li>
          <li>
            <a href="#">دوره ها </a>
          </li>
          <li>
            <a href="#">تماس با ما </a>
          </li>
        </ul>
      </nav>
      <LeftSideNavigation />
    </div>
  );
};

export default LandingNav;
