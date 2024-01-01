import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const RegisterPage = lazy(() => import('./register'));
const LoginPage = lazy(() => import('./login'));

// routing configuration example: https://app.cal.com/auth/login
export default function AuthPages() {
  const routes = useRoutes([
    {
      path: '',
      index: true,
      element: <Navigate to='login' />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '*',
      element: <LoginPage />,
    },
  ]);

  //   Configure with page skeleton if you are picky with flicker effect
  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
}
