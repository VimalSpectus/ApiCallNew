import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from "react-router-dom";
import ObjectShow from './Components/ObjectShow';

test('header is exist or not ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Title/i);
  expect(linkElement).toBeInTheDocument();
});

// test('In the body data are  comming or not', async () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Title/i);
//   expect(linkElement).toBeInTheDocument();
//   await waitFor(() => expect("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=").toHaveBeenCalledTimes(1))
// });

test('renders learn react link', () => {
  render(<App />);
<MemoryRouter>
  <ObjectShow />
</MemoryRouter>
});

