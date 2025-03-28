import { ErrorMessageProps } from 'features/form/types/form';
import React from 'react';

const ErrorFieldDefault: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return <div style={{ color: 'red' }}>{message}</div>;
};

export default ErrorFieldDefault;
