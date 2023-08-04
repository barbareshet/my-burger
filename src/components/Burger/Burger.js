import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css"
const Burger = ({ingredients}) => {


    const transformedIngredients = Object.keys(ingredients)
        .map( igKey => {
            return [...Array(ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        })
    
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;