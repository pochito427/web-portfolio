import React from 'react';
import { render, screen, waitFor } from '../../tests/test-utils';
import AboutSection from '@/components/AboutSection';

describe('AboutSection', () => {
  it('renders the about heading and paragraphs', () => {
    render(<AboutSection />);
    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument();
    expect(screen.getByText(/specialized full-stack developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Download CV/)).toBeInTheDocument();
  });

  it('renders the video iframe with a title', async () => {
    render(<AboutSection />);
    await waitFor(() => {
      const iframe = screen.getByTitle('Video pitch about Alfonso Jimenez');
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute('allowFullScreen');
    });
  });
});
