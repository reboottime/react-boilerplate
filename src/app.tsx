import { Navigate, Route, Routes } from 'react-router-dom';

import AuthRoute from './pages/auth';
import BookingsRoute from './pages/bookings';
import SettingsRoute from './pages/settings';
import AppLayout from './shared/components/app-layout';

export default function App() {
  return (
    <>
      <Routes>
        {/* The good practice is to name application as {app|portal}.example.com */}
        {/* Yet, if you do not want follow that pattern, naming app as prefix is a good way too */}
        <Route element={<Navigate to='/auth' />}
          path='/' />
        <Route element={<AuthRoute />}
          path='/auth/*' />
        <Route element={<AppLayout />}
          path='/app'>
          <Route element={<Navigate to='settings' />}
            index
            path='' />
          <Route element={<SettingsRoute />}
            path='settings/*' />
          <Route element={<BookingsRoute />}
            path='bookings/*' />
        </Route>
      </Routes>
    </>
  );
}
