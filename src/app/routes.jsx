import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';

// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));

// echart page
const AppEchart = Loadable(lazy(() => import('app/views/charts/echarts/AppEchart')));

// Portfolio page
const About = Loadable(lazy(() => import('app/views/portfolio/About')));
const Education = Loadable(lazy(() => import('app/views/portfolio/Education')));
const Services = Loadable(lazy(() => import('app/views/portfolio/Services')));
const ContactUs = Loadable(lazy(() => import('app/views/portfolio/ContactUs')));
const Projects = Loadable(lazy(() => import('app/views/portfolio/Projects')));

// dashboard page
const Analytics = Loadable(lazy(() => import('app/views/dashboard/Analytics')));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      {
        path: '/dashboard/default',
        element: <Analytics />,
        auth: authRoles.admin
      },

      // e-chart rooute
      {
        path: '/charts/echarts',
        element: <AppEchart />,
        auth: authRoles.editor
      },

      // profile section
      {
        path: '/portfolio/about',
        element: <About />,
        auth: authRoles.editor
      },
      {
        path: '/portfolio/education',
        element: <Education />,
        auth: authRoles.editor
      },
      {
        path: '/portfolio/services',
        element: <Services />,
        auth: authRoles.editor
      },
      {
        path: '/portfolio/contact_us',
        element: <ContactUs />,
        auth: authRoles.editor
      },
      {
        path: '/portfolio/projects',
        element: <Projects />,
        auth: authRoles.editor
      }
    ]
  },

  // session pages route
  { path: '/session/404', element: <NotFound /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },

  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
