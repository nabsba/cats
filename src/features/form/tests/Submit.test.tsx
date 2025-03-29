import { render, screen } from '@testing-library/react';
import SubmitButtonDefault from '../components/submits/SubmitDefault';

describe('SubmitButtonDefault Component', () => {
  it('renders the default submit text when no text prop is provided', () => {
    render(<SubmitButtonDefault disabled={false} />);

    // Check if the button has the default text 'Submit'
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders custom text when text prop is provided', () => {
    render(<SubmitButtonDefault disabled={false} />);

    // Check if the button has the custom text 'Save Changes'
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('disables the button when disabled prop is true', () => {
    render(<SubmitButtonDefault disabled={true} />);

    // Check if the button is disabled
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    expect(buttonElement).toBeDisabled();
  });

  it('enables the button when disabled prop is false', () => {
    render(<SubmitButtonDefault disabled={false} />);

    // Check if the button is enabled
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    expect(buttonElement).toBeEnabled();
  });
});
