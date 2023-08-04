import React, {Component} from 'react';
import AuxWrap from "../../hoc/AuxWrap";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import Modal from "../../UI/Modal/Modal";
import Order from "../../Burger/Order/Order";
import INGREDIENT_PRICES from "../../../const/ingerients";


class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:0,
            bacon: 0,
            cheese: 0,
            meat: 0,
            pickles:0,
            tomato:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    updatePurchasable(ingredients){

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            },0)
        this.setState({purchasable : sum > 0})
    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);

    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if ( oldCount <= 0 ) return;
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    purchaseHandler = () =>{
        this.setState({purchasing:true});
    }
    purchaseCancelHandler = () =>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler = () => {
        alert('Order was sent')
    }
    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for ( let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return(
            <AuxWrap>
                <Modal show={this.state.purchasing}
                       modalClosed={this.purchaseCancelHandler}
                >
                    <Order title="Your Order Information"
                           description="See Your Order information bellow:"
                           ingredients={this.state.ingredients}
                           totalPrice={this.state.totalPrice}
                           handleCancelOrder={this.purchaseCancelHandler}
                           handleContiniueOrder={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removedIngredient={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice}
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    placeOrder={this.purchaseHandler}
                />
            </AuxWrap>
        )
    }
}

export default BurgerBuilder;