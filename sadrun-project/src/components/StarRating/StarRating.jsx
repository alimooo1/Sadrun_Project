import React, { useState } from "react";
import styles from "./style.module.scss";
import { Rating } from "react-simple-star-rating";
import fill from "./assets/fill.svg";
import empty from "./assets/empty.svg";

const StarRating = ({ width, initialValue, voteNum }) => {

  const fillIcon = (
    <img src={fill} className={styles.fillStar} style={{ width: width }} />
  );
  const emptyIcon = (
    <img src={empty} className={styles.emptyStar} style={{ width: width }} />
  );

  return (
    <div className={styles.star_rating}>
      <Rating
        rtl="true"
        fillColor="#FFBB00"
        fillIcon={fillIcon}
        emptyIcon={emptyIcon}
        initialValue={initialValue}
      />

      <span className={styles.vote_num}>
        (
        {Number(voteNum.toFixed(0))
          .toLocaleString()
          .split(/\s/)
          .join(",")
          .toLocaleString()}
        )
      </span>
    </div>
  );
};

export default StarRating;
