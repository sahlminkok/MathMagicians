import React, { useState } from 'react';
import '../styles/calculator.css';
import Buttons from './buttons';
import Result from './result';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <section className="calc">
      <h2>Let&apos;s do some Math!</h2>
      <div className="calculator">
        <Result result={calculatorData.next || calculatorData.total || '0'} />
        <Buttons onButtonClick={handleButtonClick} />
      </div>
    </section>
  );
};

export default Calculator;
