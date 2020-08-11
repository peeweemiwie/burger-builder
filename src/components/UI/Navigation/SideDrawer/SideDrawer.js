import React, { Fragment } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../Logo/Logo';
import Button from '../../Button/Button';
import Backdrop from '../../Backdrop/Backdrop';
import './SideDrawer.scss';
import CancelIcon from '@material-ui/icons/Cancel';

const SideDrawer = props => {
  const assignedClasses = ["SideDrawer", props.open ? "open" : "close"].join(' ');
  return (
    <Fragment>
      <Backdrop
        show={props.open}
        clicked={props.closed} />
      <div className={assignedClasses}>
        <Button clicked={props.closed}>
          <CancelIcon className="icon-cancel" />
        </Button>
        <Logo />
        <NavigationItems />
      </div>
    </Fragment>
  )
}

export default SideDrawer
