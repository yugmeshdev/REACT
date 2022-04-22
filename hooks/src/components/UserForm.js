import React, { useState } from "react";
import useInput from "./useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setlastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${firstName} ${lastName}`);
  };
  return (
    <div>
      UserForm
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            {...bindFirstName}
            type="text"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            // value={lastName}
            // onChange={(e) => setlastName(e.target.value)}
            {...bindLastName}
            type="text"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
