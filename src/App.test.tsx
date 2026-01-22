import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main hero headline', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /intermediación inteligente para cerrar negocios sin fricción/i,
    })
  ).toBeInTheDocument();
});
