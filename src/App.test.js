import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headerElement = screen.getByText(/Sample ReactJS-GitHub Actions Test/i);
  expect(headerElement).toBeInTheDocument();
});