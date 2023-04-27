import React from 'react'
import styles from "./BlogsComponent.module.scss"
function BlogsComponet({data}) {
    // 
  return (
    
      
                
    <div className={styles.blog}>
            <div className={styles.image_blog}>
               <img  src={data.img} alt="a" />
            </div>
        <div>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.text}>{data.text}</p>
        </div>
    </div>

    
   
  )
}

export default BlogsComponet