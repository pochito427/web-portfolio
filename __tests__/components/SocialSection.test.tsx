import React from 'react';
import { render, screen } from '../../tests/test-utils';
import SocialSection from '@/components/SocialSection';

describe('SocialSection', () => {
  it('renders social links with accessible labels', () => {
    render(<SocialSection />);
    expect(screen.getByLabelText('GitHub profile @pochito427')).toBeInTheDocument();
    expect(screen.getByLabelText('Send email to djalfo18@gmail.com')).toBeInTheDocument();
    expect(screen.getByLabelText('Alfonso Jimenez')).toBeInTheDocument();
  });

  it('uses rel="noopener noreferrer" for external links', () => {
    render(<SocialSection />);
    const githubLink = screen.getByLabelText('GitHub profile @pochito427');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('does not open mailto links in a new tab', () => {
    render(<SocialSection />);
    const emailLink = screen.getByLabelText('Send email to djalfo18@gmail.com');
    expect(emailLink).not.toHaveAttribute('target');
    expect(emailLink).not.toHaveAttribute('rel');
  });
});
