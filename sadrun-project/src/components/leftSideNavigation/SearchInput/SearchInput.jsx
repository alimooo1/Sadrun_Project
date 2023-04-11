
import styles from './SearchInput.module.scss';
import { FaSistrix } from 'react-icons/fa';
import React, { useState } from 'react';


function InputWithIcon() {
    const [expanded, setExpanded] = useState(false);

    const handleInputClick = () => {
        setExpanded(true);
    };

    return (
        <div className={`${styles.inputContainer} ${expanded ? styles.expanded : ''}`}>
            {!expanded && <span className={styles.icon}><FaSistrix /></span>}
            <input type="text" placeholder="Search..." onClick={handleInputClick} className={`${styles.input} ${expanded ? styles.visible : ''}`} />
        </div>
    );
}

export default InputWithIcon;