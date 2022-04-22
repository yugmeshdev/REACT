import React, { useState } from "react";
import useCounter from "./useCounter";

function CustomCounterOne() {
  const [count, increment, decrement, reset] = useCounter(10);
  return (
    <div>
      CustomCounterOne-{count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CustomCounterOne;
