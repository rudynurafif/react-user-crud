import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import axios from 'axios';
import { getAllUsers } from '@/services/userService';

describe('Home', () => {
  it('should have Simple User App text', () => {
    // Arrange
    render(<Home />);

    // Act
    const myElement = screen.getByText('Simple User App');

    // Asert
    expect(myElement).toBeInTheDocument();
  });

  it('should have Add User Button', () => {
    render(<Home />);

    const myElement = screen.getByRole('button', {
      name: 'Add User',
    });

    expect(myElement).toBeInTheDocument();
  });

  it('should have Table element', () => {
    render(<Home />);

    const myElement = screen.getByRole('table');

    expect(myElement).toBeInTheDocument();
  });
});
