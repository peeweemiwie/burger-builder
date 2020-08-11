import React, { Fragment, Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // getSnapshotBeforeUpdate() {
  //   console.log('[OrderSummary] getSnapshotBeforeUpdate')
  // }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(item => {
        return <li key={item}>
          <span style={{ textTransform: 'capitalize' }}>{item}</span>
          : {this.props.ingredients[item]}
        </li>
      })
    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button
          clicked={this.props.purchaseCancelled}
          btnType="Danger">CANCEL</Button>
        <Button
          clicked={this.props.purchaseProceeded}
          btnType="Success">Order</Button>
      </Fragment>
    )
  }
}


export default OrderSummary 
