import React from 'react';
import Slide from './Slide';

class Slider extends React.Component {
  render() {
    return (
      <div className="slider-wrapper">
        <ul className="slider">
          <Slide />
        </ul>
      </div>
    );
  }
}

export default Slider;