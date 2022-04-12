import React from "react";

// function Greet(){
//     return <h1>Hello Yug</h1>
// }

//destructing const Greet = (props) => { to const Greet = ({name,heroName}) => {

const Greet = ({name, heroName}) => {
  console.log(name);
  return (
    <div>
      <h1>Hello {name}</h1>
      <h1>Lol{heroName}</h1>
    </div>
  );
};
export default Greet;
