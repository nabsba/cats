/* eslint-disable */

import ErrorComponent from 'features/errors/components/ErrorComponent';
import { Loader } from 'features/loaders';
import { SUCCESS_STATUS } from '../datas/success';

const ComponentWithLogicDataFetching =
  (Component: any) =>
  ({ fetchResult, isLoading,  typeLoader, typeError }: any) => {

    if (isLoading)
      return (
        <div data-testid="testID-loading">
          <Loader typeLoader={typeLoader} />
        </div>
      );
    if (fetchResult.error)
      return (
        <div data-testid="testID-error">
          <ErrorComponent typeError={typeError} messageCode={fetchResult.messageCode} />
        </div>
      );
      if(fetchResult.statusCode == SUCCESS_STATUS.OK)
    return <div  data-testid="testID-component"><Component data={fetchResult.data} /> </div>;
  };

export default ComponentWithLogicDataFetching;
