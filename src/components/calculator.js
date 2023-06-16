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
    <section className="calculator">
      <Result result={calculatorData.next || calculatorData.total || '0'} />
      <Buttons onButtonClick={handleButtonClick} />
    </section>
  );
};

export default Calculator;
