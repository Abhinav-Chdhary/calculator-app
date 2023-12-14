import React, { useState } from "react";

export default function App() {
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState(0);
  const handleAddition = () => {
    setTotal(total + parseFloat(input));
    setInput(0);
  };
  const handleSubstraction = () => {
    setTotal(total - parseFloat(input));
    setInput(0);
  };
  const handleMultiplication = () => {
    setTotal(total * parseFloat(input));
    setInput(0);
  };
  const handleDivision = () => {
    setTotal(total / parseFloat(input));
    setInput(0);
  };
  return (
    <div>
      <h1>Calculator</h1>
      <h2>{total}</h2>
      <input
        type="number"
        placeholder="enter"
        name="value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <ul className="calOptions">
        <li>
          <button onClick={handleAddition}>Add</button>
        </li>
        <li>
          <button onClick={handleSubstraction}>Subtract</button>
        </li>
        <li>
          <button onClick={handleMultiplication}>Multiply</button>
        </li>
        <li>
          <button onClick={handleDivision}>Divide</button>
        </li>
        <li>
          <button className="rstInput">Reset Input</button>
        </li>
        <li>
          <button className="rstResult">Reset result</button>
        </li>
      </ul>
    </div>
  );
}
