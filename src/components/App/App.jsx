// Libs
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Helpers
import { lazyNamedModuleImport } from 'helpers/lazyModuleImport';
// Custom routes
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
// Redux operations
import { refreshUser } from 'redux/auth/authOperations';
// Layout
import { Layout } from 'components/Layout/Layout';
// Pages
const HomePage = lazyNamedModuleImport('HomePage');
const ContactsPage = lazyNamedModuleImport('ContactsPage');
const RegisterPage = lazyNamedModuleImport('RegisterPage');
const LoginPage = lazyNamedModuleImport('LoginPage');

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>

      <ToastContainer autoClose={3000} />
    </>
  );
};
