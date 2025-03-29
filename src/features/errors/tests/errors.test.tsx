// ErrorComponent.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import ErrorComponent from '../components/ErrorComponent';
import { ERROR_MESSAGES, STATUS_SERVER_ERROR } from 'features/api';
// Adjust this import based on your file structure

describe('ErrorComponent', () => {
  it('should render the correct error message based on the typeError and messageCode props', () => {
    const messageCode = 'SERVER_ERROR';
    const fetchResult = {
      error: true,
      messageCode: messageCode,
      data: null,
      statusCode: STATUS_SERVER_ERROR.SERVER_ERROR,
    };
    const { getByText } = render(
      <ErrorComponent typeError="server" fetchResult={fetchResult} />,
    );

    // Check if the server error message appears
    expect(getByText(ERROR_MESSAGES[messageCode])).toBeInTheDocument();
  });
});
