import React from 'react';

function Dots(props) {
  const { selected, data } = props;
  return(
    <ul className="dots">
      {data.map((item, index) => {
        return (
          <li key={index} value={index} className={selected === index ? 'dot selected' : 'dot'}></li>
        );
      })}
    </ul>
  );
} 

export default Dots;