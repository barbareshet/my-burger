import React, {Component} from 'react';
import AuxWrap from "../../hoc/AuxWrap";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.2,
    cheese: 0.4,
    meat: 1.6,
    bacon: 0.7,
    pickles: 0.2,
    tomato: 0.2
}
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
        totalPrice: 4
    };
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

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})

    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }
    render() {
        return(
            <AuxWrap>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredient={this.addIngredientHandler} removedIngredient={this.removeIngredientHandler} totalPrice={this.state.totalPrice}/>
            </AuxWrap>
        )
    }
}

export default BurgerBuilder;