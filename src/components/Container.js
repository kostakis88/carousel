import React from 'react';
import Button from './Button';
import Slide from './Slide';
import { data } from './Data';

class Container extends React.Component {
  state = {
    activeIndex: 0
  };

  handleNextClick = () => {
    this.setState({
      activeIndex: (this.state.activeIndex < 3) ? (this.state.activeIndex + 1) : this.state.activeIndex
    });
  }

  handlePrevClick = () => {
    this.setState({
      activeIndex: (this.state.activeIndex > 0) ? (this.state.activeIndex - 1) : this.state.activeIndex
    });
  }

  render() {
    const transformStyles = {
      transform: `translate3d(${this.state.activeIndex * (-100)}%, 0px, 0px)`,
      transitionDuration: '350ms' 
    };
    return (
      <div className="container">
          <div className="carousel">
            <Button className="prev" goToPrevSlide={this.handlePrevClick}/>
            <div className="slider-wrapper">
              <ul className="slider" style={transformStyles}>
                {data.map((img, index) => {
                  return <Slide key={img.src} src={img.src} legend={img.legend} selected={index === this.state.activeIndex ? 'selected': ''} />
                })}
              </ul>
            </div>
            <Button className="next" goToNextSlide={this.handleNextClick}/>
          </div>
      </div>
    );
  }
}

export default Container;