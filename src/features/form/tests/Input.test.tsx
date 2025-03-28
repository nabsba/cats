import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../components/inputs/InputDefault';

describe('Input Component', () => {
  it('renders input with correct value', () => {
    render(
      <Input
        id="test-input"
        name="test"
        type="text"
        value="hello"
        onChange={() => {}}
        onBlur={() => {}}
      />,
    );

    // Check if the input is rendered with the correct value
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('hello');
  });

  it('triggers onChange when the value changes', () => {
    const handleChange = jest.fn();

    render(
      <Input
        id="test-input"
        name="test"
        type="text"
        value=""
        onChange={handleChange}
        onBlur={() => {}}
      />,
    );

    const inputElement = screen.getByRole('textbox');

    // Simulate user typing in the input
    fireEvent.change(inputElement, { target: { value: 'new value' } });

    // Check if onChange was called
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('triggers onBlur when the input loses focus', () => {
    const handleBlur = jest.fn();

    render(
      <Input
        id="test-input"
        name="test"
        type="text"
        value=""
        onChange={() => {}}
        onBlur={handleBlur}
      />,
    );

    const inputElement = screen.getByRole('textbox');

    // Simulate input losing focus
    fireEvent.blur(inputElement);

    // Check if onBlur was called
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
