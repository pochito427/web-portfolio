import React from 'react';
import { render, screen } from '../../tests/test-utils';
import VideoComponent from '@/components/VideoComponent';

describe('VideoComponent', () => {
  it('renders an iframe with a title and the expected source', () => {
    render(<VideoComponent title="Test video" />);
    const iframe = screen.getByTitle('Test video');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/dhYB84KblU4');
    expect(iframe).toHaveAttribute('allowFullScreen');
  });

  it('uses a default title when none is provided', () => {
    render(<VideoComponent />);
    expect(screen.getByTitle('Video pitch')).toBeInTheDocument();
  });
});
