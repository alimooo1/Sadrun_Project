import styles from "./SearchInput.module.scss";
import { FaSistrix } from "react-icons/fa";
import React, { useState } from "react";
import "../../../../sass/fonts.scss";
import { useEffect, useRef } from "react";
import useOutsideHandler from "../../../../hooks/useOutsideHandler";

function InputWithIcon() {
  const containerRef = useRef(null);

  const [expanded, setExpanded] = useState(false);
  const handleInputClick = () => {
    setExpanded(true);
  };

  useOutsideHandler(containerRef, () => setExpanded(false));

  return (
    <div
      ref={containerRef}
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
