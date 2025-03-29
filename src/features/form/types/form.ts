import { FormikProps } from 'formik';

interface InputProps {
  id: string;
  name: string;
  type: string;
  value: string | undefined | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  min?: string;
  placeHolder?: string;
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
type InputType = 'text' | 'number';
interface FormFieldProps {
  label: string;
  name: keyof FormValues; // Ensures 'name' is a valid key
  formik: FormikProps<FormValues>;
  type?: InputType;
  min?: string;
  placeHolder?: string;
}

// Define form values type separately
interface FormValues {
  length: number;
}
export type {
  InputProps,
  LabelProps,
  ErrorMessageProps,
  SubmitButtonProps,
  FormFieldProps,
};
