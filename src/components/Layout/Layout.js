import React from 'react';
import Aux from "../hoc/Aux";
import classes from './Layout.css'

const Layout = (props) => {
    return (
        <Aux>
            <nav>
                <div>toolbar</div>
                <div>Side</div>
                <div>Backdrop</div>
            </nav>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;