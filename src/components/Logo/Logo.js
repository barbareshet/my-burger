import React from 'react';
import LogoImage from '../../assets/images/hamburger.png'
import classes from './Logo.css'
const Logo = (props) => {
    return (
        <div className="Logo">
            <a href="/" className="LogoLink">
                <img src={LogoImage} alt="logo"/>
            </a>
        </div>
    );
}

export default Logo;