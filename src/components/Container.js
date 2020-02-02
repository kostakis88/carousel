import React from 'react';
import Button from './Button';
import Slide from './Slide';
import Dots from './Dots';
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
    const { activeIndex } = this.state;
    const transformStyles = {
      transform: `translate3d(${activeIndex * (-100)}%, 0px, 0px)`,
      transitionDuration: '350ms' 
    };
    const disabledPrev = activeIndex === 0 ? ' disabled' : '';
    const disabledNext = activeIndex === 3 ? ' disabled' : '';
    return (
      <div className="container">
          <div className="carousel">
            <Button className={"button prev" + disabledPrev} goToPrevSlide={this.handlePrevClick}/>
            <div className="slider-wrapper">
              <ul className="slider" style={transformStyles}>
                {data.map((img, index) => {
                  return <Slide key={img.src} src={img.src} legend={img.legend} selected={index === activeIndex ? 'selected': ''} />
                })}
              </ul>
            </div>
            <Button className={"button next" + disabledNext} goToNextSlide={this.handleNextClick}/>
            <p className="status">{activeIndex + 1} of 4</p>
            <Dots selected={activeIndex} data={data}/>
          </div>
      </div>
    );
  }
}

export default Container;