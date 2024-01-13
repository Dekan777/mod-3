import { Formik, Form, Field } from 'formik';
// import css from './FeedbackForm.module.css';

const initialValues = {
  username: '',
  email: '',
};

export const FeedbackForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="username" />
        <Field type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
