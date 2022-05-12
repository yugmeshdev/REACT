import React from "react";

export const ChildTwo = () => {
  console.log("Chiltwo render");
  return <div>ChildOne components</div>;
};

export const MemoizedChildTwo = React.memo(ChildTwo);
