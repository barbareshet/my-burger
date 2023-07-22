import React from 'react';
import AuxWrap from "../../hoc/AuxWrap";
import Burger from "../../Burger/Burger";
function BurgerBuilder(props) {
    return (
        <AuxWrap>
            <Burger/>
            <div>Burger Controls</div>
        </AuxWrap>
    );
}

export default BurgerBuilder;