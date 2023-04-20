import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./LeftSideNavigation.module.scss";
import NavBtn from "./NavBtn/NavBtn";
import { BiUserCircle } from "react-icons/bi";

function CreateBtnComponent() {
  const [openUser, setOpenUser] = useState(false);
  const openUserHandler = () => {
    setOpenUser(!openUser);
    console.log("mm");
    console.log(openUser);
  };
  console.log("nn");
  return (
    <>
      <div className={styles.conteiner}>
        <SearchInput className={styles.SearchInput} />
        <div className={styles.registerContainer}>
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
          btnTitle={<BiUserCircle />}
        />
      </div>
    </>
  );
}

export default CreateBtnComponent;

// import './styles.css';

// function InputWithIcon() {
//     const [expanded, setExpanded] = useState(false);

//     const handleInputClick = () => {
//         setExpanded(true);
//     };

//     return (
//         <div className={`input-container ${expanded ? 'expanded' : ''}`}>
//             <input type="text" placeholder="Search..." onClick={handleInputClick} />
//             {!expanded && <span className="icon"><i className="fa fa-search"></i></span>}
//         </div>
//     );
// }

// export default InputWithIcon;
