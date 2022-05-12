import React, { useState } from "react";
import { ChildTwo, MemoizedChildTwo } from "./ChildTwo";

// import { ChildOne } from "./ChildOne";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vishwas");
  console.log("ParentTwo render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count -{count}</button>
      <button onClick={() => setCount(0)}>Reset -{count}</button>
      <button onClick={() => setName("Codevolutiom")}>Change name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};
