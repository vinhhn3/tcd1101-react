import React, { useState } from "react";

function Main() {
  const [name, setName] = useState("Vinh Hoang");
  const [age, setAge] = useState(50);

  const handleClick = () => {
    setName("John Wick");
  };

  const handleAgeIncrease = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h1>Main</h1>

      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <button onClick={handleClick}>Change name</button>
      <button onClick={handleAgeIncrease}>Increase age</button>
    </div>
  );
}

export default Main;
