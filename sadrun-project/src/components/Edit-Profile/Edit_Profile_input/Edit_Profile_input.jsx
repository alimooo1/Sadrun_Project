import React, { useRef, useState } from "react";
import styles from "../Edit_Profile_input/Edit_Profile_input.module.scss";
import Edit_icon from "../image/user-edit-svgre-mdpi.svg";
import Tick from "../image/iconmonstr-check-mark-17.svg";

function Edit_Profile_input(props, onSubmit) {
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef();

  const handleSubmit = () => {
    setIsEditing(false);
    onSubmit(inputRef.current.value);
  };

  return (
    <div className={styles.conteiner_input}>
      <label htmlFor="">{props.edit.text} </label>
      <div>
        <input
          ref={inputRef}
          disabled={!isEditing}
          type="text"
          defaultValue={props.edit.value}
        />
        {!isEditing ? (
          <img
          className={styles.editIcon}
          onClick={() => setIsEditing(true)}
          src={Edit_icon}
          alt=""      
          />
        ) :  (
          <img
            className={styles.editIcon}
            onClick={handleSubmit}
            src={Tick}
            alt=""
          />
        )}
      </div>
    </div>
  );
}

export default Edit_Profile_input;
