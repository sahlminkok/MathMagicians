import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ onButtonClick }) => (
  <div className="buttons">
    <button data-testid="button" type="button" className="grayColor" onClick={() => onButtonClick('AC')}>AC</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('+/-')}>+/-</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('%')}>%</button>
    <button type="button" className="orangeColor" onClick={() => onButtonClick('÷')}>÷</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('7')}>7</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('8')}>8</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('9')}>9</button>
    <button type="button" className="orangeColor" onClick={() => onButtonClick('x')}>x</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('4')}>4</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('5')}>5</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('6')}>6</button>
    <button type="button" className="orangeColor" onClick={() => onButtonClick('-')}>-</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('1')}>1</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('2')}>2</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('3')}>3</button>
    <button type="button" className="orangeColor" onClick={() => onButtonClick('+')}>+</button>
    <button type="button" className="twoTimesWidth grayColor" onClick={() => onButtonClick('0')}>0</button>
    <button type="button" className="grayColor" onClick={() => onButtonClick('.')}>.</button>
    <button type="button" className="orangeColor" onClick={() => onButtonClick('=')}>=</button>
  </div>
);

Buttons.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Buttons;
