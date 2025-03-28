import { render, screen } from '@testing-library/react';

import {
  ComponentWithLogicDataFetching,
  ERROR_MESSAGES,
  STATUS_SERVER_ERROR,
  SUCCESS_STATUS,
} from '..';

describe('ComponentWithLogicDataFetching', () => {
  // Mock component to wrap
  const MockComponent = ({ data }: { data: string }) => (
    <div data-testid="mock-component">{data}</div>
  );
  const WrappedComponent = ComponentWithLogicDataFetching(MockComponent);

  it('renders Loader when isLoading is true', () => {
    render(<WrappedComponent isLoading={true} typeLoader="spinner" />);
    expect(screen.getByTestId('testID-loading')).toBeInTheDocument();
    expect(screen.getByText('🔄 Loading...')).toBeInTheDocument();
  });

  it('renders ErrorComponent when isErrorServer is true', () => {
    const messageCode = 'SERVER_ERROR';
    const fetchResult = {
      error: true,
      messageCode: messageCode,
      data: null,
      statusCode: STATUS_SERVER_ERROR.SERVER_ERROR,
    };
    render(<WrappedComponent fetchResult={fetchResult} loading={false} />);
    expect(screen.getByTestId('testID-error')).toBeInTheDocument();
    expect(screen.getByText(ERROR_MESSAGES[messageCode])).toBeInTheDocument();
  });

  it('renders wrapped Component when no loading or error', () => {
    const fetchResult = {
      error: false,
      messageCode: '',
      data: 'hello',
      statusCode: SUCCESS_STATUS.OK,
    };
    // eslint-disable-next-line prettier/prettier
    render(<WrappedComponent isLoading={false} fetchResult={fetchResult}  text="Hello" />);
    const component = screen.getByTestId('mock-component');
    expect(component).toBeInTheDocument();
  });

  it('prioritizes isLoading over isErrorServer', () => {
    const fetchResult = {
      error: false,
      messageCode: '',
      data: null,
      statusCode: STATUS_SERVER_ERROR.SERVER_ERROR,
    };
    render(
      <WrappedComponent
        isLoading={true}
        fetchResult={fetchResult}
        typeLoader="spinner"
      />,
    );
    expect(screen.getByTestId('testID-loading')).toBeInTheDocument();
    expect(screen.getByText('🔄 Loading...')).toBeInTheDocument();
    expect(screen.queryByTestId('testID-error')).not.toBeInTheDocument();
  });
});
