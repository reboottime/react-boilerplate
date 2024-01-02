import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const BillingPage = lazy(() => import('./billing'));
const DeveloperPage = lazy(() => import('./developer'));
const ProfilePage = lazy(() => import('./profile'));

// routing configuration example: https://app.cal.com/auth/login
export default function AuthPages() {
  const routes = useRoutes([
    {
      path: '',
      index: true,
      element: <Navigate to='profile' />,
    },
    {
      path: 'billing',
      element: <BillingPage />,
    },
    {
      path: 'developer',
      element: <DeveloperPage />,
    },
    {
      path: 'profile',
      element: <ProfilePage />,
    },
    {
      path: '*',
      element: <Navigate to='profile' />,
    },
  ]);

  //   Configure with page skeleton if you are picky with flicker effect
  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
}
