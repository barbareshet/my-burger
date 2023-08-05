import React from 'react';
import LogoImage from '../../assets/images/hamburger.png'
import classes from './Logo.css'
const Logo = (props) => {
    return (
        <div className="Logo">
            <img src={LogoImage} alt="logo"/>
        </div>
    );
}

export default Logo;