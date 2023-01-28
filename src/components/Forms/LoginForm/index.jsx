import { Formik, Field, Form } from 'formik';
import React from 'react';
import { LOGIN_VALIDATION_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';
import styles from './LoginForm.module.sass';

function LoginForm () {
  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <Formik
      className={styles.container}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LOGIN_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          type='email'
          name='email'
          placeholder='Email Adress'
          autoFocus
          classes={classes}
        />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          classes={classes}
        />
        <label className={styles.checkbox}>
          <Field type='checkbox' name='toggle' />
          Remember me
        </label>
        <button type='submit'>LOGIN</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
