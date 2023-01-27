import React from 'react';
import LoginForm from '.';
import styles from './LoginForm.module.sass';

function LoginPage () {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.account}>LOGIN TO YOUR ACCOUNT</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
