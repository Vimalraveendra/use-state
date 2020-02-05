import React, { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("Boss");
  const [address, setAddress] = useState("Canada");
  return (
    <div className="App">
      <Card>
        <h1>{name}</h1>
        <h1>{address}</h1>
        <button onClick={() => setName("Don")}>Set the Name</button>
        <button onClick={() => setAddress("Poland")}>Set the Address </button>
      </Card>
    </div>
  );
}

export default App;
