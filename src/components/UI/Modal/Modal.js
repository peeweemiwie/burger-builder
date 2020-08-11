import React, { Fragment, Component } from 'react'
import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children;
  }

  render() {
    return (
      <Fragment>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClose} />
        <div
          className="Modal"
          style={{
            transform:
              this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
          }}>

          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default Modal
