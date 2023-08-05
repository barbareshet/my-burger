import React, { Component } from 'react';
import AuxWrap from "../hoc/AuxWrap";
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideMenu from "../Navigation/SideMenu/SideMenu";


class Layout extends Component {

    state = {
        showSideMenu: false
    }
    sideMenuHandler = () => {
        this.setState({showSideMenu: false})
    }
    handleMenuClick = () => {
        this.setState((prevState) => {
            return {showSideMenu: !this.state.showSideMenu}
        })
    }
    render() {

        return (
            <AuxWrap>
                <Toolbar handleMenuClick={this.handleMenuClick}/>
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