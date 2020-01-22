import React from 'react';

function Slide(props) {
  return (
    <li className="slide">
      <img alt="" src={props.src} />
      <p className="legend">{props.legend}</p>
    </li>
  );
}

export default Slide;