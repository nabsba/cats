import Spinner from './elements/Spinner';
import Dots from './elements/Dots';
import { loaders } from '../types/loaders';

const getLoader = (type: loaders) => {
  switch (type) {
    case 'spinner':
      return <Spinner />;
    case 'dots':
      return <Dots />;
    default:
      return <Spinner />; // Default loader
  }
};

export default getLoader;
