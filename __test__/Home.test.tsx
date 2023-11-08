import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('should have Simple User App text', () => {
    render(<Home />);

    const myElement = screen.getByText('Simple User App');

    expect(myElement).toBeInTheDocument();
  });

  it('should have Add User Button', () => {
    render(<Home />);

    const myElement = screen.getByRole('button', {
      name: 'Add User',
    });

    expect(myElement).toBeInTheDocument();
  });

});
