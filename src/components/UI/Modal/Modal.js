import React, { Component } from 'react';
import AuxWrap from "../../hoc/AuxWrap";
import classes from './Modal.css'
import Backdrop from "../Backdrop/Backdrop";
import {update} from "bfj/src/memory";
class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('update')
    }

    render() {
        const {modalClosed, show} = this.props
        return (
            <AuxWrap>
                <Backdrop show={show} handleBackdrop={modalClosed}/>
                <div
                    className="Modal"
                    style={{
                        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </AuxWrap>
        );
    }
}

export default Modal;