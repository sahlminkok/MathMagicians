import React from 'react';
import renderer from 'react-test-renderer';
// import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Result from '../components/result';

describe('Result', () => {
  // Jest: tests with snapshots
  test('Result Component renders correctly', () => {
    const tree = renderer.create(<Result />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
