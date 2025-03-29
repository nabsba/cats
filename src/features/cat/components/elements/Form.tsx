import { formMessage } from 'features/cat/datas/constants';
import { FormFieldInputAndError } from 'features/form';
import SubmitButtonDefault from 'features/form/components/submits/SubmitDefault';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface MyFormCatProps {
  handleSubmit: (value: number) => void;
}

const MyFormCat: React.FC<MyFormCatProps> = ({ handleSubmit }) => {
  const validationSchema = Yup.object({
    length: Yup.number()
      .moreThan(19, `${formMessage.lengthError}`) // Ensures the number is greater than 20
      .required(formMessage.required),
  });

  const formik = useFormik({
    initialValues: { length: 0 },
    validationSchema,
    onSubmit: async (values) => handleSubmit(values.length),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormFieldInputAndError
        type="number"
        label="Select the length of the cat fact you'd like to receive."
        name="length"
        placeHolder="Must be superior than 19"
        formik={formik}
        min={'20'}
      />
      <div style={{ marginTop: '2rem' }}>
        <SubmitButtonDefault disabled={!(formik.isValid && formik.dirty)} />
      </div>
    </form>
  );
};

export default MyFormCat;
