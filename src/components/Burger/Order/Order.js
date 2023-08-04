import React from 'react';
import AuxWrap from "../../hoc/AuxWrap";
import Button from "../../UI/Button/Button";
import fixedPrice from "../../../utils/fixedPrice";
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
                    Total Price: ${fixedPrice(props.totalPrice)}
                </span>
            </h4>
            <div className="modal-footer">
                <Button type="place-order" handleButtonClick={props.handleContiniueOrder}>Place Order</Button>
                <Button type="cancel" handleButtonClick={props.handleCancelOrder}>Cancel</Button>
            </div>
        </AuxWrap>
    )
};

export default Order;