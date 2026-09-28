import React from 'react';
import { render, screen } from '../../tests/test-utils';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renders a mailto link and the tagline', () => {
    render(<Footer />);
    const emailLink = screen.getByText('djalfo18@gmail.com');
    expect(emailLink).toHaveAttribute('href', 'mailto:djalfo18@gmail.com');
    expect(screen.getByText(/Let's/i)).toBeInTheDocument();
    expect(screen.getByText(/work/i)).toBeInTheDocument();
    expect(screen.getByText(/together/i)).toBeInTheDocument();
  });
});
