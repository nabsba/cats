import { ERROR_MESSAGES_KEYS } from '../datas/errors';
import { SuccessMessageKey } from './datas';

interface FetchResult<T> {
  error: boolean;
  data: T | null;
  messageCode: SuccessMessageKey | ErrorMessageKey;
}
type ErrorMessageKey = keyof typeof ERROR_MESSAGES_KEYS;

export type { FetchResult, ErrorMessageKey };
