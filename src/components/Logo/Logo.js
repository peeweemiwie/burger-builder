import React from 'react'
import logo from '../../assets/img/burger-logo.png';
import './Logo.scss';

const Logo = () => {
  return (
    <div className="Logo">
      <img src={logo} alt="Burger" />
    </div>
  )
}

export default Logo
