import { InputProps } from 'features/form/types/form';
import React from 'react';
import styles from '../../styles/input.module.css';
const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  onBlur,
  min,
  placeHolder,
}) => {
  return (
    <input
      className={styles['input']}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      min={min}
      placeholder={placeHolder}
    />
  );
};

export default Input;
