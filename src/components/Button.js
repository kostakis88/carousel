import React from 'react';

class Button extends React.Component {
  render() {
    const { className, onClick } = this.props;
    return (
      <button type="button" className={ 'button ' + className } onClick={onClick}/>
    );
  }
}

export default Button;