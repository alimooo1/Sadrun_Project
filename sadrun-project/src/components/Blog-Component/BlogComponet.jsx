import React, { useState } from "react";
import styles from "../BlogComponet.module.scss"
import BlogsComponet from "../Blog-Component/BlogsComponent/BlogsComponent";
import menuu from "../blog-Component/image/menuu.svg"
function BlogComponet() {
  // const [dataBloge, setDataBloge] = useState({img:"jk",title:"نود جی س",text:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "})
  const [dataBloge, setDataBloge] = useState([{
    img: "./image/visual-studio-logo.png",
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: "./image/visual-studio-logo.png",
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: "./image/visual-studio-logo.png",
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: "./image/visual-studio-logo.png",
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: "./image/visual-studio-logo.png",
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: "./image/visual-studio-logo.png",
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: "./image/visual-studio-logo.png",
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: "./image/visual-studio-logo.png",
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: "./image/visual-studio-logo.png",
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: "./image/visual-studio-logo.png",
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },]);
  return (
    <div className={styles.conteiner}>
    <div className={styles.head}>
      <div className={styles.headIcon}><img className={styles.iconImg} src={menuu} alt="" /></div>
      <div className={styles.headText}>بلاگ ها</div>
    </div>
    <div className={styles.blogs}>
      {dataBloge.map((data, index) => (
        <BlogsComponet key={index} data={data} />
      ))}
    </div>
      
    </div>
  );
}

export default BlogComponet;
