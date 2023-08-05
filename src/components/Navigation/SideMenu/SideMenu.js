import React from 'react';
import classes from './SideMenu.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import AuxWrap from "../../hoc/AuxWrap";
const SideMenu = (props) => {
    let attachedClasses = ['SideMenu', 'Close']
    if (props.open){
        attachedClasses = ['SideMenu', 'Open']
    }
    return (
        <AuxWrap>
            <Backdrop show={props.open} handleBackdrop={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className="LogoWrap">
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </AuxWrap>
    );
}

export default SideMenu;