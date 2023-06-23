import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Buttons from '../components/buttons';

describe('Buttons Component', () => {
  it('should call onButtonClick with the correct value when a button is clicked', () => {
    const onButtonClick = jest.fn();
    const { getByText } = render(<Buttons onButtonClick={onButtonClick} />);

    fireEvent.click(getByText('AC'));
    expect(onButtonClick).toHaveBeenCalledWith('AC');

    fireEvent.click(getByText('+/-'));
    expect(onButtonClick).toHaveBeenCalledWith('+/-');

    fireEvent.click(getByText('%'));
    expect(onButtonClick).toHaveBeenCalledWith('%');

    fireEvent.click(getByText('÷'));
    expect(onButtonClick).toHaveBeenCalledWith('÷');

    fireEvent.click(getByText('7'));
    expect(onButtonClick).toHaveBeenCalledWith('7');

    fireEvent.click(getByText('8'));
    expect(onButtonClick).toHaveBeenCalledWith('8');

    fireEvent.click(getByText('9'));
    expect(onButtonClick).toHaveBeenCalledWith('9');

    fireEvent.click(getByText('x'));
    expect(onButtonClick).toHaveBeenCalledWith('x');

    fireEvent.click(getByText('4'));
    expect(onButtonClick).toHaveBeenCalledWith('4');

    fireEvent.click(getByText('5'));
    expect(onButtonClick).toHaveBeenCalledWith('5');

    fireEvent.click(getByText('6'));
    expect(onButtonClick).toHaveBeenCalledWith('6');

    fireEvent.click(getByText('-'));
    expect(onButtonClick).toHaveBeenCalledWith('-');

    fireEvent.click(getByText('1'));
    expect(onButtonClick).toHaveBeenCalledWith('1');

    fireEvent.click(getByText('2'));
    expect(onButtonClick).toHaveBeenCalledWith('2');

    fireEvent.click(getByText('3'));
    expect(onButtonClick).toHaveBeenCalledWith('3');

    fireEvent.click(getByText('+'));
    expect(onButtonClick).toHaveBeenCalledWith('+');

    fireEvent.click(getByText('0'));
    expect(onButtonClick).toHaveBeenCalledWith('0');

    fireEvent.click(getByText('.'));
    expect(onButtonClick).toHaveBeenCalledWith('.');

    fireEvent.click(getByText('='));
    expect(onButtonClick).toHaveBeenCalledWith('=');
  });
});
