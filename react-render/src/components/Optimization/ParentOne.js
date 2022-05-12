import React, { useState } from "react";

// import { ChildOne } from "./ChildOne";

export const ParentOne = ({ children, newCount }) => {
  const [count, setCount] = useState(0);

  console.log("ParentOne render");
  console.log(newCount);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count -{count}</button>

      {/* <ChildOne /> */}
      {children}
    </div>
  );
};
