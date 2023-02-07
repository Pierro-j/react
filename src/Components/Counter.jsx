import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(props.initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCount = event.target.elements.newCount.value;
    setCount(newCount);
    console.log({count});
  };

  return (
    <div className='Number'>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <form onSubmit={handleSubmit}>
        <input type="number" name="newCount" placeholder="Espece de compteur" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Counter;