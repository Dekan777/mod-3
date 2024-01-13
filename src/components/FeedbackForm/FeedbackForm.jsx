import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  message: Yup.string().min(3, 'Too short').max(256, 'Too long').required('Required'),
  level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});
const initialValues = {
  username: '',
  email: '',
  message: '',
  level: 'good',
};

export const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />

        <label htmlFor={msgFieldId}>Message</label>
        <Field as="textarea" name="message" id={msgFieldId} rows="5" />

        <label htmlFor={levelFieldId}>Service satisfaction level</label>
        <Field as="select" name="level" id={levelFieldId}>
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
