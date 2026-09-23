import React from 'react';
import { render, screen } from '../../tests/test-utils';
import ProjectSection from '@/components/ProjectSection';

describe('ProjectSection', () => {
  it('renders the section heading and project list', () => {
    render(<ProjectSection />);
    expect(screen.getByRole('region', { name: 'My Projects' })).toBeInTheDocument();
    expect(screen.getByText('Random Fox Generator')).toBeInTheDocument();
    expect(screen.getByText('Squid Game Grid')).toBeInTheDocument();
  });

  it('renders demo and code links when available', () => {
    render(<ProjectSection />);
    expect(screen.getByLabelText('Demo - Random Fox Generator')).toBeInTheDocument();
    expect(screen.getByLabelText('Code - Random Fox Generator')).toBeInTheDocument();
  });

  it('does not render demo links for projects without a demo', () => {
    render(<ProjectSection />);
    expect(screen.queryByLabelText('Demo - React Router and Redux challenge')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Code - React Router and Redux challenge')).toBeInTheDocument();
  });

  it('renders external links with rel="noopener noreferrer"', () => {
    render(<ProjectSection />);
    const link = screen.getByLabelText('Demo - Random Fox Generator');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
