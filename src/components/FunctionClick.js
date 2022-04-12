import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("button clicke");
  }
  return (
    <div>

    {/* clickHandler not clickHandler() because it becomes function call */}
     <button onClick={clickHandler}>Click</button>
     
    </div>
  );
}

export default FunctionClick;
