
import React, { useState } from "react";

const App = () => {
  const [digits, setDigits] = useState("");

  // Format digits into (123) 456-7890
  const formatPhoneNumber = (value) => {
    const numbers = value.slice(0, 10);

    if (numbers.length === 0) return "";

    if (numbers.length < 4) {
      return `(${numbers}`;
    }

    if (numbers.length < 7) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    }

    return `(${numbers.slice(0, 3)}) ${numbers.slice(
      3,
      6
    )}-${numbers.slice(6)}`;
  };

  const handleChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setDigits(onlyNumbers.slice(0, 10));
  };

  const handleSubmit = () => {
    setDigits("");
  };

  const isComplete = digits.length === 10;

  return (
    <div>
      <button disabled={!isComplete} onClick={handleSubmit}>
        Submit
      </button>

      <input
        type="text"
        value={formatPhoneNumber(digits)}
        onChange={handleChange}
        placeholder="(555) 555-5555"
      />
    </div>
  );
};

export default App;
