import { SubmitButtonProps } from 'features/form/types/form';
import React from 'react';

// !improvment    remove hard coding text.
const SubmitButtonDefault: React.FC<SubmitButtonProps> = ({
  disabled = false,
}) => {
  return (
    <button type="submit" disabled={disabled}>
      Submit
    </button>
  );
};
export default SubmitButtonDefault;
