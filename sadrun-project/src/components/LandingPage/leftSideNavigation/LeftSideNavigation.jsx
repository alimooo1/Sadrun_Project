import { useState, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./LeftSideNavigation.module.scss";
import NavBtn from "./NavBtn/NavBtn";
import { FaRegUserCircle } from "react-icons/fa";
import useOutsideHandler from "../../../hooks/useOutsideHandler";

function CreateBtnComponent() {
  const [openUser, setOpenUser] = useState(false);
  const containerRef = useRef(null);
  const openUserHandler = () => {
    setOpenUser(!openUser);
  };
  useOutsideHandler(containerRef, () => setOpenUser(false));
  return (
    <>
      <div ref={containerRef} className={styles.conteiner}>
        <SearchInput className={styles.SearchInput} />
        <div
          className={`${styles.registerContainer} ${
            openUser ? styles.isRegisterContainerOpen : ""
          }`}
        >
          <NavBtn className={styles.register} btnTitle={"ثبت نام "} />
          <NavBtn className={styles.input} btnTitle={"ورود"} />
        </div>

        <NavBtn
          className={styles.shopping_cart}
          btnTitle={<FaShoppingCart />}
        />
        <NavBtn
          onClick={openUserHandler}
          className={`${styles.User} ${openUser ? styles.isUserOpen : ""}`}
          btnTitle={<FaRegUserCircle />}
        />
      </div>
    </>
  );
}

export default CreateBtnComponent;
