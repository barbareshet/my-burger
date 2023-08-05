import React, { Component } from 'react';
import AuxWrap from "../hoc/AuxWrap";
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideMenu from "../Navigation/SideMenu/SideMenu";


class Layout extends Component {

    state = {
        showSideMenu: true
    }
    sideMenuHandler = () => {
        this.setState({showSideMenu: false})
    }
    render() {

        return (
            <AuxWrap>
                <Toolbar/>
                <SideMenu
                    open={this.state.showSideMenu}
                    closed={this.sideMenuHandler}
                />
                <main className="Content">
                    {this.props.children}
                </main>
            </AuxWrap>
        );
    }
}

export default Layout;