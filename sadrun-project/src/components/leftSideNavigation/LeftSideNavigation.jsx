import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import SearchInput from './SearchInput/SearchInput'
import styles from './LeftSideNavigation.module.scss'
import RegisterBtn from './RegisterBtn/RegisterBtn';
import Login from './Login/Login';
import NavBtn from './NavBtn/NavBtn';

function CreateBtnComponent() {
    return (
        <>
            <div className={styles.conteiner} >
                <SearchInput />
                <NavBtn btnTitle={'ثبت نام '} />
                <NavBtn btnTitle={"ورود"} />
                <NavBtn className={styles.shopping_cart} btnTitle={<FaShoppingCart />} />
            </div>



        </>

    )
}

export default CreateBtnComponent



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