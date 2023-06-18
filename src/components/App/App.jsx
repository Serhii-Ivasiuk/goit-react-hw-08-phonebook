// Libs
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
// Custom routes
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
// Redux operations
import { refresh } from 'redux/auth/authOperations';
// Layout
import { Layout } from 'components/Layout/Layout';
// Pages
import { HomePage } from 'pages/HomePage/HomePage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
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
    </>
  );
};
