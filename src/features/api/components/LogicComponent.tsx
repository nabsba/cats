import ErrorComponent from 'features/errors/components/ErrorComponent';
import { errors } from 'features/errors/types/errors';
import { Loader } from 'features/loaders';
import { loaders } from 'features/loaders/types/loaders';
import React from 'react';
import { SUCCESS_STATUS } from '../datas/success';
import { FetchResult } from '../types/fetchData';

interface WrappedComponentProps<T> {
  data: T;
}
interface HOCProps {
  fetchResult: FetchResult;
  loading: boolean;
  typeLoader: loaders;
  typeError: errors;
}

const ComponentWithLogicDataFetching = <T,>(
  Component: React.ComponentType<WrappedComponentProps<T>>,
) => {
  const EnhancedComponent: React.FC<
    HOCProps & { fetchResult: FetchResult }
  > = ({ fetchResult, loading, typeLoader, typeError }) => {
    if (loading) {
      return (
        <div data-testid="testID-loading">
          <Loader typeLoader={typeLoader} />
        </div>
      );
    }
    if (fetchResult.error) {
      return (
        <div data-testid="testID-error">
          <ErrorComponent fetchResult={fetchResult} typeError={typeError} />
        </div>
      );
    }
    if (fetchResult.statusCode === SUCCESS_STATUS.OK) {
      return (
        <div data-testid="testID-component">
          <Component data={fetchResult.data as T} />
        </div>
      );
    }
    return null;
  };

  return EnhancedComponent;
};

export default ComponentWithLogicDataFetching;
