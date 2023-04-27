import React, { useState } from "react";
import "../../../sass/fonts.scss";
import styles from "./style.module.scss";
import SingleCourse from "./Single_Course/SingleCourse";
import angular from "./assets/angular.png";
import nest from "./assets/nest.png";
import node from "./assets/node.png";
import vsCode from "./assets/vs-code.png";

export default function GridCourses() {
  const [courses, setCourse] = useState([
    {
      pic: vsCode,
      allCapacity: 50,
      leftCapacity: 34,
      price: 249800,
      title: "دوره آموزشی ویژوال استودیو 2015",
      teacherName: "استاد بحرالعلوم",
    },
    {
      pic: node,
      allCapacity: 50,
      leftCapacity: 34,
      price: 249800,
      title: "دوره کامل نود جی اس",
      teacherName: "استاد بحرالعلوم",
    },
    {
      pic: nest,
      allCapacity: 50,
      leftCapacity: 34,
      price: 249800,
      title: "دوره آموزشی  نست جی اس",
      teacherName: "استاد بحرالعلوم",
    },
    {
      pic: angular,
      allCapacity: 50,
      leftCapacity: 34,
      price: 249800,
      title: "دوره کامل انگولار",
      teacherName: "استاد بحرالعلوم",
    },
    {
      pic: vsCode,
      allCapacity: 50,
      leftCapacity: 34,
      price: 249800,
      title: "دوره آموزشی ویژوال استودیو 2015",
      teacherName: "استاد بحرالعلوم",
    },
    {
      pic: node,
      allCapacity: 50,
      leftCapacity: 34,
      price: 249800,
      title: "دوره کامل نود جی اس",
      teacherName: "استاد بحرالعلوم",
    },
    {
      pic: nest,
      allCapacity: 50,
      leftCapacity: 34,
      price: 249800,
      title: "دوره آموزشی  نست جی اس",
      teacherName: "استاد بحرالعلوم",
    },
    {
      pic: angular,
      allCapacity: 50,
      leftCapacity: 34,
      price: 249800,
      title: "دوره کامل انگولار",
      teacherName: "استاد بحرالعلوم",
    },
  ]);
  return (
    <div className={styles.grid_courses}>
      {courses.map((course) => {
        return (
          <SingleCourse
            pic={course.pic}
            allCapacity={course.allCapacity}
            leftCapacity={course.leftCapacity}
            price={course.price}
            title={course.title}
            teacherName={course.teacherName}
          />
        );
      })}
    </div>
  );
}
