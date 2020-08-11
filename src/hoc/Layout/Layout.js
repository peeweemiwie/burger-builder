import React, { Fragment, Component } from 'react';
import './Layout.scss';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  sideDrawerToggleHandler = () => {
    const toggleState = previousState => {
      return { showSideDrawer: !previousState.showSideDrawer }
    }
    this.setState(toggleState)
  }
  render() {
    return (
      <Fragment>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <Toolbar BurgerClicked={this.sideDrawerToggleHandler} />
        <main className="Content">
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}
export default Layout