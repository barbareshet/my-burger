import React from 'react';
import AuxWrap from "../../hoc/AuxWrap";
import classes from './Modal.css'
import Backdrop from "../Backdrop/Backdrop";
const Modal = (props) => {
    return (
        <AuxWrap>
            <Backdrop show={props.show}/>
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </AuxWrap>
    );
}

export default Modal;