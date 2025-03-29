import { ErrorMessageProps } from 'features/form/types/form';
import React from 'react';
import styles from '../../styles/errorField.module.css';
const ErrorFieldDefault: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return <div className={styles['errorField']}>{message}</div>;
};

export default ErrorFieldDefault;
