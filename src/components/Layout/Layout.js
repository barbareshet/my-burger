import React from 'react';
import AuxWrap from "../hoc/AuxWrap";
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <AuxWrap>
            <Toolbar/>
            <div>Side Nav</div>
            <main className="Content">
                {props.children}
            </main>
        </AuxWrap>
    );
}

export default Layout;