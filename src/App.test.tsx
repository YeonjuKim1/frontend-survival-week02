import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('App', () => {
  render(React.createElement(App, null));

  screen.getByText(/Hello, wholeman!/);
});
