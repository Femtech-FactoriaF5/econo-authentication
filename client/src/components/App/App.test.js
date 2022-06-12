import { render, screen } from '@testing-library/react';
import {App} from '.';

test('renders App component', () => {
  render(<App />);
screen.debug();
expect(screen.getByRole('textbox')).toBeInTheDocument();
});
