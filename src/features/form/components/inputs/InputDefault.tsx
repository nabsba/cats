import { InputProps } from 'features/form/types/form';
import React from 'react';

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
