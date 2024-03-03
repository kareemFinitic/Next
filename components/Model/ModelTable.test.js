import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModelTable from './ModelTable';

test('renders ModelTable component', () => {
  const data = {
    key1: { value: 'value1' },
    key2: { value: 'value2' },
  };
  const isOpen = true;
  const setIsOpen = jest.fn();

  render(<ModelTable data={data} isOpen={isOpen} setIsOpen={setIsOpen} />);

  // Ensure the table headers are present
  expect(screen.getByText('Key')).toBeInTheDocument();
  expect(screen.getByText('Value')).toBeInTheDocument();

  // Ensure the table rows are rendered for each key-value pair in the data
  expect(screen.getByText('key1')).toBeInTheDocument();
  expect(screen.getByText('value1')).toBeInTheDocument();
  expect(screen.getByText('key2')).toBeInTheDocument();
  expect(screen.getByText('value2')).toBeInTheDocument();
});

test('does not render ModelTable component when not open', () => {
  const data = {
    key1: { value: 'value1' },
    key2: { value: 'value2' },
  };
  const isOpen = false;
  const setIsOpen = jest.fn();

  render(<ModelTable data={data} isOpen={isOpen} setIsOpen={setIsOpen} />);

  // Ensure the component does not render anything when not open
  expect(screen.queryByText('Key')).toBeNull();
  expect(screen.queryByText('Value')).toBeNull();
  expect(screen.queryByText('key1')).toBeNull();
  expect(screen.queryByText('value1')).toBeNull();
  expect(screen.queryByText('key2')).toBeNull();
  expect(screen.queryByText('value2')).toBeNull();
});

