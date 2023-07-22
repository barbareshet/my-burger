import React from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../Burger/Burger";
function BurgerBuilder(props) {
    return (
        <Aux>
            <Burger/>
            <div>Burger Controls</div>
        </Aux>
    );
}

export default BurgerBuilder;