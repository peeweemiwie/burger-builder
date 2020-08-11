import React from 'react'
import './Burger.scss';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const Burger = props => {

  let transformedIngredients =
    Object.keys(props.ingredients)
      .map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, index) => {
          return <BurgerIngredients key={ingKey + index} type={ingKey} />
        })
      })
      .reduce((arr, el) => arr.concat(el), []);
  if (transformedIngredients.length === 0) transformedIngredients = <p>Please start adding ingredients!</p>;

  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  )
}

export default Burger
