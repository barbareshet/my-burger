import React from 'react';
import classes from './Button.css'
function Button(props) {
    const {type, handleButtonClick} = props
    return (
        <button className={`Button ${type}`} onClick={handleButtonClick}>{props.children}</button>
    );
}

export default Button;