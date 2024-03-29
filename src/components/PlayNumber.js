import React from 'react';
import Colors from './Colors';

const PlayNumber = (props) => (
  <button
    className="number"
    style={{ backgroundColor: Colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

export default PlayNumber;
