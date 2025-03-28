interface InputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}
interface LabelProps {
  htmlFor: string;
  text: string;
}
interface ErrorMessageProps {
  message: string;
}

interface SubmitButtonProps {
  disabled?: boolean; // Optional prop to disable the button
}
export type { InputProps, LabelProps, ErrorMessageProps, SubmitButtonProps };
