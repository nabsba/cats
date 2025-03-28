import { ERROR_MESSAGES, ErrorMessageKey } from 'features/api';

interface DefaultErrorProps {
  messageCode: ErrorMessageKey;
}

const DefaultError: React.FC<DefaultErrorProps> = ({ messageCode }) => (
  <div className="default_error">{ERROR_MESSAGES[messageCode]}</div>
);

export default DefaultError;
