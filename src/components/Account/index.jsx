// import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch,
//   withRouter,
// } from 'react-router-dom';
// import styles from './Account.module.sass';
// import LoginForm from '../Forms/LoginForm';
// import SignupForm from '../Forms/SignupForm';

// const HeaderWithRouter = withRouter(Header);

// function Account () {
//   return (
//     <div className={styles.container}>
//       <div>
//         <img
//           className={styles.logo}
//           src={'https://www.squadhelp.com/img/logo.png'}
//           alt='logo'
//         />
//       </div>
//       <div>
//         <Router>
//           <HeaderWithRouter />
//           <Switch>
//             <Route path='/login'>
//               <LoginForm />
//             </Route>
//             <Route path='/signup'>
//               <SignupForm />
//             </Route>
//           </Switch>
//         </Router>
//       </div>
//     </div>
//   );
// }

// export default Account;

// function Header ({ location: { pathname } }) {
//   const [isLogin, setIsLogin] = useState(pathname === '/login');

//   const signLog = () => {
//     setIsLogin(isLogin => !isLogin);
//   };

//   return (
//     <div>
//       <Link
//         className={styles.link}
//         onClick={signLog}
//         to={isLogin ? '/signup' : '/login'}
//       >
//         {isLogin ? 'Signup' : 'Login'}
//       </Link>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import styles from './Account.module.sass';
// import LoginForm from '../Forms/LoginForm';
// import SignupForm from '../Forms/SignupForm';

// function Account () {
//   const [isLogin, setIsLogin] = useState(true);

//   const signLog = () => {
//     setIsLogin(isLogin => !isLogin);
//   };

//   return (
//     <div className={styles.container}>
//       <div>
//         <img src={'https://www.squadhelp.com/img/logo.png'} alt='logo' />
//       </div>
//       <div>
//         <Router>
//           <div>
//             <Link
//               className={styles.link}
//               onClick={signLog}
//               to={!isLogin ? '/login' : '/signup'}
//             >
//               {!isLogin ? 'Login' : 'Signup'}
//             </Link>
//           </div>
//           <Switch>
//             <Route path='/login'>
//               <LoginForm />
//             </Route>
//             <Route path='/signup'>
//               <SignupForm />
//             </Route>
//           </Switch>
//         </Router>
//       </div>
//     </div>
//   );
// }

// export default Account;
