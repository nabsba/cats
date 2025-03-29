import * as React from 'react';
import { loaders } from '../types/loaders';
import getLoader from './ListLoaders';

const Loader: React.FC<{ typeLoader: loaders }> = ({ typeLoader }) => {
  return <div className="loader-container">{getLoader(typeLoader)}</div>;
};

export default Loader;
