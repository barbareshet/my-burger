import React, {Component} from 'react';
import AuxWrap from "../../hoc/AuxWrap";
import Burger from "../../Burger/Burger";
class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:1,
            bacon: 1,
            cheese: 1,
            meat: 1,
            pickles:1,
            tomato:1
        }
    };
    render() {
        return(
            <AuxWrap>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
            </AuxWrap>
        )
    }
}

export default BurgerBuilder;