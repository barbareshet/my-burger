import React, { Component } from 'react';
import AuxWrap from "../../hoc/AuxWrap";
import Button from "../../UI/Button/Button";
import fixedPrice from "../../../utils/fixedPrice";
class Order extends Component{

    

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}><span style={{textTransform:"capitalize"}}>{igKey} : {this.props.ingredients[igKey]}</span></li>
            })
        return(
            <AuxWrap className="Order">
                <h3 className="modal-title">{this.props.title}</h3>

                <div className="modal-content">
                    {this.props.description}
                </div>
                <ul>
                    {ingredientSummary}
                </ul>
                <h4 className="total">
                    <span style={{color:"#ce5054"}}>
                    Total Price: ${fixedPrice(this.props.totalPrice)}
                    </span>
                </h4>
                <div className="modal-footer">
                    <Button type="place-order" handleButtonClick={this.props.handleContiniueOrder}>Place Order</Button>
                    <Button type="cancel" handleButtonClick={this.props.handleCancelOrder}>Cancel</Button>
                </div>
            </AuxWrap>
        )
    }

};

export default Order;