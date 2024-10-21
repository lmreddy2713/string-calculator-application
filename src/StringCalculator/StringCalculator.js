import React, { useState } from 'react';
import './StringCalculator.css'; // Import the CSS for styling

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for calculation will go here
  };

  return (
    <div className="string-calculator">
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers separated by delimiters"
        />
        <button type="submit">Add</button>
      </form>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default StringCalculator;
