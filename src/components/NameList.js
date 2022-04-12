import React from "react";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const NameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>);
  return <div>{NameList}</div>;
}

export default NameList;
