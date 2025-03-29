import { render, screen } from '@testing-library/react';
import { LabelDefault } from '..';

describe('LabelDefault Component', () => {
  it('renders the label text correctly', () => {
    render(<LabelDefault htmlFor="input-id" text="This is a label" />);

    // Check if the label text is rendered correctly
    const labelElement = screen.getByText(/This is a label/i);
    expect(labelElement).toBeInTheDocument();
  });
});
