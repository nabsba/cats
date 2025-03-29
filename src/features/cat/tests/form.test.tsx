import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { formMessage } from 'features/cat/datas/constants';
import MyFormCat from '../components/elements/Form';
import { FormFieldProps } from 'features/form';

// Mock dependencies
jest.mock('features/form', () => ({
  FormFieldInputAndError: ({ label, name, formik }: FormFieldProps) => (
    <div>
      <label>{label}</label>
      <input
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        data-testid={`input-${name}`}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span data-testid={`error-${name}`}>{formik.errors[name]}</span>
      )}
    </div>
  ),
}));

jest.mock('features/form/components/submits/SubmitDefault', () => {
  return function SubmitButtonDefault({ disabled }: { disabled: boolean }) {
    return (
      <button type="submit" disabled={disabled} data-testid="submit-button">
        Submit
      </button>
    );
  };
});

jest.mock('features/cat/datas/constants', () => ({
  formMessage: {
    required: 'This field is required',
    name: 'Only letters, spaces, hyphens, and apostrophes allowed (max 20)',
  },
}));

describe('MyFormCat', () => {
  const mockHandleSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form with input and submit button', () => {
    render(<MyFormCat handleSubmit={mockHandleSubmit} />);
    // !improvment  could target more explicitely label.
    expect(
      screen.getByText(
        "Select the length of the cat fact you'd like to receive.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId('input-length')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeDisabled(); // Initially disabled
  });

  it('displays validation error for invalid input', async () => {
    render(<MyFormCat handleSubmit={mockHandleSubmit} />);
    const input = screen.getByTestId('input-length');

    fireEvent.change(input, { target: { value: '10' } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByTestId('error-length')).toHaveTextContent(
        formMessage.lengthError,
      );
      expect(screen.getByTestId('submit-button')).toBeDisabled();
    });
  });

  it('enables submit button and calls handleSubmit with valid input', async () => {
    render(<MyFormCat handleSubmit={mockHandleSubmit} />);
    const input = screen.getByTestId('input-length');

    fireEvent.change(input, { target: { value: '20' } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.queryByTestId('error-length')).not.toBeInTheDocument();
      expect(screen.getByTestId('submit-button')).not.toBeDisabled();
    });

    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(mockHandleSubmit).toHaveBeenCalledWith('20'); // "Fluffy".length
    });
  });

  it('disables submit button when form is pristine', () => {
    render(<MyFormCat handleSubmit={mockHandleSubmit} />);
    expect(screen.getByTestId('submit-button')).toBeDisabled(); // formik.dirty is false
  });
});
