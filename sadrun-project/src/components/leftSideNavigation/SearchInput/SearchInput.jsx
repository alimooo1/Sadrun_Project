import styles from "./SearchInput.module.scss";
import { FaSistrix } from "react-icons/fa";
import React, { useState } from "react";
import "../../../sass/fonts.scss";
import { useEffect, useRef } from "react";

function InputWithIcon() {
  const [expanded, setExpanded] = useState(false);
  const handleInputClick = () => {
    setExpanded(true);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", function (e) {
      // if (inputRef.current.contains(e.target)) {
      //   setExpanded(false);
      // }
      // const searchBar = document.getElementById("searchBar");
      // if (!searchBar.contains(e.target)) {
      //   setExpanded(false);
      // }
    });
  }, [expanded]);

  return (
    <div
      ref={inputRef}
      id="searchBar"
      className={`${styles.inputContainer} ${expanded ? styles.expanded : ""}`}
    >
      {!expanded && (
        <span onClick={handleInputClick} className={styles.icon}>
          <FaSistrix />
        </span>
      )}
      <input
        type="search"
        className={`${styles.input} ${expanded ? styles.visible : ""}`}
      />
    </div>
  );
}

export default InputWithIcon;
