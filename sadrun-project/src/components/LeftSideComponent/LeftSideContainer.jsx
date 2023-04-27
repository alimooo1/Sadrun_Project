import React from "react";
import styles from "./style.module.scss";
import InformationCourseCard from "../informationCourseCard/InformationCourseCard";
import CourseCapacity from "../CourseCapacity/CourseCapacity";
import CourseTeacher from "../course-Teacher/courseTeacher";
import CoursePrice from "../Course_price/CoursePrice";

export default function LeftSideContainer() {
  return (
    <div className={styles.left_side_container}>
      <InformationCourseCard />
      <CourseCapacity />
      <CourseTeacher />
      <CoursePrice
        coursPrice={2498000}
        courseDiscount={2}
        date={"2024-00-00"}
      />
    </div>
  );
}
