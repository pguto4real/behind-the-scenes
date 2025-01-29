import React from 'react'
import { useState } from 'react';

const Input = ({ onChange, value }) => {
    return <input type="number" onChange={onChange} value={value} />;
  };

export default Input