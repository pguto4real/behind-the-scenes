import { useState } from 'react';

import { log } from '../../log.js';
import HistoryItem from './HistoryItem.jsx';

export default function CounterHistory({ history }) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem key={index} count={count} />
      ))}
    </ol>
  );
}
