import { ErrorMessageKey } from 'features/api';
import { errors } from '../types/errors';
import DefaultError from './elements/DefaultError';

const getError = (type: errors, messageCode: ErrorMessageKey) => {
  switch (type) {
    case 'server':
      return <DefaultError messageCode={messageCode} />;

    default:
      return <DefaultError messageCode={messageCode} />; // Default loader
  }
};

export default getError;
