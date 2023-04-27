import React, { useState } from "react";
import "../../sass/fonts.scss";
import styles from "./style.module.scss";
import { FaListUl } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import Pagination from "../Pagination/Pagination";
import GridBlogs from "./Grid_Blogs/GridBlogs";
import ListBlogs from "./List_Blogs/ListBlogs";

export default function Blogs() {
  const [layout, setLayout] = useState("grid");
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>دوره ها</h2>
      </div>
      <div className={styles.row}>
        <div className={styles.layout_icons}>
          <div
            className={
              layout === "grid"
                ? `${styles.active} ${styles.grid_icon}`
                : styles.grid_icon
            }
            onClick={() => {
              setLayout("grid");
            }}
          >
            <BsGrid3X3GapFill size={24} color={"rgba(0, 0, 0, 0.8)"} />
          </div>
          <div
            className={
              layout === "list"
                ? `${styles.active} ${styles.list_icon}`
                : styles.list_icon
            }
            onClick={() => {
              setLayout("list");
            }}
          >
            <FaListUl size={24} color={"rgba(0, 0, 0, 0.8)"} />
          </div>
        </div>
      </div>
      <div className={styles.blogs}>
        {layout === "grid" ? <GridBlogs /> : <ListBlogs />}
      </div>
      <div className={styles.pagination}>
      <Pagination currentPage={3} totalPages={5} />
      </div>
    </div>
  );
}
