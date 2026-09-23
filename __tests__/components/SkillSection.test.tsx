import React from 'react';
import { render, screen } from '../../tests/test-utils';
import SkillSection from '@/components/SkillSection';

describe('SkillSection', () => {
  it('renders the section heading and all skills', () => {
    render(<SkillSection />);
    expect(screen.getByRole('region', { name: 'My Skills' })).toBeInTheDocument();
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
  });
});
