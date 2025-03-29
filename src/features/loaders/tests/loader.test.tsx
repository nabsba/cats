import { render, screen } from '@testing-library/react';
import Loader from '../components/Loader';

describe('Loader Component', () => {
  test("renders spinner when type is 'spinner'", () => {
    render(<Loader typeLoader="spinner" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("renders dots when type is 'dots'", () => {
    render(<Loader typeLoader="dots" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders spinner when  type is "spinner"', () => {
    render(<Loader typeLoader="spinner" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
