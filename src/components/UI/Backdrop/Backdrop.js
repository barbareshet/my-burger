import React from 'react';
import classes from './Backdrop.css'
function Backdrop(props) {
    return props.show ?  <div className="Backdrop"></div> : null
}

export default Backdrop;