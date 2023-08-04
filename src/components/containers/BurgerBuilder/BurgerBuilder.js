import React, {Component} from 'react';
import AuxWrap from "../../hoc/AuxWrap";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:0,
            bacon: 0,
            cheese: 0,
            meat: 0,
            pickles:0,
            tomato:0
        }
    };
    render() {
        return(
            <AuxWrap>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </AuxWrap>
        )
    }
}

export default BurgerBuilder;