import { render, screen } from '@testing-library/react';
import App from './App';
import AdminDash from './AdminDash';

test('renders learn react link', () => {
  render(<AdminDash />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
