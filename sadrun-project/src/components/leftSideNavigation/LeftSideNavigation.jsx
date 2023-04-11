import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import SearchInput from './SearchInput/SearchInput'
import styles from './LeftSideNavigation.module.scss'
import RegisterBtn from './RegisterBtn/RegisterBtn';
import Login from './Login/Login';

function CreateBtnComponent() {
    return (
        <>
            <div className={styles.conteiner} >
                <SearchInput />
                <RegisterBtn />
                <Login />
                <button className={styles.shopping_cart}>
                    <FaShoppingCart />
                </button>
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