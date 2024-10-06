import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Sample ReactJS-GitHub Actions Test/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders subheader text', () => {
  render(<App />);
  const subheaderElement = screen.getByText(/A responsive and dynamic landing page/i);
  expect(subheaderElement).toBeInTheDocument();
});

test('background gradient changes over time', () => {
  jest.useFakeTimers();
  const { container } = render(<App />);
  const initialBackground = container.firstChild.style.background;
  
  jest.advanceTimersByTime(100);
  
  const updatedBackground = container.firstChild.style.background;
  expect(updatedBackground).not.toBe(initialBackground);
});