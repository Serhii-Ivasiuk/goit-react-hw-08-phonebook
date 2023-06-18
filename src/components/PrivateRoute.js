// Libs
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// Redux selectors
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
