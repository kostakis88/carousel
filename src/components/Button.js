import React from 'react';

class Button extends React.Component {
  render() {
    const { className, goToNextSlide, goToPrevSlide } = this.props;
    const slideToGo = goToNextSlide ? goToNextSlide : goToPrevSlide;
    return (
      <button type="button" className={ 'button ' + className } onClick={slideToGo}/>
    );
  }
}

export default Button;