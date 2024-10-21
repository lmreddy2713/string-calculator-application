import React, { useState } from 'react';
import './StringCalculator.css'; // Import the CSS for styling

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const addNumbersInString = (str) => {
    if (!str.trim()) return 0; // Return 0 if the input string is empty or whitespace

    const delimiters = [',', ';', ' ', '\t', '\n', '|', ':'];
    const regex = new RegExp(delimiters.join('|'), 'g');

    const parts = str.split(regex);

    // Check for negative numbers
    const negativeNumbers = parts.filter(num => Number(num) < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    const numbers = parts
      .filter(part => part.trim() !== '') // Remove empty strings
      .map(Number) // Convert strings to numbers
      .filter(num => !isNaN(num)); // Filter out invalid numbers

    return numbers.reduce((acc, num) => acc + num, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setResult(addNumbersInString(input));
    } catch (error) {
      alert(error.message);
    }
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
