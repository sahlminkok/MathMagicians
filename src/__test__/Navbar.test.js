import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders without error', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.queryByRole('navigation')).not.toBeNull();
  });

  it('renders the correct links', () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const mathMagiciansLink = screen.getByRole('link', { name: 'Math Magicians' });
    expect(mathMagiciansLink.getAttribute('href')).toBe('/');

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink.getAttribute('href')).toBe('/');

    const calculatorLink = screen.getByRole('link', { name: 'Calculator' });
    expect(calculatorLink.getAttribute('href')).toBe('/calculator');

    const quotesLink = screen.getByRole('link', { name: 'Quotes' });
    expect(quotesLink.getAttribute('href')).toBe('/quotes');
  });
});
