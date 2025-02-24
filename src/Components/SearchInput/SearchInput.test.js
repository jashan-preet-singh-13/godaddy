import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import SearchInput from './SearchInput';


const mockData = [
  { name: 'React' },
  { name: 'Vue' },
  { name: 'Angular' },
  { name: 'Svelte' },
];

describe('SearchInput component', () => {

  it('renders correctly with placeholder text', () => {
    const setData = jest.fn();

    render(<SearchInput placeholder="Search Repos..." setData={setData} data={mockData} />);
  
    const input = screen.getByPlaceholderText('Search Repos...');
    expect(input).toBeInTheDocument();
  });

 
  it('has an initial empty value', () => {
    const setData = jest.fn();

    render(<SearchInput setData={setData} data={mockData} />);
    
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toHaveValue('');
  });

  
  it('filters data correctly on input change', () => {
    const setData = jest.fn();
    render(<SearchInput setData={setData} data={mockData} />);
    
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'Re' } });
    
    expect(input).toHaveValue('Re');
    
    expect(setData).toHaveBeenCalledWith([
      { name: 'React' }
    ]);
  });

  it('should call setData with an empty array if no matches are found', () => {
    const setData = jest.fn();
    render(<SearchInput setData={setData} data={mockData} />);
    
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'Next' } });
    
    expect(input).toHaveValue('Next');
    
    expect(setData).toHaveBeenCalledWith([]);
  });
});
