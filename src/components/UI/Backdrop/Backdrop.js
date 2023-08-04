import React from 'react';
import classes from './Backdrop.css'
function Backdrop(props) {
    const {handleBackdrop} = props
    return props.show ?  <div className="Backdrop" onClick={handleBackdrop}></div> : null
}

export default Backdrop;