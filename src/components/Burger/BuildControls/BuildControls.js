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
    const {totalPrice} = props
    return (
        <div className="BuildControls">
            <h3 className="totalPrice">
                ${totalPrice.toFixed(2)}
            </h3>
            {controls.map( (control,i) => {
                return(
                    <BuildControl
                        key={control.label}
                        label={control.label}
                        added={() => props.addIngredient(control.type)}
                        removed={()=>props.removedIngredient(control.type)}
                        disabled={props.disabled[control.type]}
                    />
                )
            })}
        </div>
    );
}

export default BuildControls;