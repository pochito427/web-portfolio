import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '@/app/not-found';

describe('NotFound', () => {
  it('renders the not found page with a return home link', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<NotFound />);
    expect(screen.getByRole('heading', { name: 'Page Not Found' })).toBeInTheDocument();
    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Return Home' })).toHaveAttribute('href', '/');
    consoleError.mockRestore();
  });
});
