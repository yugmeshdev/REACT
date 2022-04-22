import React, { useState } from "react";

function CustomCounterTwo() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      CustomCounterOne-{count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CustomCounterTwo;
