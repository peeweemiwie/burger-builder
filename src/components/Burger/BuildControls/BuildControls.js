import React from 'react';
import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  const control = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
  ]
  const controls = control.map(ctrl => (
    <BuildControl
      key={ctrl.label}
      label={ctrl.label}
      added={() => props.ingredientAdded(ctrl.type)}
      removed={() => props.ingredientRemoved(ctrl.type)}
      disabled={props.disabled[ctrl.type]} />
  ))

  return (
    <div className="BuildControls">
      <p><strong>Current Price: ${props.price.toFixed(2)}</strong></p>
      {controls}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.purchasing}>ORDER NOW!</button>
    </div>
  )
}

export default BuildControls
