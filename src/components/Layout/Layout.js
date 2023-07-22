import React from 'react';
import AuxWrap from "../hoc/AuxWrap";
import classes from './Layout.css'

const Layout = (props) => {
    return (
        <AuxWrap>
            <nav>
                <div>toolbar</div>
                <div>Side</div>
                <div>Backdrop</div>
            </nav>
            <main className="Content">
                {props.children}
            </main>
        </AuxWrap>
    );
}

export default Layout;