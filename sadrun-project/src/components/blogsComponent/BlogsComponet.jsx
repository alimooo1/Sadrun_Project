import React, { useState } from "react";
import BlogComponet from "../blogComponet/BlogComponet";
// import vs from "./image/visual-studio-logo.png"
function BlogsComponet() {
  // const [dataBloge, setDataBloge] = useState({img:"jk",title:"kjj",text:"knn"})
  const [dataBloge, setDataBloge] = useState([{
    img: "./image/visual-studio-logo.png",
    title: "kjj",
    text: "knn",
  }]);
  return (
    <div>
      {dataBloge.map((data) => (
        <BlogComponet data={data} />
      ))}
    </div>
  );
}

export default BlogsComponet;
