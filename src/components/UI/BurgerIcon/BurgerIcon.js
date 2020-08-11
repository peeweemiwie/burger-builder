import React from 'react';
import './BurgerIcon.scss';

const BurgerIcon = props => {
  return (
    <button
      className="BurgerIcon"
      onClick={props.clicked} >
      <div />
      <div />
      <div />
    </button >
  )
}

export default BurgerIcon
