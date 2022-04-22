import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  // const isEven = () => {
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return counterOne % 2 === 0;
  // };
  return (
    <div>
      Counter
      <div>
        <button onClick={incrementOne}>1-{counterOne}</button>
        <span>{isEven ? "Even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>2-{counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
