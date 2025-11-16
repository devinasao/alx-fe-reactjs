// src/components/Counter.jsx
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const styleBox = {
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '8px',
    display: 'inline-block',
    minWidth: '220px',
    textAlign: 'center'
  };

  const btnStyle = {
    padding: '8px 12px',
    margin: '6px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none'
  };

  return (
    <div style={styleBox}>
      <p style={{ margin: '6px 0' }}>Current Count: <strong>{count}</strong></p>
      <div>
        <button style={btnStyle} onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button style={btnStyle} onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        <button style={btnStyle} onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
