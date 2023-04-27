import React from "react";
import styles from "./SingleBlogLayout.module.scss";
import CD from "../../components/C&D/CD";
import BlogScroll from "../../components/Blog-Component/BlogComponet";

export default function SingleBlogLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.rightSide}>
        <CD />
      </div>
      <BlogScroll />
    </div>
  );
}
