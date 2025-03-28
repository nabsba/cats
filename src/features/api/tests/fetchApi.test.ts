import { API_ENDPOINTS } from 'features/api/datas/constants';
import {
  ERROR_MESSAGES_KEYS,
  STATUS_SERVER_ERROR,
} from 'features/api/datas/errors';
import {
  SUCCESS_MESSAGES_KEYS,
  SUCCESS_STATUS,
} from 'features/api/datas/success';
import { fetchData } from 'features/api/services/fetchData';

// CHATGPT but CHECKED BY ME.

// Mock the global fetch function
global.fetch = jest.fn();

describe('fetchData', () => {
  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Success case
  it('returns data on successful fetch', async () => {
    const mockData = {
      fact: 'Cats have supersonic hearing',
      length: 28,
    };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchData<{ fact: string }>(
      API_ENDPOINTS.cat.main,
      `${API_ENDPOINTS.cat.fact.params.maxLength}=140`,
    );

    expect(fetch).toHaveBeenCalledWith(
      `${API_ENDPOINTS.cat.main}?${API_ENDPOINTS.cat.fact.params.maxLength}=140`,
      { method: 'GET' },
    );
    expect(result).toEqual({
      error: false,
      data: mockData,
      messageCode: SUCCESS_MESSAGES_KEYS.OK,
      statusCode: SUCCESS_STATUS.OK,
    });
  });

  // Error case: HTTP error (e.g., 404)
  it('returns error on HTTP failure', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const result = await fetchData(
      API_ENDPOINTS.cat.main,
      `${API_ENDPOINTS.cat.fact.params.maxLength}=140`,
    );

    expect(fetch).toHaveBeenCalledWith(
      `${API_ENDPOINTS.cat.main}?${API_ENDPOINTS.cat.fact.params.maxLength}=140`,
      { method: 'GET' },
    );
    expect(result).toEqual({
      error: true,
      data: null,
      messageCode: ERROR_MESSAGES_KEYS.SERVER_ERROR,
      statusCode: STATUS_SERVER_ERROR.SERVER_ERROR,
    });
  });

  // Error case: Network or unexpected error
  it('returns error on fetch rejection', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network Error'),
    );

    const result = await fetchData(
      API_ENDPOINTS.cat.main,
      `${API_ENDPOINTS.cat.fact.params.maxLength}=140`,
    );

    expect(fetch).toHaveBeenCalledWith(
      `${API_ENDPOINTS.cat.main}?${API_ENDPOINTS.cat.fact.params.maxLength}=140`,
      { method: 'GET' },
    );
    expect(result).toEqual({
      error: true,
      data: null,
      messageCode: ERROR_MESSAGES_KEYS.SERVER_ERROR,
      statusCode: STATUS_SERVER_ERROR.SERVER_ERROR,
    });
  });

  // Edge case: Unknown error type
  it('handles unknown error types gracefully', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce('Not an Error object');

    const result = await fetchData(
      API_ENDPOINTS.cat.main,
      `${API_ENDPOINTS.cat.fact.params.maxLength}=140`,
    );

    expect(result).toEqual({
      error: true,
      data: null,
      messageCode: ERROR_MESSAGES_KEYS.SERVER_ERROR,
      statusCode: STATUS_SERVER_ERROR.SERVER_ERROR,
    });
  });
});
