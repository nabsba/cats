import { fetchData } from 'features/api/services/fetchData';
import { API_ENDPOINTS } from './datas/constants';
import {
  ERROR_MESSAGES,
  ERROR_MESSAGES_KEYS,
  STATUS_SERVER_ERROR,
} from './datas/errors';
import {
  SUCCESS_MESSAGES,
  SUCCESS_MESSAGES_KEYS,
  SUCCESS_STATUS,
} from './datas/success';
import { ErrorMessageKey, FetchResult } from './types/fetchData';
import ComponentWithLogicDataFetching from './components/LogicComponent';

export {
  API_ENDPOINTS,
  fetchData,
  ERROR_MESSAGES,
  ERROR_MESSAGES_KEYS,
  STATUS_SERVER_ERROR,
  SUCCESS_MESSAGES,
  SUCCESS_MESSAGES_KEYS,
  SUCCESS_STATUS,
  ComponentWithLogicDataFetching,
};
export type { FetchResult, ErrorMessageKey };
