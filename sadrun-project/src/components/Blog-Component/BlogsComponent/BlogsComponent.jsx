import React from 'react'
import styles from "./BlogsComponent.module.scss"
import vs from "../image/visual-studio-logo.png"
function BlogsComponet({data}) {
    // 
  return (
    
      
                
    <div className={styles.blog}>
            <div className={styles.image_blog}>
               <img  src={vs} alt="dfsdff" />
            </div>
        <div>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.text}>{data.text}</p>
        </div>
    </div>

    
   
  )
}

export default BlogsComponet