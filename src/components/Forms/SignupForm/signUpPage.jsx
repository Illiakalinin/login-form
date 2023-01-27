import React from 'react';
import SignupForm from '.';
import styles from './SignupForm.module.sass';

function SignUpPage () {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.account}>CREATE AN ACCOUNT</h2>
      <h4 className={styles.info}>
        We always keep your name and email adress private.
      </h4>
      <SignupForm />
    </div>
  );
}

export default SignUpPage;
