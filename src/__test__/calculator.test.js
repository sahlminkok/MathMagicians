import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  // Jest: tests with snapshots
  test('Calculator Component renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Renders do some Math! text', () => {
    render(<Calculator />);
    expect(screen.getByText(/do some Math!/)).toBeInTheDocument();
  });
});
