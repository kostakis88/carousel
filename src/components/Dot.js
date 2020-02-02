import React from 'react';

function Dot(props) {
  const { className, onDotClick } = props;
  return(
    <li className={className} onClick={onDotClick}></li>
  );
} 

export default Dot;