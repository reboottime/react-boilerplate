import { Navigate, Route, Routes } from 'react-router-dom';

import AuthPages from './pages/auth';

export default function App() {
  return (
    <Routes>
      {/* The good practice is to name application as {app|portal}.example.com */}
      {/* Yet, if you do not want follow that pattern, naming app as prefix is a good way too */}
      <Route element={<Navigate to='/auth' />}
        path='/' />
      <Route element={<AuthPages />}
        path='/auth/*' />
    </Routes>
  );
}
