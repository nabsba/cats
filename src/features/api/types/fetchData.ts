import { ERROR_MESSAGES_KEYS } from '../datas/errors';
import { SuccessMessageKey } from './datas';

interface FetchResult {
  error: boolean;
  data: CatFactData | object | null | string;
  messageCode: SuccessMessageKey | ErrorMessageKey;
  statusCode: number;
}
interface CatFactData {
  fact: string;
  length: number;
}

type ErrorMessageKey = keyof typeof ERROR_MESSAGES_KEYS;

export type { FetchResult, ErrorMessageKey, CatFactData };
