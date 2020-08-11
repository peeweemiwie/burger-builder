import React from 'react';
import './BuildControl.scss';

const BuildControl = (props) => {
  return (
    <div className="BuildControl">
      <div>{props.label}</div>
      <button
        className="Less"
        onClick={props.removed}
        disabled={props.disabled}>Less</button>
      <button
        className="More"
        onClick={props.added}>More</button>
    </div>
  )
}

export default BuildControl
