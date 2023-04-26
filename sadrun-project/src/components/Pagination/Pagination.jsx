import React from "react";
import styles from "./Pagination.module.scss";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  //totalPages = 5;
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={styles.pagination}>
        <li className={`${styles.pageItem}`}>
          <AiOutlineRight
            className={styles.rightIcon}
            onClick={() => onPageChange(currentPage + 1)}
          />
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className={`${styles.pageItem}`}>
            <a
              href="#"
              className={styles.pageLink}
              onClick={() => onPageChange(number)}
            >
              {number}
            </a>
          </li>
        ))}
        <li className={`${styles.pageItem}`}>
          <AiOutlineLeft
            className={styles.leftIcon}
            onClick={() => onPageChange(currentPage + 1)}
          />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = [];
//   for (let i = 0; i <= totalPages.length; i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <div>
//       <ul className={styles.pagination}>
//         {pageNumbers.map((number) => {

//             <li
//               className={`${styles.pageItem} ${
//                 currentPage === number ? "active" : ""
//               }`}
//               key={number}
//             >
//               <a
//                 className={styles.pageLink}
//                 onClick={() => onPageChange(number)}
//                 href="#"
//               >
//                 {number}
//               </a>
//             </li>
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;
