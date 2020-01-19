import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button type="button" className={ 'button ' + this.props.className } />
    );
  }
}

export default Button;