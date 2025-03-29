import { render, screen } from '@testing-library/react';
import ErrorFieldDefault from '../components/errors/ErrorFieldDefault';

describe('ErrorFieldDefault Component', () => {
  it('renders the error message when message is provided', () => {
    render(<ErrorFieldDefault message="This is an error" />);

    // Check if the error message is displayed
    const errorMessage = screen.getByText(/This is an error/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('does not render anything when no message is provided', () => {
    const { container } = render(<ErrorFieldDefault message="" />);

    // Check that the component does not render anything (empty div)
    expect(container.firstChild).toBeNull();
  });
});
