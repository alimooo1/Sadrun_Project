import React from "react";
import styles from "./Dashboard.module.scss";
import profile from "./img/profile.svg";
import icon1 from "./img/icon1.svg";
import icon2 from "./img/icon2.svg";
import icon3 from "./img/icon3.svg";
import icon4 from "./img/icon4.svg";
import icon5 from "./img/icon5.svg";
import DashboardItem from "./DashboardItem";

const dashboardList = [
  {
    title: "پیشخوان",
    icon: icon1,
    to: "/dashboard",
  },
  {
    title: "ویرایش پروفایل",
    icon: icon2,
    to: "/dashboard/profile/edit",
  },
  {
    title: "دوره های من",
    icon: icon3,
    to: "/dashboard/mycourses",
  },
  {
    title: "لیست دوره ها",
    icon: icon4,
    to: "/dashboard/courses",
  },
  {
    title: "خروج",
    icon: icon5,
    to: "/logout",
  },
];

const dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.top}>
          <img src={profile} alt="profile" />
          <p className={styles.username}>زهرا چلوئی دارابی</p>
        </div>

        <ul className="down">
          {dashboardList.map((item, index) => {
            return <DashboardItem title={item.title} to={item.to} icon={item.icon} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default dashboard;
