import React from 'react';
import classes from './BuildControl.css'
const BuildControl = (props) => {
    return (
        <div className="BuildControl">
            <din className="label">{props.label}</din>
            <button className="remove" onClick={props.removed}>Less</button>
            <button className="add" onClick={props.added}>More</button>
        </div>
    );
}

export default BuildControl;