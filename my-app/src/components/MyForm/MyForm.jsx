import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Ім\'я є обов\'язковим'),
  email: Yup.string().email('Введіть правильну електронну адресу').required('Електронна адреса є обов\'язковою'),
  phone: Yup.string().matches(/^[0-9]+$/, 'Введіть тільки цифри').min(12, 'Телефон повинен містити 12 цифр').max(12, 'Телефон повинен містити 12 цифр').required('Телефон є обов\'язковим'),
});

const MyForm = () => {
  return (
    <div>
      <h1>Форма</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <Field type="text" name="name" placeholder="Ім'я"/>
            <ErrorMessage name="name" component="div"/>
          </div>
          <div>
            <Field type="email" name="email" placeholder="Електронна пошта"/>
            <ErrorMessage name="email" component="div"/>
          </div>
          <div>
            <Field type="text" name="phone" placeholder="Телефон"/>
            <ErrorMessage name="phone" component="div"/>
          </div>
          <button type="submit">
            Відправити
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
