import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count=>count + 1);
    }
  };
  return (
    <div>
      count:{count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
