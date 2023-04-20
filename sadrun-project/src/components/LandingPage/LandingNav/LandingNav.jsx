import React from "react";
import styles from "./LandingNav.module.scss";
import avatar from "./navigation-image/avatar.svg";
import LeftSideNavigation from "../leftSideNavigation/LeftSideNavigation";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

BiMenu;
const LandingNav = (props) => {
  // nav display state
  const [openMenu, setOpenMenu] = useState(false);
  const addMenuHandller = () => {
    setOpenMenu(true);
  };

  return (
    <div className={`${styles.navigation}`}>
      {/* <div class="navigation-logo"><a href="#"> <img src={avatar} alt="avatar" /></a></div> */}
      <nav>
        <div className={styles.navigationLogo}>
          <a href="#">
            {" "}
            <img src={avatar} alt="avatar" />
          </a>
        </div>

        <div className={styles.navigationIcon}>
          <a href="#">
            {" "}
            <BiMenu
              onClick={addMenuHandller}
              className={styles.navigationIcon}
            />
          </a>
        </div>
        <ul className={styles.navigationItems}>
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
