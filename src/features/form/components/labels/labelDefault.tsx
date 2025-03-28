import { LabelProps } from 'features/form/types/form';
import React from 'react';

const LabelDefault: React.FC<LabelProps> = ({ htmlFor, text }) => {
  return <label htmlFor={htmlFor}>{text}</label>;
};

export default LabelDefault;
