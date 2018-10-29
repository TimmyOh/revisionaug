import React from 'react';

const MultiGreet = props => {
  let { greets, handleClick } = props;
  return (
    <div className="App">
      <ul className="nobullets">
        {greets.map(greeting => {
          return <li>{greeting.msg}</li>;
        })}
      </ul>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default MultiGreet;
