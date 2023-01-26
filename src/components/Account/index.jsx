import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styles from './Account.module.sass';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';

function Account () {
  const [isLogin, setIsLogin] = useState(true);

  const signLog = () => {
    setIsLogin(isLogin => !isLogin);
  };

  return (
    <div className={styles.container}>
      <div>
        <img src={'https://www.squadhelp.com/img/logo.png'} alt='logo' />
      </div>
      <div>
        <Router>
          <div>
            <Link
              className={styles.link}
              onClick={signLog}
              to={isLogin ? '/loginform' : '/signupForm'}
            >
              {isLogin ? 'Login' : 'Signup'}
            </Link>
          </div>
          <Switch>
            <Route path='/loginform'>
              <LoginForm />
            </Route>
            <Route path='/signupform'>
              <SignupForm />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Account;
