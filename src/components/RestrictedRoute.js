// Libs
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// Redux selectors
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
