import React from 'react';
import AuxWrap from "../../hoc/AuxWrap";
const Order = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform:"capitalize"}}>{igKey} : {props.ingredients[igKey]}</span></li>
        })
    return(
        <AuxWrap className="Order">
            <h3 className="modal-title">{props.title}</h3>

            <div className="modal-content">
                {props.description}
            </div>
            <ul>
                {ingredientSummary}
            </ul>
            <h4 className="total">
                <span style={{color:"#ce5054"}}>
                    Total Price: ${props.totalPrice.toFixed(2)}
                </span>
            </h4>
            <button>Checkout</button>
        </AuxWrap>
    )
};

export default Order;