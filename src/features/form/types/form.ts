import { FormikProps } from 'formik';

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

interface FormFieldProps {
  label: string;
  name: keyof FormValues; // Ensures 'name' is a valid key
  formik: FormikProps<FormValues>;
}

// Define form values type separately
interface FormValues {
  name: string;
}
export type {
  InputProps,
  LabelProps,
  ErrorMessageProps,
  SubmitButtonProps,
  FormFieldProps,
};
