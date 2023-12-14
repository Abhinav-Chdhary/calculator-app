import React, { useState } from "react";

export default function App() {
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");
  const handleAddition = () => {
    setTotal(total + parseFloat(input));
    setInput("");
  };
  const handleSubstraction = () => {
    setTotal(total - parseFloat(input));
    setInput("");
  };
  const handleMultiplication = () => {
    setTotal(total * parseFloat(input));
    setInput("");
  };
  const handleDivision = () => {
    setTotal(total / parseFloat(input));
    setInput("");
  };
  const handleInputReset = () => {
    setInput("");
  };
  const handleResultReset = () => {
    setTotal(0);
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
          <button onClick={handleInputReset} className="rstInput">
            Reset Input
          </button>
        </li>
        <li>
          <button onClick={handleResultReset} className="rstResult">
            Reset result
          </button>
        </li>
      </ul>
    </div>
  );
}
