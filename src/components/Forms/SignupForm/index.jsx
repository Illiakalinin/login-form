import { Formik, Form } from 'formik';
import React from 'react';
import { LOGIN_VALIDATION_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';
import styles from './SignupForm.module.sass';

function SignupForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

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
          type='text'
          name='firstName'
          placeholder='First name'
          autoFocus
          classes={classes}
        />
        <Input
          type='text'
          name='lastName'
          placeholder='Last name'
          classes={classes}
        />
        <Input
          type='text'
          name='name'
          placeholder='Display Name'
          classes={classes}
        />
        <Input
          type='email'
          name='email'
          placeholder='Email Adress'
          classes={classes}
        />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          classes={classes}
        />
        <Input
          type='password'
          name='passwordConfirm'
          placeholder='Password Confirmation'
          classes={classes}
        />
        <button type='submit'>Create your account</button>
      </Form>
    </Formik>
  );
}

export default SignupForm;
