import React from 'react';
import Slide from './Slide';
import { data } from './Data';

class Slider extends React.Component {
  render() {
    return (
      <div className="slider-wrapper">
        <ul className="slider">
          {data.map(img => {
            return <Slide key={img.src} src={img.src} legend={img.legnd} />
          })}
        </ul>
      </div>
    );
  }
}

export default Slider;