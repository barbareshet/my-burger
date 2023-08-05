import React from 'react';
import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div onClick={props.handleMenuClick} className="MobileMenuTrigger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="LogoWrap">
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default Toolbar;