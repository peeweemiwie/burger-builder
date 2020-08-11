import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BurgerIcon from '../../BurgerIcon/BurgerIcon';
import './Toolbar.scss';

const Toolbar = props => {
  return (
    <header className="Toolbar">
      <BurgerIcon clicked={props.BurgerClicked} />
      <Logo />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar
