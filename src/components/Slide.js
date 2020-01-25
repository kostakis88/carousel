import React from 'react';

function Slide(props) {
  const {src, legend} = props;
  return (
    <li className="slide">
      <img alt="" src={src} />
      <p className="legend">{legend}</p>
    </li>
  );
}

export default Slide;