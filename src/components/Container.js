import React from 'react';
import Button from './Button';
import Slide from './Slide';
import { data } from './Data';

class Container extends React.Component {

  render() {
    return (
      <div className="container">
          <div className="carousel">
            <Button className="prev" />
            <div className="slider-wrapper">
              <ul className="slider">
                {data.map((img, index) => {
                  return <Slide key={img.src} src={img.src} legend={img.legend} />
                })}
              </ul>
            </div>
            <Button className="next"/>
          </div>
      </div>
    );
  }
}

export default Container;