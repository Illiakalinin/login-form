import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import styles from './App.module.sass';
import LoginPage from './components/Forms/LoginForm/loginPage';
import SignUpPage from './components/Forms/SignupForm/signUpPage';

const HeaderWithRouter = withRouter(Header);

function App () {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.logo}
          src={'https://www.squadhelp.com/img/logo.png'}
          alt='logo'
        />
      </div>
      <div>
        <Router>
          <HeaderWithRouter />
          <Switch>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <Route path='/signup'>
              <SignUpPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

function Header ({ location: { pathname } }) {
  const [isLogin, setIsLogin] = useState(pathname === '/login');

  const signLog = () => {
    setIsLogin(isLogin => !isLogin);
  };

  return (
    <div>
      <Link
        className={styles.link}
        onClick={signLog}
        to={isLogin ? '/signup' : '/login'}
      >
        {isLogin ? 'Signup' : 'Login'}
      </Link>
    </div>
  );
}
