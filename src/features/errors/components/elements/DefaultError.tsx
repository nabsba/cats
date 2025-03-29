import { ERROR_MESSAGES, ErrorMessageKey } from 'features/api';

interface DefaultErrorProps {
  messageCode: ErrorMessageKey;
}

const DefaultError: React.FC<DefaultErrorProps> = ({ messageCode }) => (
  <p>
    {ERROR_MESSAGES[messageCode]
      ? ERROR_MESSAGES[messageCode]
      : ERROR_MESSAGES.SERVER_ERROR}
  </p>
);

export default DefaultError;
