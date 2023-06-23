import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
  // Jest: tests with snapshots
  test('Home Component renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders welcome text', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our Page!')).toBeInTheDocument();
  });

  it('renders first paragraph', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to Math Magicians,/)).toBeInTheDocument();
  });
  it('renders second paragraph', () => {
    render(<Home />);
    expect(screen.getByText(/Unleash your calculation powers/)).toBeInTheDocument();
  });
  it('renders third paragraph', () => {
    render(<Home />);
    expect(screen.getByText(/Seek inspiration and unlock your/)).toBeInTheDocument();
  });
});
