import React, { useState } from "react";
import "../../../sass/fonts.scss";
import styles from "./style.module.scss";
import SingleBlog from "./Single_Blog/SingleBlog";
import angular from "./assets/angular.png";
import nest from "./assets/nest.png";
import node from "./assets/node.png";
import vsCode from "./assets/vs-code.png";

export default function GridBlogs() {
  const [blogs, setBlog] = useState([
    {
      pic: nest,
      title: "نست جی اس",
      description:
        "آموزشگاه در تدارک دوره های جدید برنامه نویسی است",
      tag: "آموزشی",
    },
    {
      pic: vsCode,
      title: "انگولار",
      description:
        "آموزشگاه در تدارک دوره های جدید برنامه نویسی است",
      tag: "آموزشی",
    },
    {
      pic: node,
      title: "نود جی اس",
      description:
        "آموزشگاه در تدارک دوره های جدید برنامه نویسی است",
      tag: "آموزشی",
    },
    {
      pic: angular,
      title: "ویژوال استودیو",
      description:
        "آموزشگاه در تدارک دوره های جدید برنامه نویسی است",
      tag: "آموزشی",
    },
    {
      pic: nest,
      title: "نست جی اس",
      description:
        "آموزشگاه در تدارک دوره های جدید برنامه نویسی است",
      tag: "آموزشی",
    },
    {
      pic: vsCode,
      title: "انگولار",
      description:
        "آموزشگاه در تدارک دوره های جدید برنامه نویسی است",
      tag: "آموزشی",
    },
    {
      pic: node,
      title: "نود جی اس",
      description:
        "آموزشگاه در تدارک دوره های جدید برنامه نویسی است",
      tag: "آموزشی",
    },
    {
      pic: angular,
      title: "ویژوال استودیو",
      description:
        "آموزشگاه در تدارک دوره های جدید برنامه نویسی است",
      tag: "آموزشی",
    },
  ]);
  return (
    <div className={styles.grid_blogs}>
      {blogs.map((blog) => {
        return (
          <SingleBlog
            pic={blog.pic}
            title={blog.title}
            teacherName={blog.teacherName}
            tag={blog.tag}
            description={blog.description}
          />
        );
      })}
    </div>
  );
}
