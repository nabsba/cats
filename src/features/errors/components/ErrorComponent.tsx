import * as React from 'react';
import { errors } from '../types/errors';
import getError from './ListErrors';
import { ErrorMessageKey } from 'features/api';

const ErrorComponent: React.FC<{
  typeError: errors;
  messageCode: ErrorMessageKey;
}> = ({ typeError, messageCode }) => {
  return (
    <div className="error-container">{getError(typeError, messageCode)}</div>
  );
};

export default ErrorComponent;
