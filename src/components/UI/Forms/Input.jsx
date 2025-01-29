import React from 'react'
import { useState } from 'react';

const Input = ({onValueChange }) => {

    const [inputValue, setInputValue] = useState(0);

  function handleChange(event) {
    const newValue = +event.target.value; // Convert to number
    setInputValue(newValue);
    onValueChange(newValue); // Pass value up to ConfigureCounter
  }
    return <input type="number" onChange={handleChange} value={inputValue}  />;
  };

export default Input