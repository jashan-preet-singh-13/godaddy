import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListCard from './ListCard';
import { useRouter } from 'next/navigation';


jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('ListCard Component', () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    pushMock.mockReset();
    (useRouter).mockReturnValue({ push: pushMock });
  });

  it('should render the name and navigate on click', () => {
    const name = 'test-repo';
    render(<ListCard name={name} />);

    fireEvent.click(screen.getByRole('button'));

    expect(pushMock).toHaveBeenCalledWith(`/repo/${name}`);
  });

  it('should navigate on "Enter" key press', () => {
    const name = 'test-repo';
    render(<ListCard name={name} />);

    fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter', code: 'Enter' });

    expect(pushMock).toHaveBeenCalledWith(`/repo/${name}`);
  });

  it('should navigate on "Space" key press', () => {
    const name = 'test-repo';
    render(<ListCard name={name} />);

    fireEvent.keyDown(screen.getByRole('button'), { key: ' ', code: 'Space' });

    expect(pushMock).toHaveBeenCalledWith(`/repo/${name}`);
  });
});
