import React, { useState } from "react";

import Card from "../Card/Card";

const UseState = () => {
  const [name, setName] = useState("Boss");
  const [address, setAddress] = useState("Canada");
  return (
    <Card>
      <h1>{name}</h1>
      <h1>{address}</h1>
      <button onClick={() => setName("Don")}>Set the Name</button>
      <button onClick={() => setAddress("Poland")}>Set the Address </button>
    </Card>
  );
};

export default UseState;
