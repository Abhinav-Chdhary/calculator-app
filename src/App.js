import React, { useRef, useState } from "react";

export default function App() {
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleOperation = (operation) => {
    setTotal(operation(total, parseFloat(input)));
    setInput("");
    inputRef.current.focus();
  };

  const handleInputReset = () => {
    setInput("");
    inputRef.current.focus();
  };

  const handleResultReset = () => {
    setTotal(0);
    inputRef.current.focus();
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
        ref={inputRef}
      />
      <ul className="calOptions">
        <li>
          <button onClick={() => handleOperation((prev, curr) => prev + curr)}>
            Add
          </button>
        </li>
        <li>
          <button onClick={() => handleOperation((prev, curr) => prev - curr)}>
            Subtract
          </button>
        </li>
        <li>
          <button onClick={() => handleOperation((prev, curr) => prev * curr)}>
            Multiply
          </button>
        </li>
        <li>
          <button onClick={() => handleOperation((prev, curr) => prev / curr)}>
            Divide
          </button>
        </li>
        <li>
          <button onClick={handleInputReset} className="rstInput">
            Reset Input
          </button>
        </li>
        <li>
          <button onClick={handleResultReset} className="rstResult">
            Reset Result
          </button>
        </li>
      </ul>
    </div>
  );
}
