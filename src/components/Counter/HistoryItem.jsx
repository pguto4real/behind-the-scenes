import React from 'react'
import { useState } from 'react';
import { log } from '../../log';

const HistoryItem = ({ count }) => {
  log('<HistoryItem /> rendered', 3);
  
    const [selected, setSelected] = useState(false);
  
    function handleClick() {
      setSelected((prevSelected) => !prevSelected);
    }
  
    return (
      <li onClick={handleClick} className={selected ? 'selected' : undefined}>
        {count}
      </li>
    );
}

export default HistoryItem