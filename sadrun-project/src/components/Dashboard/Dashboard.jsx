import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import profile from "./img/profile.svg";
import icon1 from "./img/icon1.svg";
import icon2 from "./img/icon2.svg";
import icon3 from "./img/icon3.svg";
import icon4 from "./img/icon4.svg";
import icon5 from "./img/icon5.svg";
import DashboardItem from "./DashboardItem";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const dashboardList = [
  {
    title: "پیشخوان",
    icon: icon1,
    to: "/dashboard",
    picked: false,
  },
  {
    title: "ویرایش پروفایل",
    icon: icon2,
    to: "/dashboard/edit-profile",
    picked: false,
  },
  {
    title: "دوره های من",
    icon: icon3,
    to: "/dashboard/my-courses",
    picked: false,
  },
  {
    title: "لیست دوره ها",
    icon: icon4,
    to: "/dashboard/courses",
    picked: false,
  },
  {
    title: "خروج",
    icon: icon5,
    to: "/logout",
    picked: false,
  },
];

const dashboard = () => {
  const [menuItems, setMenuItems] = useState(dashboardList);
  const navigate = useNavigate();
  const currentAddress = useLocation().pathname;
  dashboardList.forEach((item) => {
    if (item.to === currentAddress) {
      item.picked = true;
    }
  });

  const clickHandler = (item) => {
    dashboardList.forEach((item) => {
      item.picked = false;
    });
    const newList = [...dashboardList];
    newList[item].picked = true;
    setMenuItems(newList);
    navigate(newList[item].to);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.top}>
          <img src={profile} alt="profile" />
          <p className={styles.username}>زهرا چلوئی دارابی</p>
        </div>

        <ul className="down">
          {menuItems.map((item, index) => {
            return (
              <DashboardItem
                title={item.title}
                icon={item.icon}
                picked={item.picked}
                clickHandler={() => clickHandler(index)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default dashboard;
