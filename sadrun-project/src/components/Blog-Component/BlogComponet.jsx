import React, { useState } from "react";
import styles from "../Blog-Component/BlogComponet.module.scss"
import BlogsComponet from "../blog-Component/BlogsComponent/BlogsComponent";
import menuu from "../blog-Component/image/menuu.svg"
import visual from "../Blog-Component/image/visual-studio-logo.png";
import angular from "../Blog-Component/image/angular-8-new-f.png";
import nest from "../Blog-Component/image/1_EGrPBUoYfKm-2.png";
import node from "../Blog-Component/image/VKE8r0.png";

function BlogComponet() {
  const [dataBloge, setDataBloge] = useState([{
    img:visual ,
    title: " ویژوال استدیو",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: angular,
    title: " انگولار",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: nest,
    title: " نست",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img: node,
    title: "نود جی اس",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img:nest,
    title: " نست",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img:visual,
    title: " ویژوال استدیو",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img:angular,
    title: " انگولار",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img:node,
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img:angular,
    title: "انگولار",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },{
    img:visual,
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },
  {
    img:nest,
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },
  ,{
    img:node,
    title: "نود جی س",
    text: "نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ ",
  },
]);
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
