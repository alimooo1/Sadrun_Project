import React from "react";
import styles from "./LandingNav.module.scss";
import avatar from "./navigation-image/avatar.svg";
import LeftSideNavigation from "../leftSideNavigation/LeftSideNavigation";
import { SlMenu, SlArrowRight } from "react-icons/sl";
import { useState, useRef } from "react";
import useOutsideHandler from "../../../hooks/useOutsideHandler";
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImList2 } from "react-icons/im";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdOutlineModelTraining } from "react-icons/md";
import { Link } from "react-router-dom";

const LandingNav = (props) => {
  // menu display state
  const [openMenu, setOpenMenu] = useState(false);
  const addMenuHandller = () => {
    setOpenMenu(!openMenu);
  };
  const containerRef = useRef(null);
  useOutsideHandler(containerRef, () => setOpenMenu(false));
  return (
    <div ref={containerRef} className={`${styles.navigation}`}>
      <nav>
        {!openMenu && (
          <div className={styles.navigationLogo}>
            <a href="#">
              {" "}
              <img src={avatar} alt="avatar" />
            </a>
          </div>
        )}

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
          <div className={styles.itemsContainer}>
            <li>
              <span className={styles.navigationItemIcon}>
                <AiFillHome />
              </span>
              <Link to='/landing'>خانه</Link>
            </li>
            <li>
              <span className={styles.navigationItemIcon}>
                <MdOutlineModelTraining />
              </span>
              <Link to='#'>آموزش</Link>
            </li>
            <li>
              <span className={styles.navigationItemIcon}>
                <FaBars />
              </span>
              <Link to='/blogs'>بلاگ</Link>
            </li>
            <li>
              <span className={styles.navigationItemIcon}>
                <RiCustomerServiceFill />
              </span>
              <Link to='#'>خدمات</Link>
            </li>
            <li>
              <span className={styles.navigationItemIcon}>
                <ImList2 />
              </span>
              <Link to='/courses'>دوره ها </Link>

            </li>
            <li>
              <span className={styles.navigationItemIcon}>
                <BsFillTelephoneFill />
              </span>
              <Link to='/contact-us'> تماس با ما </Link>
            </li>
          </div>
        </ul>
      </nav>
      <LeftSideNavigation />
    </div>
  );
};

export default LandingNav;
