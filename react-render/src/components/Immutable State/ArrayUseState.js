import React, { useState } from "react";

const initialState = ["Bruce", "wayne"];
export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initialState);
  const handleClick = () => {
    // persons.push("Clark");
    // persons.push("Kent");
    // setPersons(persons);
    const newPersons = [...persons];
    newPersons.push("clark");
    newPersons.push("Kent");
    setPersons(newPersons);
  };
  console.log("ArrayuseState render");
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};
