import React from 'react';

function Slide(props) {
  const {src, legend, selected} = props;
  return (
    <li className={'slide ' + selected }>
      <img alt="" src={src} />
      <p className="legend">{legend}</p>
    </li>
  );
}

export default Slide;