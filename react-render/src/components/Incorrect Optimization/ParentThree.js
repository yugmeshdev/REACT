import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";

// import { ChildOne } from "./ChildOne";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vishwas");
  console.log("ParentThree render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count -{count}</button>
      <button onClick={() => setCount(0)}>Reset -{count}</button>
      <button onClick={() => setName("Codevolutiom")}>Change name</button>
      <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree>
    </div>
  );
};
