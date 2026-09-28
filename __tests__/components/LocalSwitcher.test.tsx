import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../tests/test-utils';
import LocalSwitcher from '@/components/LocalSwitcher';

const mockReplace = jest.requireMock('next/navigation').useRouter().replace;

describe('LocalSwitcher', () => {
  beforeEach(() => {
    mockReplace.mockClear();
  });
  it('renders a language selector', () => {
    render(<LocalSwitcher />);
    expect(screen.getByLabelText('Select language')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'English' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Español' })).toBeInTheDocument();
  });

  it('changes locale on selection', async () => {
    render(<LocalSwitcher />);
    const select = screen.getByLabelText('Select language');
    fireEvent.change(select, { target: { value: 'es' } });
    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith('/es');
    });
  });
});
