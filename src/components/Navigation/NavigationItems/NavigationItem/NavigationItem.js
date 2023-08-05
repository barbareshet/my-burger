import React from 'react';
import classes from './NavigationItem.css'
function NavigationItem(props) {
    const {link, active, children} = props
    return (
        <li className="nav-item">
            <a href={link} className={['nav-link', active ? 'active' : null].join(' ')}>
                {children}
            </a>
        </li>
    );
}

export default NavigationItem;