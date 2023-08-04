import React from 'react';
import classes from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
    {label:'Pickles', type:'pickles'},
    {label:'Tomato', type:'tomato'},
]
const BuildControls = (props) => {
    return (
        <div className="BuildControls">
            {controls.map( (control,i) => {
                return(
                    <BuildControl key={control.label} label={control.label}/>
                )
            })}
        </div>
    );
}

export default BuildControls;