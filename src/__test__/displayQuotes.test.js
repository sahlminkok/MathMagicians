import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quotes from '../components/displayQuotes';

describe('Quotes', () => {
  it('renders loading state initially', () => {
    render(<Quotes />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error message when there is an error', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(new Error('Fake error')));

    render(<Quotes />);

    await waitFor(() => {
      expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
    });

    global.fetch.mockRestore();
  });

  it('renders quotes correctly when data is fetched successfully', async () => {
    const mockData = [
      { quote: 'Quote 1', author: 'Author 1' },
      { quote: 'Quote 2', author: 'Author 2' },
    ];
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData),
    }));

    render(<Quotes />);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
      expect(screen.queryByText('Something went wrong!')).not.toBeInTheDocument();

      expect(screen.getByText('Quote 1')).toBeInTheDocument();
      expect(screen.getByText('Author 1')).toBeInTheDocument();
      expect(screen.getByText('Quote 2')).toBeInTheDocument();
      expect(screen.getByText('Author 2')).toBeInTheDocument();
    });

    global.fetch.mockRestore();
  });
});
