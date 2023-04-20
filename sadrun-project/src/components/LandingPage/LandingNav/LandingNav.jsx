import React from "react";
import styles from "./LandingNav.module.scss";
import avatar from "./navigation-image/avatar.svg";
import LeftSideNavigation from "../leftSideNavigation/LeftSideNavigation";
import { SlMenu, SlArrowRight } from "react-icons/sl";
import { useState } from "react";

const LandingNav = (props) => {
  // menu display state
  const [openMenu, setOpenMenu] = useState(false);
  const addMenuHandller = () => {
    setOpenMenu(!openMenu);
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
          {!openMenu && (
            <SlMenu
              onClick={addMenuHandller}
              className={styles.navigationIcon}
            />
          )}
          {openMenu && (
            <SlArrowRight
              onClick={addMenuHandller}
              fill="#5a0ba9"
              className={styles.navigationIcon}
            />
          )}
        </div>

        <ul
          className={`${styles.navigationItems} ${
            openMenu ? styles.isSidenavOpen : ""
          }`}
        >
          <li>
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
