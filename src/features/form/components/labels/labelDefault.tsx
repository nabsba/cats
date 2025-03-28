import { LabelProps } from 'features/form/types/form';
import React from 'react';

const LabelDefault: React.FC<LabelProps> = ({ htmlFor, text }) => {
  return (
    <label id={htmlFor} htmlFor={htmlFor} aria-labelledby={htmlFor}>
      {text}
    </label>
  );
};

export default LabelDefault;
