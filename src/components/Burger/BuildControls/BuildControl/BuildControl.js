import React from 'react';
import classes from './BuildControl.css'
const BuildControl = (props) => {
    return (
        <div className="BuildControl">
            <din className="label">{props.label}</din>
            <button className="remove">Less</button>
            <button className="add">More</button>
        </div>
    );
}

export default BuildControl;