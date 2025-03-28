import { FormFieldProps } from 'features/form/types/form';
import ErrorFieldDefault from '../errors/ErrorFieldDefault';
import Input from '../inputs/InputDefault';
import LabelDefault from '../labels/labelDefault';

const FormFieldInputAndError: React.FC<FormFieldProps> = ({
  label,
  name,
  formik,
}) => (
  <div>
    <LabelDefault htmlFor={name} text={label} />
    <div style={{ position: 'relative' }}>
      <Input
        id={name}
        name={name}
        type="text"
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div style={{ position: 'absolute', top: '1.5rem' }}>
          <ErrorFieldDefault message={formik.errors[name]} />
        </div>
      )}
    </div>
  </div>
);
export default FormFieldInputAndError;
