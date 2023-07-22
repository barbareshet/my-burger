import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css"
function Burger(props) {
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="tomato"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;