/* eslint-disable */
import * as React from 'react';
import { errors } from '../types/errors';
import getError from './ListErrors';
import styles from '../styles/error.module.css';

const ErrorComponent: React.FC<{
  typeError: errors;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchResult: any;
}> = ({ typeError, fetchResult }) => {
  return (
    <div className={styles['error-container']}>
      {getError(typeError, fetchResult.messageCode)}
    </div>
  );
};

export default ErrorComponent;
