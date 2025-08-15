import {fireEvent, render,screen} from '@testing-library/react'

import App from '../App'
import '@testing-library/jest-dom'; // 👈 add this

import { expect } from 'vitest';

test('increments count on button click', () => {
  render(<App />);
  
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument();

  // 1st click → expect count is 1
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 1');

  // 2nd click → expect count is 2
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 2');

  // 3rd click → expect count is 3
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 3');
});
 