// Libs
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// Redux selectors
import { getIsLoggedIn, getIsRefreshing } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
