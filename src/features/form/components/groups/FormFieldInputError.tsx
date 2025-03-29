import { FormFieldProps } from 'features/form/types/form';
import ErrorFieldDefault from '../errors/ErrorFieldDefault';
import Input from '../inputs/InputDefault';
import LabelDefault from '../labels/labelDefault';
import styles from '../../styles/formFieldInputError.module.css';
const FormFieldInputAndError: React.FC<FormFieldProps> = ({
  label,
  name,
  formik,
  type,
  min,
  placeHolder,
}) => (
  <div>
    <LabelDefault htmlFor={name} text={label} />
    <div className={styles['input_and_errorField']}>
      {/* !refactor Create a specific input for each type to avoid violating the "O" in SOLID principles and to prevent adding unnecessary complexity with extra properties.  */}
      <Input
        id={name}
        name={name}
        type={type ? type : 'text'}
        value={
          (formik.values[name] as unknown) ? formik.values[name] : undefined
        }
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // this min proprety is not necessary for type text. What about other type such as "date" etc
        min={min ? min : undefined}
        placeHolder={placeHolder}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className={styles['errorField']}>
          <ErrorFieldDefault message={formik.errors[name]} />
        </div>
      )}
    </div>
  </div>
);
export default FormFieldInputAndError;
