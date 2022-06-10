import { render, screen } from '@testing-library/react';
import App from './component';

test('renders App component', () => {
  render(<App />);
screen.debug();
});
