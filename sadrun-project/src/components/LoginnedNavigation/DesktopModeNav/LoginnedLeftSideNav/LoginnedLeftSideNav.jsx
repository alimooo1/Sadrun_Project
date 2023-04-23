import React from "react";
import styles from "./LoginnedLeftSideNav.module.scss";
import SearchInput from "../../../LandingPage/leftSideNavigation/SearchInput/SearchInput";
import { FaShoppingCart } from "react-icons/fa";
import NavBtn from "../../../LandingPage/leftSideNavigation/NavBtn/NavBtn";
import ProfilePicture from "../../images/ProfilePic.svg";

const LoginnedLeftSideNav = () => {
  return (
    <>
      <div className={styles.conteiner}>
        <SearchInput />
        {/* <NavBtn btnTitle={"ثبت نام "} />
        <NavBtn btnTitle={"ورود"} /> */}
        <NavBtn
          className={styles.shopping_cart}
          btnTitle={<FaShoppingCart />}
        />
        <div className={styles.profilePic}>
          <img src={ProfilePicture} alt="ProfilePicture" />
        </div>
      </div>
    </>
  );
};

export default LoginnedLeftSideNav;
