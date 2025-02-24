import React from 'react';
import { render, screen } from '@testing-library/react';
import DefaultMessage from './DefaultMessage';
import '@testing-library/jest-dom';

describe('DefaultMessage', () => {
  it('renders the default message when no message prop is provided', () => {
    render(<DefaultMessage />);
    const messageElement = screen.getByText('No data available');
    expect(messageElement).toBeInTheDocument();
  });

  it('renders the provided message prop', () => {
    const testMessage = 'Custom message';
    render(<DefaultMessage message={testMessage} />);
    const messageElement = screen.getByText(testMessage);
    expect(messageElement).toBeInTheDocument();
  });
});
