import * as React from 'react';
import { errors } from '../types/errors';
import getError from './ListErrors';
import styles from '../styles/error.module.css';
import { ErrorMessageKey, FetchResult } from 'features/api';

const ErrorComponent: React.FC<{
  typeError: errors;

  fetchResult: FetchResult;
}> = ({ typeError, fetchResult }) => {
  return (
    <div className={styles['error-container']}>
      {getError(typeError, fetchResult.messageCode as ErrorMessageKey)}
    </div>
  );
};

export default ErrorComponent;
