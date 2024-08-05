import React, { useState } from 'react';
import './App.css';

function DivideNumbers() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };
  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const divide = () => {
    try {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      if (isNaN(a) || isNaN(b)) {
        throw new Error('Ambos valores deben ser números');
      }
      if (b === 0) {
        throw new Error('No se puede dividir por cero');
      }
      const result = a / b;
      setResult(`El resultado es: ${result}`);
      setError('');
    } catch (error) {
      setResult('');
      setError(`Error: ${error.message}`);
    } finally {
      console.log('Operación completada');
    }
  };
  return (
    <div>
      <header className='header'>
        <h1>Dividir Números</h1>
        <input
          type="text"
          placeholder="Ingresa el primer número"
          value={num1}
          onChange={handleNum1Change}
          className='input'
        />
        <input
          type="text"
          placeholder="Ingresa el segundo número"
          value={num2}
          onChange={handleNum2Change}
          className='input'
        />
        <button onClick={divide}>Dividir</button>
        <div>
          {result && <p>{result}</p>}
          {error && <p style={{ color: 'gray' }}>{error}</p>}
        </div>
      </header>
    </div>
  );
}
export default DivideNumbers;