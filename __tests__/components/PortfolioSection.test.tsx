import React from 'react';
import { render, screen } from '../../tests/test-utils';
import PortfolioSection from '@/components/PortfolioSection';

describe('PortfolioSection', () => {
  it('renders the hero section with a single h1', () => {
    render(<PortfolioSection />);
    const region = screen.getByRole('region');
    expect(region).toBeInTheDocument();
    expect(region.querySelectorAll('h1')).toHaveLength(1);
    expect(screen.getByAltText('Portrait of Alfonso Jimenez')).toBeInTheDocument();
    expect(screen.getByText('FULL-STACK')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders stats and intro text', () => {
    render(<PortfolioSection />);
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('5+')).toBeInTheDocument();
    expect(screen.getByText(/I build full-stack/i)).toBeInTheDocument();
  });
});
