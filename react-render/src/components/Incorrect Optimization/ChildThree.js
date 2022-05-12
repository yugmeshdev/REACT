import React from "react";

export const ChildThree = ({children, name}) => {
  console.log("Chilthree render");
  return (
    <div>
      ChildOne components
      {children} {name}
    </div>
  );
};

export const MemoizedChildThree = React.memo(ChildThree);
