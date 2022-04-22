import React from "react";

function Title() {
  console.log("inside title");
  return <div>Title</div>;
}

export default React.memo(Title);
