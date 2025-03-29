import { render, screen } from '@testing-library/react';

import {
  ComponentWithLogicDataFetching,
  ERROR_MESSAGES,
  FetchResult,
  STATUS_SERVER_ERROR,
  SUCCESS_STATUS,
} from '..';

describe('ComponentWithLogicDataFetching', () => {
  // Mock component to wrap
  const MockComponent = ({ data }: { data: string }) => (
    <div data-testid="mock-component">{data}</div>
  );
  const WrappedComponent = ComponentWithLogicDataFetching(MockComponent);

  it('renders Loader when loading is true', () => {
    const fetchResult = {
      error: false,
      messageCode: '',
      data: null,
      statusCode: 0,
    };
    render(
      <WrappedComponent
        loading={true}
        typeLoader="spinner"
        fetchResult={fetchResult}
        typeError={'server'}
      />,
    );
    expect(screen.getByTestId('testID-loading')).toBeInTheDocument();
    expect(screen.getByText('🔄 Loading...')).toBeInTheDocument();
  });

  it('renders ErrorComponent when isErrorServer is true', () => {
    const messageCode = 'SERVER_ERROR';
    const fetchResult: FetchResult = {
      error: true,
      messageCode: messageCode,
      data: null,
      statusCode: STATUS_SERVER_ERROR.SERVER_ERROR,
    };
    render(
      <WrappedComponent
        fetchResult={fetchResult}
        loading={false}
        typeLoader={'spinner'}
        typeError={'server'}
      />,
    );
    expect(screen.getByTestId('testID-error')).toBeInTheDocument();
    expect(screen.getByText(ERROR_MESSAGES[messageCode])).toBeInTheDocument();
  });

  it('renders wrapped Component when no loading or error', () => {
    const fetchResult: FetchResult = {
      error: false,
      messageCode: '',
      data: 'salut',
      statusCode: SUCCESS_STATUS.OK,
    };

    render(
      <WrappedComponent
        loading={false}
        fetchResult={fetchResult}
        typeLoader={'spinner'}
        typeError={'server'}
      />,
    );
    const component = screen.getByTestId('mock-component');
    expect(component).toBeInTheDocument();
  });

  it('prioritizes loading over isErrorServer', () => {
    const fetchResult: FetchResult = {
      error: false,
      messageCode: '',
      data: null,
      statusCode: STATUS_SERVER_ERROR.SERVER_ERROR,
    };
    render(
      <WrappedComponent
        loading={true}
        fetchResult={fetchResult}
        typeLoader="spinner"
        typeError={'server'}
      />,
    );
    expect(screen.getByTestId('testID-loading')).toBeInTheDocument();
    expect(screen.getByText('🔄 Loading...')).toBeInTheDocument();
    expect(screen.queryByTestId('testID-error')).not.toBeInTheDocument();
  });
});
