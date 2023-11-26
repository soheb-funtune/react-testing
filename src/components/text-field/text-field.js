import React, { useState } from "react";

const TextField = () => {
  const [firstName, setFirstName] = useState("");
  return (
    <div>
      <button onClick={() => setFirstName("Soheb")}>set Soheb</button>
      <p> {firstName}</p>
      <input
        type="text"
        name="first-name"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
  );
};

export default TextField;
