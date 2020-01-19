import React from 'react';
import Button from './Button';
import Slider from './Slider';

function Container() {
  return (
  <div className="carousel">
    <Button className="prev" />
    <Slider />
    <Button className="next" />
  </div>
  );
}

export default Container;