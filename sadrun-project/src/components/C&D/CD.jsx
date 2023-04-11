import React, { useState } from "react";
import "../../sass/fonts.scss";
import styles from "./style.module.scss";
import nodePic from "./assets/node.png";
import StarRating from "../StarRating/StarRating";

export default function CD() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={styles.main_card}>
      <img src={nodePic} className={styles.big_pic} alt="" />
      <h1 className={styles.title}>نود جی اس</h1>
      <div className={styles.tab}>
        {/* ----------Tab Links---------------  */}
        <div className={styles.tablinks}>
          <div
            className={
              toggleState === 1
                ? `${styles.active_link} ${styles.description_btn}`
                : styles.description_btn
            }
            onClick={() => toggleTab(1)}
          >
            توضیحات
          </div>
          <div
            className={
              toggleState === 2
                ? `${styles.active_link} ${styles.comments_btn}`
                : styles.comments_btn
            }
            onClick={() => toggleTab(2)}
          >
            نظرات
            <span>14</span>
          </div>
        </div>

        {/* ----------Tab Content---------------  */}
        <div className={styles.tabcontent}>
          <div
            className={
              toggleState === 1
                ? `${styles.active_content} ${styles.description_content}`
                : styles.description_content
            }
          >
            <p>
              نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ
              سمت سرورِ متن‌باز و چندسکویی برای زبان جاوااسکریپت است.نود جی‌اس
              یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ
              متن‌باز و چندسکویی برای زبان جاوااسکریپت است.نود جی‌اس یا نود دات
              جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ متن‌باز و
              چندسکویی برای .زبان جاوااسکریپت است نود جی‌اس یا نود دات جی‌اس (به
              انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ متن‌باز و چندسکویی
              برای زبان جاوااسکریپت است.نود جی‌اس یا نود دات جی‌اس (به انگلیسی:
              Node.js) یک محیط اجراییِ سمت سرورِ متن‌باز و چندسکویی برای زبان
              جاوااسکریپت است نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js)
              یک محیط اجراییِ سمت سرورِ متن‌باز و چندسکویی برای زبان جاوااسکریپت
              است.نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط
              اجراییِ سمت سرورِ متن‌باز و .چندسکویی برای زبان جاوااسکریپت است.
            </p>
            <div className={styles.info}>
              <StarRating width={"17.5px"} initialValue={3} voteNum={99313} />
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? `${styles.active_content} ${styles.comment_content}`
                : styles.comment_content
            }
          >
            <h3>Comments</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
