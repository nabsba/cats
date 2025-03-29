import { ERROR_MESSAGES_KEYS, STATUS_SERVER_ERROR } from '../datas/errors';
import { SUCCESS_MESSAGES_KEYS, SUCCESS_STATUS } from '../datas/success';
import { ErrorMessageKey, FetchResult } from '../types/fetchData';

async function fetchData<T>(
  url: string,
  params: string,
): Promise<FetchResult<T>> {
  const fullUrl = `${url}?${params}`;
  try {
    const response = await fetch(fullUrl, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(ERROR_MESSAGES_KEYS.SERVER_ERROR as string);
    }
    const data = (await response.json()) as T;
    return {
      error: false,
      data,
      messageCode: SUCCESS_MESSAGES_KEYS.OK,
      statusCode: SUCCESS_STATUS.OK,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error && error.message ? error.message : 'SERVER_ERROR';

    return {
      error: true,
      data: null, // Explicitly added for error case
      messageCode: ERROR_MESSAGES_KEYS[errorMessage as ErrorMessageKey]
        ? ERROR_MESSAGES_KEYS[errorMessage as ErrorMessageKey]
        : ERROR_MESSAGES_KEYS.SERVER_ERROR,
      statusCode: STATUS_SERVER_ERROR.SERVER_ERROR,
    };
  }
}

export { fetchData };
