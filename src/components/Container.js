import React from 'react';
import Button from './Button';

function Container() {
  return (
  <div className="carousel">
    <Button className="prev" />
    <Button className="next" />
  </div>
  );
}

export default Container;