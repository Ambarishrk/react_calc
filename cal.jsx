import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  
  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Calculator</h1>
      <div style={{
        display: 'inline-block',
        border: '1px solid black',
        padding: '20px',
        borderRadius: '10px'
      }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={input}
            readOnly
            style={{ width: '100%', height: '40px', fontSize: '18px', textAlign: 'right' }}
          />
        </div>
        <div>
          {['7', '8', '9', '/'].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>{value}</button>
          ))}
        </div>
        <div>
          {['4', '5', '6', '*'].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>{value}</button>
          ))}
        </div>
        <div>
          {['1', '2', '3', '-'].map((value) => (
            <button key={value} onClick={() => handleClick(value)}>{value}</button>
          ))}
        </div>
        <div>
          {['0', '.', '=', '+'].map((value) => (
            <button
              key={value}
              onClick={() => value === '=' ? calculateResult() : handleClick(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <div>
          <button onClick={clearInput}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;