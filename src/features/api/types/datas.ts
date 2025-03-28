import { ERROR_MESSAGES_KEYS } from '../datas/errors';
import { SUCCESS_MESSAGES_KEYS } from '../datas/success';

type ErrorMessageKey =
  (typeof ERROR_MESSAGES_KEYS)[keyof typeof ERROR_MESSAGES_KEYS];
type SuccessMessageKey =
  (typeof SUCCESS_MESSAGES_KEYS)[keyof typeof SUCCESS_MESSAGES_KEYS];

export type { ErrorMessageKey, SuccessMessageKey };
