import React from "react";
import styles from "./Navigation.module.scss";
import avatar from "./navigation-image/avatar.svg";
import LeftSideNavigation from "./leftSideNavigation/LeftSideNavigation";
const Navigation = () => {
  return (
    <div className={styles.navigation}>
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
            <Link to='/landing'>خانه</Link>
          
          </li>
          <li>
            <Link to='#'>آموزش</Link>
          
          </li>
          <li>
           <Link to='#'>بلاگ</Link>
          
          </li>
          <li>
            <Link to='#'>خدمات</Link>
          
          </li>
          <li>
            <Link to='#'>دوره ها </Link>
  
          </li>
          <li>
            <Link to='#'>تماس با ما </Link>
          </li>
        </ul>
      </nav>
      <LeftSideNavigation />
    </div>
  );
};

export default Navigation;
