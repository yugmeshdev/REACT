import React, { useState } from "react";

function useCounter(initalVal) {
  const [count, setCount] = useState(initalVal);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
