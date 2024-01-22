import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const NotFound = Loadable(lazy(() => import('./NotFound')));
const ForgotPassword = Loadable(lazy(() => import('./ForgotPassword')));
const FirebaseLogin = Loadable(lazy(() => import('./login/FirebaseLogin')));
// const JwtLogin = Loadable(lazy(() => import('./login/JwtLogin')));
// const Auth0Login = Loadable(lazy(() => import("./login/Auth0Login")));
const FirebaseRegister = Loadable(lazy(() => import('./register/FirebaseRegister')));
// const JwtRegister = Loadable(lazy(() => import("./register/JwtRegister")));

const sessionRoutes = [
  {
    path: '/session/signup',
    element: <FirebaseRegister />,
  },
  {
    path: '/session/signin',
    element: <FirebaseLogin />,
  },
  {
    path: '/session/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/session/404',
    element: <NotFound />,
  },
];

export default sessionRoutes;
