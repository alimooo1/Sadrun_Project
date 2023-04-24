import { useState } from "react";
import styles from "./SmallNavSideMenu.module.scss";
import { FaSistrix, FaUserEdit } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import avatar from "../../../images/avatar.svg";
import ProPic from "../../../images/stuPic.svg";
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImList2 } from "react-icons/im";
import { BiErrorCircle } from "react-icons/bi";
import { MdOutlineModelTraining } from "react-icons/md";
import { IoMdExit } from "react-icons/io";

const SmallNavSideMenu = (props) => {
  const [showIcon, setShowIcon] = useState(true);
  const changeHandler = () => {
    setShowIcon(false);
  };
  const handleInputClick = () => {
    console.log("mm");
  };

  return (
    <div className={styles.navSideContainer}>
      <div className={styles.navSideHeader}>
        <img className={styles.navigationLogo} src={avatar} alt="logo" />
        <span className={styles.navigationCloseIcon}>
          <AiFillCloseSquare
            onClick={props.onClick}
            className={styles.navigationIcon}
          />
        </span>
      </div>
      <div className={styles.prifileContainer}>
        <div className={styles.myPrifile}>
          <img src={ProPic} alt="" />
          <span className={styles.myPrifileName}>مریم مهاجر</span>
        </div>
        <div className={`${styles.inputContainer}`}>
          <input
            onChange={changeHandler}
            type="search"
            className={styles.searchInCourses}
            placeholder="جست و جوی دوره"
          />
          <span onClick={handleInputClick} className={`${styles.icon}`}>
            {showIcon && <FaSistrix />}
          </span>
        </div>
      </div>
      <ul className={`${styles.navigationItems}`}>
        <li>
          <span className={styles.navigationItemIcon}>
            <AiFillHome />
          </span>
          <a className={styles.navigationItemLink} href="#">
            پیشخوان
          </a>
        </li>
        <li>
          <span className={styles.navigationItemIcon}>
            <FaUserEdit />
          </span>
          <a className={styles.navigationItemLink} href="#">
            ویرایش پروفایل
          </a>
        </li>
        <li>
          <span className={styles.navigationItemIcon}>
            <ImList2 />
          </span>
          <a className={styles.navigationItemLink} href="#">
            دوره های من
          </a>
        </li>
        <li>
          <span className={styles.navigationItemIcon}>
            <FaBars />
          </span>
          <a className={styles.navigationItemLink} href="#">
            {" "}
            لیست دوره ها{" "}
          </a>
        </li>
        <li>
          <span className={styles.navigationItemIcon}>
            <IoMdExit />
          </span>
          <a className={styles.navigationItemLink} href="#">
            خروج
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SmallNavSideMenu;
